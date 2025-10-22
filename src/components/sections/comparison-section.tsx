import { Check, X } from 'lucide-react';

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

  return (
    <section className="bg-gradient-to-b from-background via-secondary/20 to-background py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mb-16 text-center">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
            Why AI? <span className="text-white/90">Why Us?</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Traditional agencies vs NEROZARB ka fark dekhen
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 md:p-8 bg-white/5 border-b border-border/50">
              <div></div>
              <div className="text-center">
                <h3 className="font-poppins text-lg md:text-xl font-semibold text-muted-foreground">
                  Traditional Agency
                </h3>
              </div>
              <div className="text-center">
                <h3 className="font-poppins text-lg md:text-xl font-semibold text-white">
                  NEROZARB
                  <span className="block text-sm text-muted-foreground font-normal mt-1">(AI-Powered)</span>
                </h3>
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <div 
                key={index}
                className="grid grid-cols-3 gap-4 p-6 md:p-8 border-b border-border/30 last:border-b-0 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center">
                  <h4 className="font-poppins text-base md:text-lg font-semibold text-white">
                    {row.category}
                  </h4>
                </div>
                <div className="flex items-center justify-center text-center">
                  <div className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-muted-foreground">
                      {row.traditional}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center text-center">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-white font-medium">
                      {row.nerozarb}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Below Table */}
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="group inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-base font-semibold text-black shadow-2xl shadow-white/20 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:shadow-white/30"
            >
              Switch to AI-Powered Marketing
              <Check className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;