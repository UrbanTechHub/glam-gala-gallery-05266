
-- Migration: 20251108065532

-- Migration: 20251108064159

-- Migration: 20251108063654
-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create user_roles table (separate from profiles for security)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Create site_settings table for editable content
CREATE TABLE public.site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  updated_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable RLS on site_settings
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Insert default site settings
INSERT INTO public.site_settings (key, value) VALUES
  ('company_name', 'ÉLÉGANTE'),
  ('ceo_name', 'Sophia Laurent'),
  ('ceo_title', 'CEO & Founder'),
  ('ceo_bio', 'With over 15 years of experience in luxury fashion, Sophia Laurent founded ÉLÉGANTE with a vision to create a brand that celebrates the modern woman''s elegance and strength.'),
  ('ceo_quote', 'Fashion should be timeless, elegant, and above all, make you feel like the best version of yourself.'),
  ('contact_email', 'contact@elegante.com'),
  ('contact_phone', '+1 (555) 123-4567'),
  ('contact_address', '123 Fashion Avenue, New York, NY 10001');

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  USING (auth.uid() = user_id);

-- RLS Policies for site_settings
CREATE POLICY "Everyone can view site settings"
  ON public.site_settings FOR SELECT
  USING (true);

CREATE POLICY "Only admins can update site settings"
  ON public.site_settings FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can insert site settings"
  ON public.site_settings FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Function to handle new user signups
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email)
  VALUES (NEW.id, NEW.email);
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  
  RETURN NEW;
END;
$$;

-- Trigger to create profile and role on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Migration: 20251108063718
-- Fix search_path for update_updated_at function (replace without dropping)
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;


-- Migration: 20251108064344
-- Seed initial site settings
INSERT INTO site_settings (key, value) VALUES
  ('company_name', 'ÉLÉGANTE'),
  ('ceo_name', 'Sophia Laurent'),
  ('ceo_title', 'CEO & Founder'),
  ('ceo_bio', 'With over 15 years of experience in luxury fashion, Sophia Laurent founded ÉLÉGANTE with a vision to create a brand that celebrates the modern woman''s elegance and strength. Her passion for sustainable fashion and commitment to exceptional quality has shaped ÉLÉGANTE into a globally recognized brand. Sophia''s design philosophy centers on creating pieces that empower women to feel confident in every aspect of their lives.'),
  ('ceo_quote', 'Fashion should be timeless, elegant, and above all, make you feel like the best version of yourself.'),
  ('ceo_image_url', ''),
  ('contact_email', 'hello@elegante.com'),
  ('contact_phone', '+1 (555) 123-4567'),
  ('contact_address', '123 Fashion Avenue, New York, NY 10001')
ON CONFLICT (key) DO NOTHING;

