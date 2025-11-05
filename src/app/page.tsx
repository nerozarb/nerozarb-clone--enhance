import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero-section";
import SideNavigationDots from "@/components/sections/side-navigation-dots";

// Dynamically import below-the-fold sections with loading states
const FeaturesSection = dynamic(() => import("@/components/sections/features-section"), {
  loading: () => <div className="h-screen bg-background animate-pulse" />,
});
const ComparisonSection = dynamic(() => import("@/components/sections/comparison-section"), {
  loading: () => <div className="h-screen bg-background animate-pulse" />,
});
const GuaranteeSection = dynamic(() => import("@/components/sections/guarantee-section"), {
  loading: () => <div className="h-96 bg-background animate-pulse" />,
});
const TrustBadgesSection = dynamic(() => import("@/components/sections/trust-badges-section"), {
  loading: () => <div className="h-48 bg-background animate-pulse" />,
});
const PricingSection = dynamic(() => import("@/components/sections/pricing-section"), {
  loading: () => <div className="h-screen bg-background animate-pulse" />,
});
const ROICalculatorSection = dynamic(() => import("@/components/sections/roi-calculator-section"), {
  loading: () => <div className="h-screen bg-background animate-pulse" />,
});
const ProcessTimelineSection = dynamic(() => import("@/components/sections/process-timeline-section"), {
  loading: () => <div className="h-screen bg-background animate-pulse" />,
});
const CaseStudiesSection = dynamic(() => import("@/components/sections/case-studies-section"), {
  loading: () => <div className="h-screen bg-background animate-pulse" />,
});
const WhyChooseSection = dynamic(() => import("@/components/sections/why-choose-section"), {
  loading: () => <div className="h-screen bg-background animate-pulse" />,
});
const PortfolioSection = dynamic(() => import("@/components/sections/portfolio-section"), {
  loading: () => <div className="h-screen bg-background animate-pulse" />,
});
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section"), {
  loading: () => <div className="h-screen bg-background animate-pulse" />,
});
const SocialProofSection = dynamic(() => import("@/components/sections/social-proof-section"), {
  loading: () => <div className="h-96 bg-background animate-pulse" />,
});
const ContactFormSection = dynamic(() => import("@/components/sections/contact-form-section"), {
  loading: () => <div className="h-screen bg-background animate-pulse" />,
});
const Footer = dynamic(() => import("@/components/sections/footer"), {
  loading: () => <div className="h-96 bg-background animate-pulse" />,
});
const LiveChatWidget = dynamic(() => import("@/components/ui/live-chat-widget"));

export const metadata: Metadata = {
  title: 'Nerozarb | AI-Powered Digital Marketing Agency Pakistan - 90-Day Results Guarantee',
  description: '30 din mein digital growth with AI-powered marketing for Pakistani businesses. Social media, Facebook ads, content creation - guaranteed 25% increase in leads or money back. Serving Karachi, Lahore, Islamabad.',
  keywords: 'digital marketing Pakistan, AI marketing agency, social media management Pakistan, Facebook ads Pakistan, Instagram growth, content marketing, Karachi marketing agency, Lahore digital marketing, Pakistani businesses, AI automation, lead generation',
  openGraph: {
    title: 'Nerozarb - AI-Powered Digital Marketing for Pakistani Businesses',
    description: '30 din mein digital growth with guaranteed results. Join 50+ Pakistani brands growing with AI.',
    type: 'website',
    locale: 'en_PK',
    siteName: 'Nerozarb',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nerozarb - AI-Powered Digital Marketing Pakistan',
    description: '30 din mein digital growth with AI. Guaranteed 25% increase in qualified leads.',
  },
  alternates: {
    canonical: 'https://nerozarb.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SideNavigationDots />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComparisonSection />
        <GuaranteeSection />
        <TrustBadgesSection />
        <PricingSection />
        <ROICalculatorSection />
        <ProcessTimelineSection />
        <CaseStudiesSection />
        <WhyChooseSection />
        <PortfolioSection />
        <TestimonialsSection />
        <SocialProofSection />
        <ContactFormSection />
      </main>
      <Footer />
      <LiveChatWidget />
    </div>
  );
}