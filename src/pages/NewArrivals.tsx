import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeaturedProducts } from "@/components/FeaturedProducts";

const NewArrivals = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-playfair mb-4">New Arrivals</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest additions to our collection, featuring the season's most coveted pieces
            </p>
          </div>
        </div>
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default NewArrivals;
