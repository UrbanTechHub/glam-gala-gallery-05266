import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const About = () => {
  const [settings, setSettings] = useState({
    company_name: "ÉLÉGANTE",
    ceo_name: "Sophia Laurent",
    ceo_title: "CEO & Founder",
    ceo_bio: "",
    ceo_quote: "",
    ceo_image_url: "",
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    const { data } = await (supabase as any)
      .from("site_settings")
      .select("key, value")
      .in("key", ["company_name", "ceo_name", "ceo_title", "ceo_bio", "ceo_quote", "ceo_image_url"]);

    if (data) {
      const settingsObj: any = { ...settings };
      data.forEach((item: any) => {
        if (item.value) {
          settingsObj[item.key] = item.value;
        }
      });
      setSettings(settingsObj);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair mb-4 md:mb-6">Our Story</h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                A journey of elegance, craftsmanship, and timeless style
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl sm:text-3xl font-playfair mb-3 md:mb-4">Founded on Elegance</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {settings.company_name} was born from a passion for creating sophisticated fashion that empowers women. 
                  We believe that true elegance comes from quality craftsmanship, timeless design, and 
                  attention to detail.
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl sm:text-3xl font-playfair mb-3 md:mb-4">Our Philosophy</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Every piece in our collection is carefully selected or designed to stand the test of time. 
                  We create clothing that transcends trends, focusing on classic silhouettes and luxurious 
                  materials that make you feel confident and beautiful.
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl sm:text-3xl font-playfair mb-3 md:mb-4">Craftsmanship</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Working with master artisans and premium materials, we ensure each garment meets our 
                  exacting standards. From the initial sketch to the final stitch, quality is never 
                  compromised.
                </p>
              </div>
            </div>

            {/* CEO Section */}
            <div className="border-t border-border pt-12 md:pt-16">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 md:order-1 space-y-4">
                  <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-secondary text-xs">
                    Leadership
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-playfair">Meet Our CEO</h2>
                  <h3 className="text-xl sm:text-2xl text-primary">{settings.ceo_name}</h3>
                  
                  {settings.ceo_bio && (
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                      {settings.ceo_bio}
                    </p>
                  )}
                  
                  {!settings.ceo_bio && (
                    <>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        With over 15 years of experience in luxury fashion, {settings.ceo_name} founded {settings.company_name} 
                        with a vision to create a brand that celebrates the modern woman's elegance and strength.
                      </p>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        Her passion for sustainable fashion and commitment to exceptional quality has shaped 
                        {settings.company_name} into a globally recognized brand. Her design philosophy centers on creating 
                        pieces that empower women to feel confident in every aspect of their lives.
                      </p>
                    </>
                  )}
                  
                  {settings.ceo_quote && (
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed italic border-l-2 border-primary pl-4">
                      "{settings.ceo_quote}" - {settings.ceo_name}
                    </p>
                  )}
                </div>
                <div className="order-1 md:order-2">
                  <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-secondary shadow-elegant">
                    {settings.ceo_image_url ? (
                      <img 
                        src={settings.ceo_image_url} 
                        alt={settings.ceo_name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <div className="text-center">
                          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                            <span className="text-4xl sm:text-5xl font-playfair text-primary">
                              {settings.ceo_name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <p className="text-sm">{settings.ceo_name}</p>
                          <p className="text-xs text-muted-foreground">{settings.ceo_title}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;