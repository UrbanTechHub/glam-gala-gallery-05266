import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
            <div className="text-center max-w-md mx-auto space-y-6">
              <ShoppingBag className="w-16 h-16 md:w-20 md:h-20 mx-auto text-muted-foreground" />
              <h1 className="text-3xl md:text-4xl font-playfair">Your Cart is Empty</h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Start shopping to add items to your cart
              </p>
              <Link to="/collections">
                <Button size="lg">Browse Collections</Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-playfair mb-8 md:mb-12">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 md:gap-6 p-4 md:p-6 bg-card rounded-xl md:rounded-2xl border border-border"
                >
                  <div className="w-24 h-32 sm:w-32 sm:h-40 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-3 md:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-playfair mb-1 truncate">{item.title}</h3>
                      {item.size && (
                        <p className="text-xs sm:text-sm text-muted-foreground">Size: {item.size}</p>
                      )}
                      <p className="text-base sm:text-lg font-semibold text-primary mt-2">
                        ${item.price}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-2 sm:gap-3 bg-secondary rounded-lg p-1.5 w-fit">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7 sm:h-8 sm:w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                        <span className="w-6 sm:w-8 text-center text-sm sm:text-base">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7 sm:h-8 sm:w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive w-fit"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border border-border sticky top-24 space-y-4 md:space-y-6">
                <h2 className="text-xl sm:text-2xl font-playfair">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{total >= 200 ? "Free" : "$15.00"}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between text-base sm:text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-primary">
                        ${(total >= 200 ? total : total + 15).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Link to="/checkout" className="block">
                  <Button size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link to="/collections" className="block">
                  <Button variant="outline" size="lg" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>

                {total < 200 && (
                  <p className="text-xs sm:text-sm text-center text-muted-foreground">
                    Add ${(200 - total).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
