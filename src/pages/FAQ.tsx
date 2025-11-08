import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-playfair mb-6">FAQ</h1>
              <p className="text-xl text-muted-foreground">
                Answers to commonly asked questions
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  What is your return policy?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in their 
                  original packaging with all tags attached. Returns are free for domestic orders.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  How long does shipping take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Standard shipping takes 3-5 business days. Express shipping is available for 2-3 business days. 
                  International orders typically arrive within 7-14 business days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Do you offer international shipping?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we ship to over 50 countries worldwide. Shipping rates and delivery times vary by destination. 
                  Additional customs fees may apply depending on your country's import regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  How do I know what size to order?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Each product page includes a detailed size guide. We recommend measuring yourself and comparing 
                  to our size chart. If you're between sizes, we suggest sizing up for a more comfortable fit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Are your materials sustainable?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, sustainability is at the core of what we do. We use eco-friendly materials and work with 
                  suppliers committed to sustainable practices. Learn more on our Sustainability page.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Can I cancel or modify my order?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Orders can be cancelled or modified within 24 hours of placement. Please contact our customer 
                  service team immediately at hello@elegante.com to request changes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Do you have a physical store?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, our flagship showroom is located at 123 Fashion Avenue, New York, NY 10001. 
                  Visit us Monday-Saturday, 10am-6pm, or book a private styling appointment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  How can I care for my ÉLÉGANTE pieces?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Each garment includes specific care instructions on the label. Generally, we recommend dry cleaning 
                  for delicate items and hand washing or gentle machine wash for everyday pieces. Store items on 
                  padded hangers to maintain their shape.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Still have questions?
              </p>
              <a href="/contact" className="text-primary hover:underline">
                Contact our customer service team →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
