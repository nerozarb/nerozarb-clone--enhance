"use client";

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ComparisonSection = () => {
  const comparisonData = [
    {
      category: "Launch Time",
      traditional: "4-6 weeks to launch",
      nerozarb: "3-5 days to launch",
      isAdvantage: true
    },
    {
      category: "Monthly Cost",
      traditional: "PKR 200K+/month",
      nerozarb: "PKR 65K-120K/month",
      isAdvantage: true
    },
    {
      category: "Strategy",
      traditional: "Generic strategies",
      nerozarb: "Pakistan-specific, data-driven",
      isAdvantage: true
    },
    {
      category: "Reporting",
      traditional: "Monthly reports",
      nerozarb: "Real-time dashboard",
      isAdvantage: true
    },
    {
      category: "Content Volume",
      traditional: "5-10 posts/week",
      nerozarb: "20-30 posts/week (AI-generated)",
      isAdvantage: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-background via-secondary/20 to-background py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-1/4 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-white/5 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 right-0 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-white/5 rounded-full blur-3xl"
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
      
      <div className="container relative z-10 px-4">
        <motion.div 
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Why AI? <span className="text-white/90">Why Us?</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground px-2">
            Traditional agencies vs NEROZARB ka fark dekhen
          </p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="rounded-2xl sm:rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
            whileHover={{ boxShadow: "0 20px 60px rgba(255, 255, 255, 0.1)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Table Header - Hidden on mobile, use cards instead */}
            <div className="hidden sm:grid grid-cols-3 gap-4 p-4 sm:p-6 md:p-8 bg-white/5 border-b border-border/50">
              <div></div>
              <div className="text-center">
                <h3 className="font-poppins text-base sm:text-lg md:text-xl font-semibold text-muted-foreground">
                  Traditional Agency
                </h3>
              </div>
              <div className="text-center">
                <h3 className="font-poppins text-base sm:text-lg md:text-xl font-semibold text-white">
                  NEROZARB
                  <span className="block text-xs sm:text-sm text-muted-foreground font-normal mt-1">(AI-Powered)</span>
                </h3>
              </div>
            </div>

            {/* Table Body */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {comparisonData.map((row, index) => (
                <motion.div 
                  key={index}
                  className="border-b border-border/30 last:border-b-0 hover:bg-white/5 transition-colors"
                  variants={rowVariants}
                >
                  {/* Desktop Layout */}
                  <div className="hidden sm:grid grid-cols-3 gap-4 p-4 sm:p-6 md:p-8">
                    <div className="flex items-center">
                      <h4 className="font-poppins text-sm sm:text-base md:text-lg font-semibold text-white">
                        {row.category}
                      </h4>
                    </div>
                    <div className="flex items-center justify-center text-center">
                      <div className="flex items-start gap-2">
                        <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                          {row.traditional}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center text-center">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm md:text-base text-white font-medium">
                          {row.nerozarb}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Card Layout */}
                  <div className="sm:hidden p-4">
                    <h4 className="font-poppins text-base font-bold text-white mb-3 text-center">
                      {row.category}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                        <X className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-red-400 mb-1">Traditional</p>
                          <p className="text-sm text-muted-foreground">{row.traditional}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-green-400 mb-1">NEROZARB</p>
                          <p className="text-sm text-white font-medium">{row.nerozarb}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Below Table */}
          <motion.div 
            className="mt-8 sm:mt-10 md:mt-12 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#contact"
              className="group inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-white px-6 sm:px-10 text-sm sm:text-base font-semibold text-black shadow-2xl shadow-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Switch to AI-Powered Marketing
              <Check className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;