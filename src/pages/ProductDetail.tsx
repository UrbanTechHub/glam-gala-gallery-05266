import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ChevronLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { supabase } from "@/integrations/supabase/client";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 container mx-auto px-6 py-12">
          <div className="text-center">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-playfair mb-4">Product Not Found</h1>
            <Link to="/collections">
              <Button>Back to Collections</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const images = [product.image_url];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const fullDescription = product.description || "Elegant and sophisticated design crafted with premium materials.";
  const material = "Premium quality fabric with excellent drape and comfort";
  const care = "Dry clean only. Do not bleach. Iron on low heat.";

  const handleAddToCart = () => {
    if (!selectedSize) {
      return;
    }
    addToCart({ 
      id: product.id, 
      title: product.name, 
      price: product.price, 
      image: product.image_url,
      size: selectedSize 
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          <Link to="/collections" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 md:mb-8">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Collections
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-card">
                        <img
                          src={image}
                          alt={`${product.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2 md:left-4" />
                    <CarouselNext className="right-2 md:right-4" />
                  </>
                )}
              </Carousel>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {(product.is_new_arrival || product.is_featured) && (
                <Badge variant="secondary" className="rounded-full">
                  {product.is_new_arrival ? "New Arrival" : "Featured"}
                </Badge>
              )}
              
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-3 md:mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mb-4">
                  ${product.price}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {fullDescription}
                </p>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Select Size</label>
                <div className="grid grid-cols-5 gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      className="h-10 sm:h-12"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-xs sm:text-sm text-muted-foreground">Please select a size</p>
                )}
              </div>

              {/* Add to Cart Button */}
              <Button 
                size="lg" 
                className="w-full h-12 sm:h-14 text-base"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              {/* Product Details */}
              <div className="space-y-4 pt-6 border-t border-border">
                <div>
                  <h3 className="text-sm font-medium mb-2">Material</h3>
                  <p className="text-sm text-muted-foreground">{material}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Care Instructions</h3>
                  <p className="text-sm text-muted-foreground">{care}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Delivery</h3>
                  <p className="text-sm text-muted-foreground">
                    Free shipping on orders over $200. Standard delivery in 3-5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
