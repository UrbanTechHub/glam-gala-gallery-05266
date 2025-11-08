import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaf, Recycle, Heart } from "lucide-react";

const Sustainability = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-playfair mb-6">Sustainability</h1>
              <p className="text-xl text-muted-foreground">
                Fashion with purpose, elegance with responsibility
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-playfair">Sustainable Materials</h3>
                <p className="text-muted-foreground">
                  We source premium, eco-friendly fabrics and work with suppliers committed to sustainable practices
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
                  <Recycle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-playfair">Circular Fashion</h3>
                <p className="text-muted-foreground">
                  Creating timeless pieces designed to last, reducing waste and promoting conscious consumption
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-playfair">Ethical Production</h3>
                <p className="text-muted-foreground">
                  Fair wages, safe working conditions, and respect for the artisans who bring our designs to life
                </p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-3xl font-playfair mb-4">Our Commitment</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At ÉLÉGANTE, we believe that true luxury means taking responsibility for our impact on the planet 
                  and the people who make our clothing. We're committed to continuous improvement in every aspect of 
                  our supply chain.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair mb-4">Looking Forward</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're constantly working to reduce our environmental footprint, from biodegradable packaging to 
                  carbon-neutral shipping. Our goal is to create beautiful fashion that you can feel good about wearing.
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

export default Sustainability;
