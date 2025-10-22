"use client";

import { Check, Sparkles, Zap, Crown, Clock, FileText, Wrench, Users2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Starter',
    price: 'PKR 65,000',
    pricePeriod: '/month',
    description: 'Chote businesses ke liye perfect jo digital journey start kar rahe hain',
    hourBreakdown: '~30 hours of work/month',
    deliverables: '12 Instagram posts + 8 Facebook posts + 2 strategy calls',
    tools: 'Canva Pro, Buffer, Basic Analytics',
    bestFor: 'New brands with 1K-5K followers',
    features: [
      'Social Media Management',
      '10 Posts/Week',
      'Basic Analytics',
      'Whatsapp Support'
    ],
    isPopular: false,
    ctaText: 'Shuru Karein',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    name: 'Growth',
    price: 'PKR 120,000',
    pricePeriod: '/month',
    description: 'Growing businesses ke liye ideal jo scale karne ready hain',
    hourBreakdown: '~40 hours of work/month',
    deliverables: '15 Instagram posts + 10 Facebook ads + 1 strategy call',
    tools: 'Canva Pro, Hootsuite, Analytics Dashboard',
    bestFor: 'Fashion brands with 5K-20K followers',
    popularBadge: 'Most popular: 32 businesses chose this plan',
    features: [
      'Starter mein sab kuch',
      'Paid Advertising',
      'Advanced Analytics',
      'Weekly Strategy Calls',
      'Lead Generation'
    ],
    isPopular: true,
    ctaText: 'Shuru Karein',
    icon: <Crown className="w-5 h-5" />,
  },
  {
    name: 'Scale',
    price: 'Custom',
    pricePeriod: '',
    description: 'Bade businesses ke liye enterprise solution',
    hourBreakdown: '~60+ hours of work/month',
    deliverables: 'Custom content volume + dedicated team',
    tools: 'All premium tools + custom automation',
    bestFor: 'Established brands with 20K+ followers',
    features: [
      'Growth mein sab kuch',
      'Dedicated Account Manager',
      'Custom Automation',
      'Priority Support',
      'Unlimited Revisions'
    ],
    isPopular: false,
    ctaText: 'Shuru Karein',
    icon: <Sparkles className="w-5 h-5" />,
  },
];

const PricingSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Apna Growth Package{" "}
            <span className="text-white/90">
              Choose Karein
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Pakistani businesses ke liye transparent pricing — jaaniye exactly kya milega
          </p>
          
          {/* Trust Signal */}
          <motion.div 
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-sm font-semibold text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-4 h-4 text-green-400" />
            Join 50+ Pakistani brands growing with AI
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`
                group relative p-8 rounded-3xl transition-all duration-500
                ${plan.isPopular
                  ? 'bg-white text-black shadow-2xl shadow-white/20 border-2 border-white/50'
                  : 'bg-card/50 backdrop-blur-sm border border-border/50'
                }
              `}
              variants={itemVariants}
              whileHover={{ scale: plan.isPopular ? 1.02 : 1.05, y: -5 }}
            >
              {plan.isPopular && (
                <motion.div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="flex items-center gap-x-2 bg-black text-white text-sm font-bold px-4 py-2 rounded-full shadow-xl">
                    <Sparkles className="w-4 h-4" />
                    {plan.popularBadge}
                  </span>
                </motion.div>
              )}

              <div className="relative flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className={`p-3 rounded-xl ${plan.isPopular ? 'bg-black/10' : 'bg-white/10'}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {plan.icon}
                  </motion.div>
                  <h3 className={`text-3xl font-bold ${plan.isPopular ? 'text-black' : 'text-white'}`}>
                    {plan.name}
                  </h3>
                </div>
                
                <div className="mb-6">
                  <span className="text-5xl md:text-6xl font-bold tracking-tight">{plan.price}</span>
                  {plan.pricePeriod && (
                    <span className={`text-lg ml-2 ${plan.isPopular ? 'text-black/70' : 'text-muted-foreground'}`}>{plan.pricePeriod}</span>
                  )}
                </div>

                <p className={`mb-8 text-base leading-relaxed ${plan.isPopular ? 'text-black/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>

                {/* Transparent Breakdown */}
                <div className={`mb-8 space-y-3 p-4 rounded-xl ${plan.isPopular ? 'bg-black/5' : 'bg-white/5'}`}>
                  <div className="flex items-start gap-2">
                    <Clock className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.isPopular ? 'text-black/60' : 'text-white/60'}`} />
                    <div>
                      <p className={`text-xs font-semibold mb-0.5 ${plan.isPopular ? 'text-black/60' : 'text-white/60'}`}>Work Hours</p>
                      <p className={`text-sm font-medium ${plan.isPopular ? 'text-black' : 'text-white'}`}>{plan.hourBreakdown}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileText className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.isPopular ? 'text-black/60' : 'text-white/60'}`} />
                    <div>
                      <p className={`text-xs font-semibold mb-0.5 ${plan.isPopular ? 'text-black/60' : 'text-white/60'}`}>Deliverables</p>
                      <p className={`text-sm font-medium ${plan.isPopular ? 'text-black' : 'text-white'}`}>{plan.deliverables}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Wrench className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.isPopular ? 'text-black/60' : 'text-white/60'}`} />
                    <div>
                      <p className={`text-xs font-semibold mb-0.5 ${plan.isPopular ? 'text-black/60' : 'text-white/60'}`}>Tools Included</p>
                      <p className={`text-sm font-medium ${plan.isPopular ? 'text-black' : 'text-white'}`}>{plan.tools}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.isPopular ? 'text-black/60' : 'text-white/60'}`} />
                    <div>
                      <p className={`text-xs font-semibold mb-0.5 ${plan.isPopular ? 'text-black/60' : 'text-white/60'}`}>Best For</p>
                      <p className={`text-sm font-medium ${plan.isPopular ? 'text-black' : 'text-white'}`}>{plan.bestFor}</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.isPopular ? 'bg-black/10' : 'bg-white/10'}`}>
                        <Check className={`w-3 h-3 ${plan.isPopular ? 'text-black' : 'text-white'}`} />
                      </div>
                      <span className={`text-sm font-medium ${plan.isPopular ? 'text-black' : 'text-white/90'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <motion.a
                    href="#contact"
                    className={`
                      block w-full text-center py-4 px-6 rounded-xl text-base font-bold transition-all duration-300 shadow-lg
                      ${plan.isPopular
                        ? 'bg-black text-white hover:bg-black/90'
                        : 'bg-white text-black hover:shadow-2xl hover:shadow-white/20'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {plan.ctaText}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;