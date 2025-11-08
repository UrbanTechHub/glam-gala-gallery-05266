import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string;
  is_new_arrival: boolean;
  is_featured: boolean;
}

export const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("is_new_arrival", true)
        .order("created_at", { ascending: false })
        .limit(4);

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-16 md:py-24" id="new">
        <div className="container mx-auto px-6">
          <div className="text-center">Loading products...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24" id="new">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-3 md:mb-4">New Arrivals</h2>
            <p className="text-muted-foreground max-w-md text-sm sm:text-base">
              Carefully selected pieces that embody sophistication and timeless style
            </p>
          </div>
          <Link to="/new-arrivals" className="text-sm hover:text-primary transition-colors self-end md:self-auto">
            View All →
          </Link>
        </div>
        
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No new arrivals yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image_url}
                title={product.name}
                description={product.description || ""}
                price={product.price}
                badge={product.is_featured ? "Featured" : "New"}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
