import { ArrowRight, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  badge?: string;
  isLarge?: boolean;
  price?: number;
}

export const ProductCard = ({ id, image, title, description, badge, isLarge, price }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, title, price: price || 0, image });
  };

  return (
    <Link to={`/product/${id}`} className="block">
      <div className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-card cursor-pointer transition-all duration-500 hover:shadow-elegant ${
        isLarge ? "aspect-[3/4]" : "aspect-square"
      }`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          {badge && (
            <Badge variant="secondary" className="rounded-full bg-background/90 backdrop-blur text-xs md:text-sm">
              {badge}
            </Badge>
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <h3 className="text-lg sm:text-xl md:text-2xl font-playfair text-foreground mb-1 md:mb-2">{title}</h3>
          <p className="text-xs md:text-sm text-muted-foreground mb-2 line-clamp-1">{description}</p>
          {price && (
            <p className="text-base sm:text-lg md:text-xl font-semibold text-primary mb-3 md:mb-4">${price}</p>
          )}
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="flex-1 h-9 sm:h-10 text-xs sm:text-sm"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Add to Cart</span>
              <span className="sm:hidden">Add</span>
            </Button>
            <Button size="sm" variant="outline" className="h-9 sm:h-10 w-9 sm:w-10 p-0">
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
