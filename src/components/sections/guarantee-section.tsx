import { CheckCircle, TrendingUp, DollarSign, Calendar, Target, BarChart } from 'lucide-react';

const GuaranteeSection = () => {
  const steps = [
    {
      number: "1️⃣",
      title: "Month 1",
      description: "We audit, strategize, and set up tracking",
      icon: <Target className="h-6 w-6 text-white" />
    },
    {
      number: "2️⃣",
      title: "Month 2-3",
      description: "Execute campaigns and optimize weekly",
      icon: <BarChart className="h-6 w-6 text-white" />
    },
    {
      number: "3️⃣",
      title: "Day 90",
      description: "If you haven't seen 25%+ growth, we refund 100%",
      icon: <DollarSign className="h-6 w-6 text-white" />
    }
  ];

  return (
    <section className="bg-gradient-to-b from-background via-secondary/30 to-background py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400 shadow-lg backdrop-blur-sm border border-green-500/20 mb-6">
              <CheckCircle className="w-4 h-4" />
              Our 90-Day Growth Guarantee
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
              Results Guarantee
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              We're so confident in our AI-powered approach that we offer this:
            </p>
          </div>

          {/* Main Guarantee Box */}
          <div className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-12 mb-12 hover:border-white/30 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-border/30 hover:bg-white/10 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-bold text-white mb-2">
                    25% Increase in Qualified Leads
                  </h3>
                  <p className="text-muted-foreground">
                    Ya phir...
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-border/30 hover:bg-white/10 transition-colors">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white flex-shrink-0">
                  <DollarSign className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="font-poppins text-2xl font-bold text-white mb-2">
                    Full Refund
                  </h3>
                  <p className="text-muted-foreground">
                    (minus ad spend)
                  </p>
                </div>
              </div>
            </div>

            {/* How it Works */}
            <div className="mb-8">
              <h3 className="font-poppins text-2xl font-bold text-white mb-8 text-center">
                How it works:
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="relative p-6 rounded-2xl bg-white/5 border border-border/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                        {step.icon}
                      </div>
                      <span className="text-3xl">{step.number}</span>
                    </div>
                    <h4 className="font-poppins text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                *Terms apply. Ad spend not included. Qualified leads = email/phone inquiries matching your target profile.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="#contact"
              className="group inline-flex h-14 items-center justify-center rounded-xl bg-white px-10 text-base font-semibold text-black shadow-2xl shadow-white/20 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:shadow-white/30"
            >
              Claim Your Guarantee Now
              <CheckCircle className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;