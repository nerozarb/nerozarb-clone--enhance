import { Metadata } from 'next';
import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero-section";
import SideNavigationDots from "@/components/sections/side-navigation-dots";
import FeaturesSection from "@/components/sections/features-section";
import ComparisonSection from "@/components/sections/comparison-section";
import GuaranteeSection from "@/components/sections/guarantee-section";
import PricingSection from "@/components/sections/pricing-section";
import CaseStudiesSection from "@/components/sections/case-studies-section";
import WhyChooseSection from "@/components/sections/why-choose-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ProcessTimelineSection from "@/components/sections/process-timeline-section";
import ContactFormSection from "@/components/sections/contact-form-section";
import TrustBadgesSection from "@/components/sections/trust-badges-section";
import ROICalculatorSection from "@/components/sections/roi-calculator-section";
import SocialProofSection from "@/components/sections/social-proof-section";
import Footer from "@/components/sections/footer";
import LiveChatWidget from "@/components/ui/live-chat-widget";

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