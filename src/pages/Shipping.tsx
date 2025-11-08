import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Truck, Globe, Package } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-playfair mb-6">Shipping</h1>
              <p className="text-xl text-muted-foreground">
                Fast, reliable delivery to your door
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-playfair">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  Standard shipping in 3-5 business days, express options available
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-playfair">Worldwide</h3>
                <p className="text-muted-foreground">
                  We ship to over 50 countries with tracked delivery
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
                  <Package className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-playfair">Premium Packaging</h3>
                <p className="text-muted-foreground">
                  Beautifully packaged with sustainable materials
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair mb-4">Shipping Rates</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-secondary/50">
                    <span>Standard Shipping (3-5 business days)</span>
                    <span className="font-semibold">$10</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-secondary/50">
                    <span>Express Shipping (2-3 business days)</span>
                    <span className="font-semibold">$25</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-secondary/50">
                    <span>Free Standard Shipping</span>
                    <span className="font-semibold">Orders over $200</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-playfair mb-4">International Shipping</h2>
                <p className="text-muted-foreground">
                  International shipping rates vary by destination. Delivery times are typically 7-14 business days. 
                  Additional customs fees may apply depending on your country's import regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
