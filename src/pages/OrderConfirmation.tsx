import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderConfirmation = () => {
  const orderNumber = `ORD-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">
            <CheckCircle className="w-16 h-16 md:w-20 md:h-20 mx-auto text-primary" />
            
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair">
                Thank You for Your Order!
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Your order has been successfully placed and is being processed.
              </p>
            </div>

            <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border border-border space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Order Number</p>
                <p className="text-xl sm:text-2xl font-playfair">{orderNumber}</p>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground">
                A confirmation email has been sent to your email address with your order details and tracking information.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/collections">
                <Button size="lg" className="w-full sm:w-auto">
                  Continue Shopping
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
