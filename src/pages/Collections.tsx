import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string;
  collection: string;
  is_featured: boolean;
}

const collectionInfo: Record<string, { name: string; description: string }> = {
  power: {
    name: "Power Collection",
    description: "Tailored pieces that command attention and exude confidence in every setting"
  },
  evening: {
    name: "Evening Collection",
    description: "Elegant evening wear designed for unforgettable moments and special occasions"
  },
  casual: {
    name: "Casual Collection",
    description: "Effortlessly chic pieces for everyday elegance"
  },
  bridal: {
    name: "Bridal Collection",
    description: "Timeless designs for your most memorable moments"
  },
  romantic: {
    name: "Romantic Collection",
    description: "Soft, feminine pieces that capture the essence of romance"
  },
  cocktail: {
    name: "Cocktail Collection",
    description: "Sophisticated styles perfect for evening events and celebrations"
  }
};

const Collections = () => {
  const [productsByCollection, setProductsByCollection] = useState<Record<string, Product[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Group products by collection
      const grouped = (data || []).reduce((acc, product) => {
        if (!acc[product.collection]) {
          acc[product.collection] = [];
        }
        acc[product.collection].push(product);
        return acc;
      }, {} as Record<string, Product[]>);

      setProductsByCollection(grouped);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

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

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading collections...</p>
            </div>
          ) : Object.keys(productsByCollection).length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No collections available yet.</p>
            </div>
          ) : (
            <div className="space-y-20 md:space-y-24">
              {Object.entries(productsByCollection).map(([collectionKey, products]) => (
                <section key={collectionKey} className="space-y-8">
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-3">Collection</Badge>
                    <h2 className="text-3xl md:text-4xl font-playfair mb-3">
                      {collectionInfo[collectionKey]?.name || collectionKey}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                      {collectionInfo[collectionKey]?.description || ""}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {products.map((product) => (
                      <ProductCard
                        key={product.id}
                        id={product.id}
                        image={product.image_url}
                        title={product.name}
                        description={product.description || ""}
                        price={product.price}
                        badge={product.is_featured ? "Featured" : undefined}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
