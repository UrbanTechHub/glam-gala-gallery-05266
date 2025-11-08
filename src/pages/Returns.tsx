import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Returns = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-playfair mb-6">Returns & Exchanges</h1>
              <p className="text-xl text-muted-foreground">
                We want you to love every piece
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair mb-4">Return Policy</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in their 
                  original packaging with all tags attached.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Free returns on all domestic orders</li>
                  <li>• Full refund to original payment method</li>
                  <li>• Exchange for different size or color</li>
                  <li>• Store credit option available</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-playfair mb-4">How to Return</h2>
                <ol className="space-y-4 text-muted-foreground">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-semibold">
                      1
                    </span>
                    <div>
                      <span className="font-semibold text-foreground">Initiate Return</span>
                      <p>Contact our customer service team or use your order confirmation email</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-semibold">
                      2
                    </span>
                    <div>
                      <span className="font-semibold text-foreground">Pack Your Item</span>
                      <p>Place item in original packaging with all tags attached</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-semibold">
                      3
                    </span>
                    <div>
                      <span className="font-semibold text-foreground">Ship It Back</span>
                      <p>Use the prepaid return label we provide</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-semibold">
                      4
                    </span>
                    <div>
                      <span className="font-semibold text-foreground">Get Your Refund</span>
                      <p>Receive refund within 5-7 business days of return receipt</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="text-3xl font-playfair mb-4">Questions?</h2>
                <p className="text-muted-foreground">
                  Our customer service team is here to help with any return or exchange questions.
                  Contact us at returns@elegante.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
