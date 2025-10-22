"use client";

import React from 'react';
import { ArrowUpRight, Instagram, Facebook, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "Urban Bites Café",
    category: "Restaurant & F&B",
    location: "Karachi",
    description: "Complete Instagram transformation with Urdu captions and food photography",
    metrics: {
      followers: "2.3K → 15.8K",
      engagement: "+280%",
      leads: "50+/day"
    },
    services: ["Social Media", "Content Creation", "Ad Campaigns"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "LuxeStyle Fashion",
    category: "E-commerce",
    location: "Lahore",
    description: "AI-powered ad campaigns driving 8X ROAS for fashion retailer",
    metrics: {
      roas: "1.5X → 8X",
      sales: "PKR 1.2M",
      cpa: "-62%"
    },
    services: ["Facebook Ads", "Instagram Marketing", "Influencer Collaboration"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    color: "from-pink-500/20 to-purple-500/20"
  },
  {
    title: "TechHub Solutions",
    category: "B2B SaaS",
    location: "Islamabad",
    description: "LinkedIn + Facebook B2B lead generation with bilingual targeting",
    metrics: {
      leads: "127 qualified",
      cpl: "PKR 1,480",
      deals: "8 closed"
    },
    services: ["LinkedIn Ads", "Lead Generation", "Email Marketing"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Sehat Plus Clinics",
    category: "Healthcare",
    location: "Karachi",
    description: "Healthcare marketing with culturally-sensitive Urdu content",
    metrics: {
      appointments: "+190%",
      bookings: "68% online",
      inquiries: "3X increase"
    },
    services: ["Google Ads", "Social Media", "Content Marketing"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    color: "from-green-500/20 to-teal-500/20"
  },
  {
    title: "Prime Properties",
    category: "Real Estate",
    location: "Lahore",
    description: "Hyper-targeted real estate campaigns with WhatsApp automation",
    metrics: {
      properties: "12 sold",
      leads: "45 qualified",
      value: "PKR 86M"
    },
    services: ["Facebook Ads", "WhatsApp Marketing", "Virtual Tours"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Desi Threads Online",
    category: "E-commerce",
    location: "Faisalabad",
    description: "Ramadan campaign generating 520% sales spike in 30 days",
    metrics: {
      sales: "+520%",
      revenue: "PKR 3.4M",
      customers: "+2,400"
    },
    services: ["Seasonal Campaigns", "Instagram Shopping", "Video Ads"],
    image: "https://images.unsplash.com/photo-1558769132-cb1aea1f5db5?w=800&q=80",
    color: "from-purple-500/20 to-pink-500/20"
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-background">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">Recent Success Stories</span>
          </div>
          
          <h2 className="font-poppins text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Latest Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Real campaigns we've delivered for Pakistani businesses across different industries
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-secondary border border-border shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-60`}></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">{project.category}</span>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="font-poppins text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  📍 {project.location}
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-white/80"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                  {Object.entries(project.metrics).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-sm font-bold text-white">{value}</p>
                      <p className="text-xs text-muted-foreground capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            These are just a few examples • We've completed 100+ campaigns across Pakistan
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5 text-white" />
              <span className="text-sm text-white/90">Instagram Marketing</span>
            </div>
            <div className="flex items-center gap-2">
              <Facebook className="w-5 h-5 text-white" />
              <span className="text-sm text-white/90">Facebook Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-white" />
              <span className="text-sm text-white/90">Growth Marketing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;