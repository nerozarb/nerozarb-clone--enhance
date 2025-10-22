"use client";

import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, Target } from 'lucide-react';

const ROICalculatorSection = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(500000);
  const [currentMarketingSpend, setCurrentMarketingSpend] = useState(50000);
  
  // Calculate projections
  const avgGrowthRate = 3.0; // 300% average growth
  const projectedRevenue = monthlyRevenue * avgGrowthRate;
  const revenueIncrease = projectedRevenue - monthlyRevenue;
  const nerozarbCost = 120000; // Growth package
  const roi = ((revenueIncrease - nerozarbCost) / nerozarbCost) * 100;
  const yearlyImpact = revenueIncrease * 12;

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-PK', { 
      style: 'currency', 
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <section className="bg-gradient-to-b from-background via-secondary/20 to-background py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
            <Calculator className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">Interactive Tool</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white tracking-tight mb-4">
            ROI Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See your potential growth with Nerozarb's AI-powered marketing
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                Your Current Numbers
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Monthly Revenue
                  </label>
                  <input
                    type="range"
                    min="100000"
                    max="5000000"
                    step="50000"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                  <div className="mt-2 text-3xl font-bold text-white">
                    {formatCurrency(monthlyRevenue)}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Current Monthly Marketing Spend
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="10000"
                    value={currentMarketingSpend}
                    onChange={(e) => setCurrentMarketingSpend(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                  <div className="mt-2 text-3xl font-bold text-white">
                    {formatCurrency(currentMarketingSpend)}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-white/10 border border-white/20">
                <p className="text-xs text-white/80 leading-relaxed">
                  💡 <strong>Tip:</strong> Adjust the sliders to match your business. Most Pakistani SMEs see 250-400% growth within 90 days.
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Your Projected Growth
              </h3>
              
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-white" />
                    <p className="text-sm font-semibold text-white/80">Projected Monthly Revenue</p>
                  </div>
                  <p className="text-4xl font-bold text-white">
                    {formatCurrency(projectedRevenue)}
                  </p>
                  <p className="text-sm text-white/70 mt-1">
                    Based on 300% average growth rate
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-white" />
                    <p className="text-sm font-semibold text-white/80">Monthly Revenue Increase</p>
                  </div>
                  <p className="text-4xl font-bold text-white">
                    {formatCurrency(revenueIncrease)}
                  </p>
                  <p className="text-sm text-white/70 mt-1">
                    +{((revenueIncrease / monthlyRevenue) * 100).toFixed(0)}% more than current
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-white/90 border border-white/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="w-5 h-5 text-black" />
                    <p className="text-sm font-semibold text-black/80">Your ROI with Nerozarb</p>
                  </div>
                  <p className="text-4xl font-bold text-black">
                    {roi.toFixed(0)}%
                  </p>
                  <p className="text-sm text-black/70 mt-1">
                    Return on investment in 90 days
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-white" />
                    <p className="text-sm font-semibold text-white/80">Yearly Impact</p>
                  </div>
                  <p className="text-4xl font-bold text-white">
                    {formatCurrency(yearlyImpact)}
                  </p>
                  <p className="text-sm text-white/70 mt-1">
                    Additional revenue per year
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-10 p-8 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Achieve These Results?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join 50+ Pakistani businesses already growing with our AI-powered marketing. Get a free strategy call to see how we can help you hit these numbers.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-14 px-10 rounded-xl bg-white text-black font-semibold shadow-2xl shadow-white/20 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:shadow-white/30"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Get Your Free Strategy Call
            </a>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-xs text-center text-muted-foreground">
            * Results based on average client performance. Individual results may vary based on industry, budget, and market conditions. 90-day money-back guarantee applies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;
