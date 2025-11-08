import { ProductCard } from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

export const FeaturedProducts = () => {
  const products = [
    {
      id: "featured-1",
      image: product1,
      title: "Silk Blouse",
      description: "Luxurious cream silk with elegant draping",
      badge: "New",
      price: 175,
    },
    {
      id: "featured-2",
      image: product2,
      title: "Tailored Blazer",
      description: "Classic black blazer for any occasion",
      badge: "Essential",
      price: 225,
    },
    {
      id: "featured-3",
      image: product3,
      title: "Midi Dress",
      description: "Flowing white dress for sophisticated style",
      badge: "Featured",
      price: 195,
    },
    {
      id: "featured-4",
      image: product4,
      title: "Cashmere Sweater",
      description: "Soft beige cashmere for ultimate comfort",
      price: 150,
    },
  ];

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
          <button className="text-sm hover:text-primary transition-colors self-end md:self-auto">
            View All →
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
