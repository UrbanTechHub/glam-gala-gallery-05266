import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-fashion.jpg";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const heroSlides = [
  {
    badge: "New Season",
    title: "Timeless",
    subtitle: "Elegance",
    description: "Discover our curated collection of sophisticated pieces designed for the modern woman who values quality and style.",
    image: heroImage,
    featured: "Classic Collection"
  },
  {
    badge: "Limited Edition",
    title: "Exclusive",
    subtitle: "Designs",
    description: "Handpicked pieces from renowned designers, crafted with exceptional attention to detail and luxury materials.",
    image: collection1,
    featured: "Designer Series"
  },
  {
    badge: "Spring Collection",
    title: "Fresh",
    subtitle: "Arrivals",
    description: "Embrace the season with our latest collection featuring vibrant colors and contemporary silhouettes.",
    image: collection2,
    featured: "Spring Essentials"
  }
];

export const Hero = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 md:pt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className="space-y-6 md:space-y-8">
                    <Badge variant="secondary" className="w-fit rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                      {slide.badge}
                    </Badge>
                    
                    <div className="space-y-3 md:space-y-4">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair leading-tight">
                        {slide.title}
                        <br />
                        <span className="text-muted-foreground">{slide.subtitle}</span>
                      </h1>
                      <p className="text-base md:text-lg text-muted-foreground max-w-md">
                        {slide.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="group" asChild>
                        <Link to="/new-arrivals">
                          Shop Collection
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link to="/collections">
                          View Lookbook
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative mt-8 lg:mt-0">
                    <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden bg-card shadow-elegant">
                      <img
                        src={slide.image}
                        alt={`${slide.title} ${slide.subtitle}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card rounded-xl md:rounded-2xl p-4 md:p-6 shadow-elegant border border-border max-w-[160px] md:max-w-[200px]">
                      <div className="text-xs md:text-sm text-muted-foreground mb-1">Featured</div>
                      <div className="font-playfair text-base md:text-xl mb-1 md:mb-2">{slide.featured}</div>
                      <Link to="/collections" className="text-xs md:text-sm hover:text-primary transition-colors">View pieces →</Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
