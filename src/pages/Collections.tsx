import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { collections } from "@/data/collections";
import { Badge } from "@/components/ui/badge";

const Collections = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-4 md:mb-6">Our Collections</h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collections, each telling a unique story of elegance and sophistication
            </p>
          </div>

          {/* Display all collections */}
          <div className="space-y-20 md:space-y-24">
            {Object.entries(collections).map(([key, collection]) => (
              <section key={key} className="space-y-8">
                <div className="text-center">
                  <Badge variant="secondary" className="mb-3">Collection</Badge>
                  <h2 className="text-3xl md:text-4xl font-playfair mb-3">{collection.name}</h2>
                  <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                    {collection.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {collection.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      image={product.image}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      badge={product.badge}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
