import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-playfair mb-6">Careers</h1>
              <p className="text-xl text-muted-foreground">
                Join our team and help shape the future of elegant fashion
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-playfair mb-4">Why Strickland Fashion?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're a team of passionate individuals who believe in creating beautiful, sustainable fashion. 
                  At Strickland Fashion, you'll work alongside talented designers, artisans, and fashion lovers who are 
                  committed to excellence and innovation.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-playfair mb-4">Current Opportunities</h2>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl border border-border hover:border-primary transition-colors">
                    <h3 className="text-xl font-semibold mb-2">Senior Fashion Designer</h3>
                    <p className="text-muted-foreground mb-2">New York, NY • Full-time</p>
                    <p className="text-sm text-muted-foreground">
                      Lead the design of our seasonal collections, working with premium materials and master craftspeople.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-border hover:border-primary transition-colors">
                    <h3 className="text-xl font-semibold mb-2">Customer Experience Manager</h3>
                    <p className="text-muted-foreground mb-2">New York, NY • Full-time</p>
                    <p className="text-sm text-muted-foreground">
                      Create exceptional shopping experiences for our discerning clientele both online and in-store.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-border hover:border-primary transition-colors">
                    <h3 className="text-xl font-semibold mb-2">Sustainability Coordinator</h3>
                    <p className="text-muted-foreground mb-2">Remote • Full-time</p>
                    <p className="text-sm text-muted-foreground">
                      Drive our sustainability initiatives and help us create fashion with minimal environmental impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-8">
                <p className="text-muted-foreground mb-4">
                  Don't see the right position? Send us your resume anyway.
                </p>
                <p className="text-sm text-muted-foreground">
                  Email: careers@elegante.com
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

export default Careers;
