"use client";

import React, { useState } from 'react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Start Your{" "}
            <span className="text-white/90">
              Digital Journey
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
            Join 50+ SMEs already growing with Nerozarb
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="glass-effect p-8 lg:p-12 rounded-3xl border border-border/50 shadow-2xl"
            whileHover={{ boxShadow: "0 25px 70px rgba(255, 255, 255, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-5 py-4 bg-secondary/50 border border-border/50 rounded-xl focus:ring-1 focus:ring-white focus:border-white focus:outline-none transition-all placeholder:text-muted-foreground text-white backdrop-blur-sm"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 bg-secondary/50 border border-border/50 rounded-xl focus:ring-1 focus:ring-white focus:border-white focus:outline-none transition-all placeholder:text-muted-foreground text-white backdrop-blur-sm"
                  />
                </motion.div>
              </div>
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your phone number"
                  className="w-full px-5 py-4 bg-secondary/50 border border-border/50 rounded-xl focus:ring-1 focus:ring-white focus:border-white focus:outline-none transition-all placeholder:text-muted-foreground text-white backdrop-blur-sm"
                />
              </motion.div>
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-3">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-5 py-4 bg-secondary/50 border border-border/50 rounded-xl focus:ring-1 focus:ring-white focus:border-white focus:outline-none transition-all min-h-[140px] placeholder:text-muted-foreground text-white backdrop-blur-sm resize-none"
                ></textarea>
              </motion.div>
              
              {/* What you'll get checklist */}
              <motion.div 
                className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-semibold text-white mb-3">What you'll get:</p>
                <div className="grid md:grid-cols-2 gap-2">
                  {[
                    "Free 30-minute strategy call",
                    "Custom proposal in 24 hours",
                    "3 quick wins analysis",
                    "Zero commitment required"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl transition-all duration-300 shadow-2xl shadow-white/20 w-full md:w-auto"
                  whileHover={{ scale: 1.05, boxShadow: "0 30px 80px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  Get Your Free 30-Minute Strategy Call
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </motion.button>
                <p className="text-sm text-muted-foreground text-center">
                  ⚡ We'll respond within 24 hours • 🔒 Your info is 100% secure
                </p>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>

        <motion.div 
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {[
            { number: "50+", text: "SMEs served across Pakistan" },
            { number: "90%", text: "Client retention rate" },
            { number: "300%", text: "Average engagement increase" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="glass-effect p-8 rounded-3xl border border-border/50 text-center group hover:border-white/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="font-poppins text-5xl md:text-6xl font-bold text-white mb-3">{stat.number}</h3>
              <p className="text-muted-foreground group-hover:text-white transition-colors">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;