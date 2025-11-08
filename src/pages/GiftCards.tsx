import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

const GiftCards = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <Gift className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-playfair mb-6">Gift Cards</h1>
              <p className="text-xl text-muted-foreground">
                Give the gift of elegance and let them choose their perfect piece
              </p>
            </div>

            <div className="bg-card border border-border rounded-3xl p-12 text-center">
              <h2 className="text-3xl font-playfair mb-4">Available Amounts</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                {['$50', '$100', '$250', '$500'].map((amount) => (
                  <button
                    key={amount}
                    className="p-6 rounded-2xl border border-border hover:border-primary hover:bg-secondary transition-all"
                  >
                    <span className="text-2xl font-playfair">{amount}</span>
                  </button>
                ))}
              </div>
              <Button size="lg" className="mt-4">
                Purchase Gift Card
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GiftCards;
