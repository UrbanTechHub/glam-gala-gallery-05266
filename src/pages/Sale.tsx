import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const Sale = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Limited Time</Badge>
            <h1 className="text-5xl md:text-6xl font-playfair mb-6">Sale</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover exceptional pieces at special prices. Selected items from our curated collections.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center py-20">
            <p className="text-lg text-muted-foreground">
              New sale items coming soon. Sign up for our newsletter to be notified when they arrive.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sale;
