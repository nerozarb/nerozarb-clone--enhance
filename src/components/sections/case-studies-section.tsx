"use client";

import React from 'react';
import { TrendingUp, Users, ShoppingCart, Target, Calendar, Award } from 'lucide-react';

const caseStudies = [
  {
    icon: ShoppingCart,
    metric: "8X",
    metricLabel: "Return on Ad Spend",
    title: "E-commerce Growth",
    company: "LuxeStyle Fashion Boutique",
    location: "Karachi",
    industry: "Fashion & Apparel",
    description: "Karachi-based fashion retailer struggling with low ROAS and high customer acquisition costs",
    challenge: "Spending PKR 150K/month on ads but only getting 1.5X return. Generic English content wasn't resonating with local audience.",
    solution: "Implemented AI-powered Urdu/English bilingual ad campaigns with cultural insights. Created 50+ ad variations targeting specific Pakistani festivals and occasions.",
    results: [
      "ROAS increased from 1.5X to 8X in 2 months",
      "Cost per acquisition dropped by 62%",
      "Generated PKR 1.2M in sales from PKR 150K ad spend",
      "Organic Instagram reach grew 340%"
    ],
    timeline: "45 Days",
    color: "from-white/10 to-white/5"
  },
  {
    icon: Users,
    metric: "67%",
    metricLabel: "Lower Cost per Lead",
    title: "Lead Generation Success",
    company: "TechHub Solutions",
    location: "Lahore",
    industry: "B2B SaaS",
    description: "Tech startup needed qualified B2B leads but traditional methods were expensive and slow",
    challenge: "Cost per qualified lead was PKR 4,500. Previous agency took 6 weeks to launch campaigns. Lead quality was inconsistent.",
    solution: "AI-driven LinkedIn + Facebook B2B targeting with personalized Urdu messaging. Implemented chatbot for instant lead qualification and 24/7 engagement.",
    results: [
      "Cost per qualified lead: PKR 4,500 → PKR 1,480",
      "Generated 127 qualified B2B leads in 60 days",
      "Closed 8 enterprise deals worth PKR 2.8M",
      "Campaign launched in just 4 days"
    ],
    timeline: "60 Days",
    color: "from-white/10 to-white/5"
  },
  {
    icon: Calendar,
    metric: "520%",
    metricLabel: "Sales During Campaign",
    title: "Ramadan Campaign Triumph",
    company: "Desi Threads Online",
    location: "Faisalabad",
    industry: "E-commerce",
    description: "Online clothing brand wanted to maximize Ramadan/Eid sales but had tight timeline",
    challenge: "Only 3 weeks before Ramadan. Previous agency quoted 6 weeks setup time. Needed culturally relevant content quickly.",
    solution: "AI-generated Ramadan-themed content in Urdu/English. Created 80+ product posts, 25 video ads, and email sequences in 4 days. Real-time optimization using analytics.",
    results: [
      "Sales spiked 520% during 30-day campaign",
      "Generated PKR 3.4M revenue (vs PKR 550K previous year)",
      "Customer base grew by 2,400 new buyers",
      "91% customer satisfaction rating"
    ],
    timeline: "30 Days",
    color: "from-white/10 to-white/5"
  },
  {
    icon: Target,
    metric: "190%",
    metricLabel: "More Appointments",
    title: "Healthcare Marketing",
    company: "Sehat Plus Clinics",
    location: "Karachi",
    industry: "Healthcare",
    description: "Multi-location clinic needed to increase patient appointments while maintaining trust",
    challenge: "Healthcare marketing requires sensitivity. English-only campaigns had low engagement. Previous agency didn't understand healthcare compliance.",
    solution: "Culturally-sensitive bilingual content focusing on preventive care. AI-powered appointment booking integration. Educational content in Urdu for elderly demographic.",
    results: [
      "Patient appointments increased 190%",
      "Online bookings grew from 15% to 68%",
      "Patient inquiries tripled (450 → 1,350/month)",
      "5-star Google rating increased to 4.8/5"
    ],
    timeline: "90 Days",
    color: "from-white/10 to-white/5"
  },
  {
    icon: TrendingUp,
    metric: "12",
    metricLabel: "Properties Sold",
    title: "Real Estate Lead Gen",
    company: "Prime Properties Pvt Ltd",
    location: "Lahore",
    industry: "Real Estate",
    description: "Real estate agency struggled to generate qualified leads in competitive Lahore market",
    challenge: "High competition. Leads were mostly unqualified tire-kickers. Cost per quality lead was unsustainable at PKR 8,500.",
    solution: "Hyper-targeted Facebook/Instagram campaigns by locality. AI-generated virtual property tours. WhatsApp automation for instant responses to inquiries.",
    results: [
      "45 qualified leads in 60 days",
      "12 properties sold worth PKR 86M",
      "Cost per lead reduced to PKR 2,200",
      "85% lead qualification rate"
    ],
    timeline: "60 Days",
    color: "from-white/10 to-white/5"
  },
  {
    icon: Award,
    metric: "400%",
    metricLabel: "Organic Reach Growth",
    title: "Beauty Salon Transformation",
    company: "Zain's Beauty Lounge",
    location: "Multan",
    industry: "Beauty & Wellness",
    description: "Local beauty salon wanted to establish strong social media presence to compete with chains",
    challenge: "Limited budget (PKR 45K/month). No social media strategy. Tried 3 agencies but got only English content that didn't connect.",
    solution: "AI-generated bilingual beauty content with local cultural references. Influencer collaboration strategy. Before/after transformation posts with client testimonials.",
    results: [
      "Organic reach grew 400% (800 → 4,000/week)",
      "Instagram followers: 1,200 → 12,500",
      "Appointment bookings up 240%",
      "Became #1 salon in Multan on Google Maps"
    ],
    timeline: "120 Days",
    color: "from-white/10 to-white/5"
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="results" className="bg-gradient-to-b from-background via-secondary/20 to-background py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">Real Client Success Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white tracking-tight mb-6">
            Pakistani Brands ke{" "}
            <span className="text-white/90">
              Real Results
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed case studies showing exactly how we helped businesses like yours grow with AI-powered marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <div 
                key={index} 
                className="group relative p-8 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden"
              >
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Industry Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full mb-4">
                    <span className="text-xs font-semibold text-white">{study.industry}</span>
                  </div>
                  
                  {/* Main Metric */}
                  <p className="text-5xl lg:text-6xl font-bold font-poppins leading-none text-white mb-2">
                    {study.metric}
                  </p>
                  <p className="text-sm font-semibold text-white/90 mb-6">
                    {study.metricLabel}
                  </p>

                  {/* Title & Company */}
                  <h3 className="text-2xl font-bold font-poppins text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-sm font-semibold text-white/80 mb-1">
                    {study.company}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    📍 {study.location}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {study.description}
                  </p>

                  {/* Challenge */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2">Challenge</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2">Solution</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/90">
                          <span className="text-white mt-0.5">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span className="text-xs text-white/70">Timeline: <strong className="text-white">{study.timeline}</strong></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            All case studies based on real client campaigns • Results may vary based on industry and budget
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>50+ Success Stories</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/50"></div>
            <span>90% Client Retention</span>
            <div className="w-1 h-1 rounded-full bg-white/50"></div>
            <span>Average 300% ROI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;