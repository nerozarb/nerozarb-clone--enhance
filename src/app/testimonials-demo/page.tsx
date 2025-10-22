import TestimonialsColumnsDemo from "@/components/sections/testimonials-columns-demo";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";

export default function TestimonialsDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <TestimonialsColumnsDemo />
      </main>
      <Footer />
    </div>
  );
}
