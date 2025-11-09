import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-2xl font-playfair">STRICKLAND FASHION</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-6 mt-8 pb-6">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground">Shop</h3>
            <div className="flex flex-col gap-3">
              <Link to="/collections" className="text-lg hover:text-primary transition-colors">
                Collections
              </Link>
              <Link to="/new-arrivals" className="text-lg hover:text-primary transition-colors">
                New Arrivals
              </Link>
              <Link to="/sale" className="text-lg hover:text-primary transition-colors">
                Sale
              </Link>
              <Link to="/gift-cards" className="text-lg hover:text-primary transition-colors">
                Gift Cards
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground">About</h3>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-lg hover:text-primary transition-colors">
                Our Story
              </Link>
              <Link to="/sustainability" className="text-lg hover:text-primary transition-colors">
                Sustainability
              </Link>
              <Link to="/careers" className="text-lg hover:text-primary transition-colors">
                Careers
              </Link>
              <Link to="/press" className="text-lg hover:text-primary transition-colors">
                Press
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-muted-foreground">Support</h3>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className="text-lg hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/shipping" className="text-lg hover:text-primary transition-colors">
                Shipping
              </Link>
              <Link to="/returns" className="text-lg hover:text-primary transition-colors">
                Returns
              </Link>
              <Link to="/faq" className="text-lg hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
