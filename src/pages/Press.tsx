import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Press = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-playfair mb-6">Press</h1>
              <p className="text-xl text-muted-foreground">
                Media inquiries and brand information
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair mb-4">Press Contact</h2>
                <p className="text-lg text-muted-foreground mb-2">
                  For media inquiries, press releases, or collaboration opportunities:
                </p>
                <p className="text-lg">press@elegante.com</p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair mb-4">Brand Assets</h2>
                <p className="text-muted-foreground mb-4">
                  Download our media kit including logos, brand guidelines, and high-resolution imagery.
                </p>
                <button className="text-primary hover:underline">
                  Download Media Kit →
                </button>
              </div>

              <div>
                <h2 className="text-3xl font-playfair mb-4">Recent Features</h2>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">Vogue • March 2024</p>
                    <h3 className="text-xl font-semibold mb-2">
                      "Strickland Fashion Redefines Modern Elegance"
                    </h3>
                    <p className="text-muted-foreground">
                      A deep dive into the brand's commitment to timeless design and sustainable luxury.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-secondary/50">
                    <p className="text-sm text-muted-foreground mb-1">Harper's Bazaar • February 2024</p>
                    <h3 className="text-xl font-semibold mb-2">
                      "The New Wave of Sophisticated Fashion"
                    </h3>
                    <p className="text-muted-foreground">
                      How Strickland Fashion is bringing classical elegance to the modern wardrobe.
                    </p>
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

export default Press;
