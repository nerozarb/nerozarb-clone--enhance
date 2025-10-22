import React from 'react';
import { Bot, TrendingUp, Crosshair } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Bot className="h-7 w-7 text-black" />,
      title: "AI-Powered Content",
      description: "Advanced algorithms se viral content banate hain jo Pakistani audiences ke liye perfect hai"
    },
    {
      icon: <TrendingUp className="h-7 w-7 text-black" />,
      title: "Guaranteed ROI",
      description: "90 din mein 25% zyada qualified leads ya paisa wapis"
    },
    {
      icon: <Crosshair className="h-7 w-7 text-black" />,
      title: "Local Expertise",
      description: "Pakistani market aur consumer behavior ki deep understanding"
    }
  ];

  const industries = [
    "Fashion",
    "Tech",
    "F&B",
    "Real Estate",
    "Healthcare",
    "E-commerce",
    "Beauty & Cosmetics",
    "Education"
  ];

  return (
    <section id="features" className="bg-gradient-to-b from-background via-secondary/30 to-background py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mb-16 text-center">
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
            Pakistani Brands Humein{" "}
            <span className="text-white/90">
              Kyun Choose Karte Hain
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Data-driven strategies jo measurable results dete hain
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 hover:border-white/30"
            >
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="relative mb-4 font-poppins text-2xl font-semibold text-white group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="relative text-base text-muted-foreground group-hover:text-white/90 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-28">
          <p className="mb-12 text-center text-lg font-semibold text-muted-foreground">
            Serving clients in: <span className="text-white">Fashion • Tech • F&B • Real Estate • Healthcare • E-commerce</span>
          </p>
          <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-4">
              {industries.map((industry, index) => (
                <li key={index}>
                  <div className="flex h-[120px] w-[200px] shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-white/30 transition-all duration-300 hover:scale-105">
                    <span className="text-base font-semibold text-white">{industry}</span>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_li]:mx-4" aria-hidden="true">
              {industries.map((industry, index) => (
                <li key={index}>
                  <div className="flex h-[120px] w-[200px] shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/60 hover:border-white/30 transition-all duration-300 hover:scale-105">
                    <span className="text-base font-semibold text-white">{industry}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;