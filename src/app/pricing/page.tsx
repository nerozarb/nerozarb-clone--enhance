import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import PricingSection from "@/components/sections/pricing-section";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <PricingSection />
        
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-poppins text-xl font-semibold text-foreground mb-2">
                    Kya aap contract ke bina services dete hain?
                  </h3>
                  <p className="text-muted-foreground">
                    Haan! Humari services month-to-month basis pe available hain. Koi long-term contract required nahi hai.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-poppins text-xl font-semibold text-foreground mb-2">
                    Results dikhne mein kitna time lagta hai?
                  </h3>
                  <p className="text-muted-foreground">
                    Typically 30-60 days mein noticeable results dikhne lagte hain. Consistent growth ke liye 90 days recommended hai.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-poppins text-xl font-semibold text-foreground mb-2">
                    Kya aap industry-specific experience rakhte hain?
                  </h3>
                  <p className="text-muted-foreground">
                    Haan, humne 50+ Pakistani businesses ke saath kaam kiya hai including e-commerce, restaurants, tech startups, aur fashion brands.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="font-poppins text-xl font-semibold text-foreground mb-2">
                    Kya payment plans available hain?
                  </h3>
                  <p className="text-muted-foreground">
                    Haan, flexible payment plans available hain. Contact karein to discuss your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
