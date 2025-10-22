import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import ContactFormSection from "@/components/sections/contact-form-section";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
