"use client";

import { ArrowRight, PlayCircle, Sparkles, Flame, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-background pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
      
      {/* Subtle animated orbs */}
      <motion.div 
        className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-60 sm:w-96 h-60 sm:h-96 bg-white/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Grid pattern */}
      <div 
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[300px] sm:h-[500px] w-full -z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to top, white 10%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, white 10%, transparent 100%)',
        }}
      />

      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Urgency badges */}
          <motion.div 
            className="mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-white shadow-lg glow-effect backdrop-blur-sm border border-white/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
              PREMIUM AI-POWERED MARKETING
            </motion.div>
            <motion.div 
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-red-500/20 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-white shadow-lg backdrop-blur-sm border border-red-500/30"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-red-400" />
              Only 5 Slots Available
            </motion.div>
            <motion.div 
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-green-500/20 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-semibold text-white shadow-lg backdrop-blur-sm border border-green-500/30"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-400" />
              🔴 3 Signed Up This Week
            </motion.div>
          </motion.div>

          <motion.h1 
            className="font-poppins font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] xl:leading-[1.05] max-w-5xl px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-white text-shadow-glow">30 Din Mein Digital Growth</span>
            <br />
            <span className="text-white">AI-Powered, Guaranteed Results</span>
          </motion.h1>

          <motion.p 
            className="mt-4 sm:mt-6 md:mt-8 max-w-[800px] mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            We use <span className="text-white font-semibold">AI automation</span> to deliver what traditional agencies take months to do — in just <span className="text-white font-semibold">days</span>. Social media, ads, content, SEO — sab kuch, <span className="text-white font-semibold">faster & cheaper</span>.
          </motion.p>

          {/* Video Section */}
          <motion.div 
            className="mt-8 sm:mt-10 md:mt-12 w-full max-w-4xl px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-white/20 sm:border-2 shadow-2xl group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 group-hover:from-white/5 transition-all duration-300"></div>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center z-20"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                  <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black ml-1" />
                </div>
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                <h3 className="text-white font-semibold text-sm sm:text-base md:text-xl mb-0.5 sm:mb-1">How Nerozarb Transforms Pakistani Brands</h3>
                <p className="text-white/80 text-xs sm:text-sm hidden sm:block">Watch this 2-minute explainer: Meet the founder, see our AI process, and hear a real success story</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>
              <div className="w-full h-full bg-white/5 backdrop-blur-sm"></div>
            </motion.div>
            <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-muted-foreground text-center px-2">
              🎬 Real case study: How we grew a Karachi café from 800 to 8,000 Instagram followers in 14 days
            </p>
          </motion.div>

          <motion.div 
            className="mt-6 sm:mt-8 md:mt-10 flex w-full max-w-2xl flex-col items-center gap-3 sm:gap-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center w-full">
              <motion.a
                href="#contact"
                className="group inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-white px-6 sm:px-10 text-sm sm:text-base font-semibold text-black shadow-2xl shadow-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden sm:inline">Get Your Free 30-Minute Strategy Call</span>
                <span className="sm:hidden">Get Free Strategy Call</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 text-center">
                We'll analyze your current marketing and show you 3 quick wins
              </p>
            </div>
          </motion.div>
        
        </div>

        {/* Early bird pricing urgency */}
        <motion.div 
          className="mt-8 sm:mt-10 md:mt-12 flex justify-center px-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg backdrop-blur-sm border border-yellow-500/30"
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(234, 179, 8, 0.3)",
                "0 0 40px rgba(234, 179, 8, 0.5)",
                "0 0 20px rgba(234, 179, 8, 0.3)"
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-center">Book by March 15th: Get 1st month at 20% off</span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 sm:mt-16 md:mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12 text-center md:grid-cols-4 md:gap-x-12">
            
            {[
              { number: "50+", label: "Clients Served" },
              { number: "300%", label: "Avg. Growth" },
              { number: "90%", label: "Retention Rate" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="group flex flex-col items-center transform transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + (index * 0.1) }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  />
                  <h3 className="relative font-poppins text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white">{stat.number}</h3>
                </div>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">{stat.label}</p>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;