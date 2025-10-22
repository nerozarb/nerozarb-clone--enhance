"use client";

import React, { useState } from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

const ContactFormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-background via-secondary/20 to-background font-body relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Start Your{" "}
            <span className="text-white/90">
              Digital Journey
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            Join 50+ SMEs already growing with Nerozarb
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="glass-effect p-8 lg:p-12 rounded-3xl border border-border/50 shadow-2xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-5 py-4 bg-secondary/50 border border-border/50 rounded-xl focus:ring-1 focus:ring-white focus:border-white focus:outline-none transition-all placeholder:text-muted-foreground text-white backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 bg-secondary/50 border border-border/50 rounded-xl focus:ring-1 focus:ring-white focus:border-white focus:outline-none transition-all placeholder:text-muted-foreground text-white backdrop-blur-sm"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  className="w-full px-5 py-4 bg-secondary/50 border border-border/50 rounded-xl focus:ring-1 focus:ring-white focus:border-white focus:outline-none transition-all placeholder:text-muted-foreground text-white backdrop-blur-sm"
                />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-3">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-5 py-4 bg-secondary/50 border border-border/50 rounded-xl focus:ring-1 focus:ring-white focus:border-white focus:outline-none transition-all min-h-[140px] placeholder:text-muted-foreground text-white backdrop-blur-sm resize-none"
                ></textarea>
              </div>
              
              {/* What you'll get checklist */}
              <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm font-semibold text-white mb-3">What you'll get:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Free 30-minute strategy call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Custom proposal in 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">3 quick wins analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Zero commitment required</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-white/20 hover:shadow-3xl hover:shadow-white/30 w-full md:w-auto"
                >
                  <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  Get Your Free 30-Minute Strategy Call
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-sm text-muted-foreground text-center">
                  ⚡ We'll respond within 24 hours • 🔒 Your info is 100% secure
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect p-8 rounded-3xl border border-border/50 text-center group hover:border-white/30 transition-all duration-300 hover:scale-105">
            <h3 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-3">50+</h3>
            <p className="text-muted-foreground group-hover:text-white transition-colors">SMEs served across Pakistan</p>
          </div>
          <div className="glass-effect p-8 rounded-3xl border border-border/50 text-center group hover:border-white/30 transition-all duration-300 hover:scale-105">
            <h3 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-3">90%</h3>
            <p className="text-muted-foreground group-hover:text-white transition-colors">Client retention rate</p>
          </div>
          <div className="glass-effect p-8 rounded-3xl border border-border/50 text-center group hover:border-white/30 transition-all duration-300 hover:scale-105">
            <h3 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-3">300%</h3>
            <p className="text-muted-foreground group-hover:text-white transition-colors">Average engagement increase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;