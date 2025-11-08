import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, LayoutDashboard, Settings as SettingsIcon } from "lucide-react";
import { Link } from "react-router-dom";
import AdminStats from "@/components/admin/AdminStats";
import QuickActions from "@/components/admin/QuickActions";

const Admin = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    company_name: "",
    ceo_name: "",
    ceo_title: "",
    ceo_bio: "",
    ceo_quote: "",
    ceo_image_url: "",
    contact_email: "",
    contact_phone: "",
    contact_address: "",
  });

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchSettings();
    }
  }, [user, isAdmin]);

  const fetchSettings = async () => {
    const { data, error } = await (supabase as any)
      .from("site_settings")
      .select("key, value");

    if (error) {
      toast({
        title: "Error loading settings",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    if (data) {
      const settingsObj: any = {};
      data.forEach((item: any) => {
        settingsObj[item.key] = item.value || "";
      });
      setSettings(settingsObj);
    }
  };

  const handleSave = async () => {
    setSaving(true);

    try {
      for (const [key, value] of Object.entries(settings)) {
        // Check if setting exists
        const { data: existing } = await (supabase as any)
          .from("site_settings")
          .select("id")
          .eq("key", key)
          .maybeSingle();

        if (existing) {
          const { error } = await (supabase as any)
            .from("site_settings")
            .update({ value })
            .eq("key", key);
          if (error) throw error;
        } else {
          const { error } = await (supabase as any)
            .from("site_settings")
            .insert({ key, value });
          if (error) throw error;
        }
      }

      toast({
        title: "Settings saved",
        description: "Your changes have been saved successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error saving settings",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 md:mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="mb-6 md:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair">Admin Dashboard</h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-2">Manage your store and content</p>
            </div>

            <Tabs defaultValue="dashboard" className="space-y-6">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="dashboard" className="gap-2">
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="settings" className="gap-2">
                  <SettingsIcon className="w-4 h-4" />
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                <AdminStats />
                <QuickActions />
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <div className="flex justify-end">
                  <Button onClick={handleSave} disabled={saving} size="lg">
                    <Save className="w-4 h-4 mr-2" />
                    {saving ? "Saving..." : "Save Changes"}
                  </Button>
                </div>

                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl">Company Information</CardTitle>
                      <CardDescription className="text-sm">Update basic company details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="company_name" className="text-sm">Company Name</Label>
                        <Input
                          id="company_name"
                          value={settings.company_name}
                          onChange={(e) => setSettings({ ...settings, company_name: e.target.value })}
                          className="h-10 sm:h-11"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl">CEO Information</CardTitle>
                      <CardDescription className="text-sm">Update CEO profile details displayed on About page</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ceo_name" className="text-sm">CEO Name</Label>
                          <Input
                            id="ceo_name"
                            value={settings.ceo_name}
                            onChange={(e) => setSettings({ ...settings, ceo_name: e.target.value })}
                            className="h-10 sm:h-11"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ceo_title" className="text-sm">CEO Title</Label>
                          <Input
                            id="ceo_title"
                            value={settings.ceo_title}
                            onChange={(e) => setSettings({ ...settings, ceo_title: e.target.value })}
                            className="h-10 sm:h-11"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ceo_image_url" className="text-sm">CEO Image URL</Label>
                        <Input
                          id="ceo_image_url"
                          placeholder="https://example.com/image.jpg"
                          value={settings.ceo_image_url}
                          onChange={(e) => setSettings({ ...settings, ceo_image_url: e.target.value })}
                          className="h-10 sm:h-11"
                        />
                        <p className="text-xs text-muted-foreground">Enter a URL to an image hosted online</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ceo_bio" className="text-sm">CEO Biography</Label>
                        <Textarea
                          id="ceo_bio"
                          placeholder="Share the CEO's background and story..."
                          value={settings.ceo_bio}
                          onChange={(e) => setSettings({ ...settings, ceo_bio: e.target.value })}
                          rows={5}
                          className="text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ceo_quote" className="text-sm">CEO Quote</Label>
                        <Textarea
                          id="ceo_quote"
                          placeholder="A memorable quote from the CEO..."
                          value={settings.ceo_quote}
                          onChange={(e) => setSettings({ ...settings, ceo_quote: e.target.value })}
                          rows={3}
                          className="text-sm"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl">Contact Information</CardTitle>
                      <CardDescription className="text-sm">Update contact details displayed on the site</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact_email" className="text-sm">Email</Label>
                        <Input
                          id="contact_email"
                          type="email"
                          placeholder="hello@company.com"
                          value={settings.contact_email}
                          onChange={(e) => setSettings({ ...settings, contact_email: e.target.value })}
                          className="h-10 sm:h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact_phone" className="text-sm">Phone</Label>
                        <Input
                          id="contact_phone"
                          placeholder="+1 (555) 123-4567"
                          value={settings.contact_phone}
                          onChange={(e) => setSettings({ ...settings, contact_phone: e.target.value })}
                          className="h-10 sm:h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact_address" className="text-sm">Address</Label>
                        <Textarea
                          id="contact_address"
                          placeholder="123 Main Street, City, State ZIP"
                          value={settings.contact_address}
                          onChange={(e) => setSettings({ ...settings, contact_address: e.target.value })}
                          rows={3}
                          className="text-sm"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;