import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Bot, TrendingUp, Crosshair, Target, Zap, Users } from "lucide-react";

const services = [
  {
    icon: <Bot className="h-8 w-8 text-white" />,
    title: "AI-Powered Content Creation",
    description: "Advanced algorithms se viral content banate hain jo Pakistani audiences ke liye perfect hai. Urdu aur English dono languages mein high-quality posts.",
    features: [
      "Automated content generation",
      "Bilingual support (Urdu & English)",
      "Trending topic analysis",
      "Custom brand voice"
    ]
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Social Media Management",
    description: "Complete social media management service jo aapke brand ko consistently grow kare. Daily posts, engagement, aur analytics.",
    features: [
      "Daily content posting",
      "Community management",
      "Response handling",
      "Performance tracking"
    ]
  },
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: "Paid Advertising",
    description: "Strategic paid campaigns jo maximize ROI deliver karein. Facebook, Instagram, aur Google Ads expertise.",
    features: [
      "Campaign strategy",
      "Audience targeting",
      "A/B testing",
      "Budget optimization"
    ]
  },
  {
    icon: <Crosshair className="h-8 w-8 text-white" />,
    title: "Lead Generation",
    description: "Qualified leads generate karein jo aapke business ke liye ready hain. Proven funnels aur conversion strategies.",
    features: [
      "Landing page optimization",
      "Lead magnet creation",
      "Email marketing setup",
      "CRM integration"
    ]
  },
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Analytics & Reporting",
    description: "Detailed insights jo batate hain ki kya kaam kar raha hai. Weekly reports aur data-driven recommendations.",
    features: [
      "Custom dashboards",
      "Weekly performance reports",
      "Competitor analysis",
      "Growth recommendations"
    ]
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Brand Strategy",
    description: "Comprehensive brand strategy jo aapko competition se alag kare. Market research aur positioning expertise.",
    features: [
      "Brand positioning",
      "Competitor research",
      "Content strategy",
      "Visual identity guidance"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 lg:py-32 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-poppins text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Humari Services
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Complete social media marketing solutions jo aapke business ko next level pe le jayein
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-black mb-6">
                    {service.icon}
                  </div>
                  <h3 className="font-poppins text-2xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2 text-foreground">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <h2 className="font-poppins text-3xl font-bold text-foreground mb-6">
                Ready to Transform Your Brand?
              </h2>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Start Your Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
