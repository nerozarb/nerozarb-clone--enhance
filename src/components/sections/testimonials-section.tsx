"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Verified } from "lucide-react";

const testimonials = [
  {
    quote: "Hamara Instagram engagement 2 hafte mein 280% badh gaya! Nerozarb ki AI-generated Urdu content bilkul natural lagti hai. Traditional agency se humein 3 mahine ka wait karna padta, lekin yeh log ne sirf 5 din mein campaign launch kar diya. Ab hum roz 50+ quality inquiries receive karte hain.",
    name: "Ahmed Raza Khan",
    role: "Founder & CEO",
    company: "Urban Bites Café Chain",
    location: "Karachi",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed&backgroundColor=b6e3f4",
    metric: "280% Engagement Boost",
    verified: true,
  },
  {
    quote: "We were spending PKR 180,000/month with a traditional agency and getting mediocre results. Nerozarb delivered better campaigns at PKR 120,000 and our cost per lead dropped by 45%. Their AI tools generate dozens of ad variations in minutes. Best decision we made this year!",
    name: "Ayesha Malik",
    role: "Marketing Director",
    company: "LuxeStyle Fashion",
    location: "Lahore",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha&backgroundColor=ffdfbf",
    metric: "45% Lower Cost Per Lead",
    verified: true,
  },
  {
    quote: "Pehle humari website par sirf 200-300 visitors aate thay monthly. Nerozarb ne hamare SEO aur social media ko completely transform kar diya. Ab 8,000+ monthly visitors aur conversion rate 4.2% hai. Return on investment 6 mahine mein 650% ho gaya!",
    name: "Hassan Ali",
    role: "Co-Founder",
    company: "TechHub Solutions",
    location: "Islamabad",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hassan&backgroundColor=c0aede",
    metric: "650% ROI in 6 Months",
    verified: true,
  },
  {
    quote: "As a healthcare provider, we needed culturally sensitive content that builds trust. Nerozarb understood our Urdu-speaking audience perfectly. Our appointment bookings increased 190% and patient inquiries tripled. They respond within hours, not days like other agencies.",
    name: "Dr. Fatima Siddiqui",
    role: "Medical Director",
    company: "Sehat Plus Clinics",
    location: "Karachi",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima&backgroundColor=ffd5dc",
    metric: "190% More Bookings",
    verified: true,
  },
  {
    quote: "Real estate mein competition bohot zyada hai. Nerozarb ke targeted Facebook aur Instagram ads ne humein game changer diya. 2 mahine mein 45 qualified leads generate kiye aur 12 properties sell kar diye. Unki real-time analytics dashboard se hum daily progress track karte hain.",
    name: "Bilal Ahmed",
    role: "CEO",
    company: "Prime Properties Pvt Ltd",
    location: "Lahore",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bilal&backgroundColor=d1d4f9",
    metric: "12 Properties Sold",
    verified: true,
  },
  {
    quote: "Maine 3 different agencies try kiye jo sirf English content bana rahe thay. Nerozarb ki AI bilingual content generates karti hai jo Pakistani audience ko truly resonates karti hai. Meri organic reach 400% badh gayi aur follower growth consistent hai. Highly recommend!",
    name: "Zainab Iqbal",
    role: "Owner",
    company: "Zain's Beauty Lounge",
    location: "Multan",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zainab&backgroundColor=b6e3f4",
    metric: "400% Organic Reach",
    verified: true,
  },
  {
    quote: "Their 90-day guarantee gave us confidence to try. Within 60 days, our qualified leads increased by 38% and we didn't even need the refund! The team is transparent, professional, and delivers exactly what they promise. Worth every rupee we're spending.",
    name: "Kamran Shah",
    role: "Operations Manager",
    company: "Swift Logistics",
    location: "Rawalpindi",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kamran&backgroundColor=ffdfbf",
    metric: "38% Lead Increase",
    verified: true,
  },
  {
    quote: "E-commerce businesses need fast execution. Nerozarb launched our Ramadan campaign in just 4 days while our previous agency took 6 weeks! Sales spiked 520% during the campaign. Their AI generates product descriptions, ad copy, and social posts automatically. Incredible efficiency!",
    name: "Sarah Khan",
    role: "Founder",
    company: "Desi Threads Online",
    location: "Faisalabad",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffd5dc",
    metric: "520% Sales Spike",
    verified: true,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
          <Star className="w-5 h-5 text-white fill-white" />
          <span className="text-sm font-semibold text-white">4.9/5 Average Rating • 50+ Reviews</span>
        </div>
        
        <h2 className="font-poppins font-bold text-text-primary text-[40px] leading-tight tracking-tighter md:text-5xl">
          Real Stories, Real Results
        </h2>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          See how Pakistani businesses are growing faster with AI-powered marketing
        </p>

        <div className="mt-12 md:mt-16">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2 md:px-0">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative p-8 md:p-12 border border-border rounded-2xl bg-card hover:shadow-2xl transition-shadow duration-300">
                      {/* Verified Badge */}
                      {testimonial.verified && (
                        <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-white rounded-full text-black text-xs font-semibold">
                          <Verified className="w-3 h-3" />
                          <span>Verified Client</span>
                        </div>
                      )}
                      
                      {/* Star Rating */}
                      <div className="flex justify-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-white fill-white" />
                        ))}
                      </div>

                      <span className="absolute top-12 left-4 md:top-16 md:left-6 text-5xl md:text-7xl font-serif text-muted-foreground/20">"</span>
                      <p className="text-base md:text-lg text-foreground leading-relaxed max-w-3xl mx-auto px-8">
                        {testimonial.quote}
                      </p>
                      <span className="absolute bottom-20 right-4 md:bottom-24 md:right-6 text-5xl md:text-7xl font-serif text-muted-foreground/20">"</span>
                      
                      {/* Metric Badge */}
                      <div className="mt-6 inline-flex items-center px-4 py-2 bg-white/10 rounded-full">
                        <span className="text-sm font-bold text-white">📈 {testimonial.metric}</span>
                      </div>

                      <div className="mt-8 flex items-center justify-center">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-white/20"
                        />
                        <div className="ml-4 text-left">
                          <h4 className="font-poppins font-semibold text-foreground text-base md:text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                          <p className="text-xs text-muted-foreground/70">
                            📍 {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-center gap-8 md:gap-12">
            <button
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === i ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground/50 w-2.5'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Verified className="w-4 h-4 text-white" />
              <span>All reviews verified</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/50"></div>
            <span>50+ Pakistani businesses served</span>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/50"></div>
            <span>90% client retention rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}