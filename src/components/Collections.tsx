import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";

export const Collections = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30" id="collections">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-4">
            Explore Collections
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Each collection tells a story of refined taste and exceptional craftsmanship
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Link to="/collections" className="group relative overflow-hidden rounded-3xl bg-card cursor-pointer aspect-[3/4] shadow-elegant hover:shadow-2xl transition-all duration-500">
            <img
              src={collection1}
              alt="Power Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-background/20 backdrop-blur text-xs mb-3 md:mb-4">
                Power Collection
              </div>
              <h3 className="text-2xl md:text-3xl font-playfair text-foreground mb-2 md:mb-3">
                Modern Sophistication
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 max-w-md">
                Tailored pieces that command attention and exude confidence in every setting
              </p>
              <Button variant="outline" className="group/btn text-sm">
                Explore Collection
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Link>
          
          <Link to="/collections" className="group relative overflow-hidden rounded-3xl bg-card cursor-pointer aspect-[3/4] shadow-elegant hover:shadow-2xl transition-all duration-500">
            <img
              src={collection2}
              alt="Evening Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="inline-block px-3 md:px-4 py-1 rounded-full bg-background/20 backdrop-blur text-xs mb-3 md:mb-4">
                Evening Collection
              </div>
              <h3 className="text-2xl md:text-3xl font-playfair text-foreground mb-2 md:mb-3">
                Timeless Glamour
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 max-w-md">
                Elegant evening wear designed for unforgettable moments and special occasions
              </p>
              <Button variant="outline" className="group/btn text-sm">
                Explore Collection
                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
