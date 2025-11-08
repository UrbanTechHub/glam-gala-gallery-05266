-- Create products table
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT NOT NULL,
  collection TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT false,
  is_new_arrival BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Everyone can view products
CREATE POLICY "Everyone can view products"
  ON public.products
  FOR SELECT
  USING (true);

-- Only admins can insert products
CREATE POLICY "Only admins can insert products"
  ON public.products
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update products
CREATE POLICY "Only admins can update products"
  ON public.products
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete products
CREATE POLICY "Only admins can delete products"
  ON public.products
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON public.products
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at();