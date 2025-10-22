import { Award, BadgeCheck, Shield, TrendingUp, Clock, DollarSign } from 'lucide-react';

const badges = [
  {
    icon: BadgeCheck,
    title: "Meta Business Partner",
    description: "Certified Facebook & Instagram marketing",
    verified: true
  },
  {
    icon: Shield,
    title: "Google Ads Certified",
    description: "Advanced search & display campaigns",
    verified: true
  },
  {
    icon: Award,
    title: "5+ Years in Business",
    description: "Serving Pakistani brands since 2019",
    verified: false
  },
  {
    icon: TrendingUp,
    title: "300% Average ROI",
    description: "Proven track record of results",
    verified: false
  },
  {
    icon: Clock,
    title: "24/7 Support Available",
    description: "Always here when you need us",
    verified: false
  },
  {
    icon: DollarSign,
    title: "Money-Back Guarantee",
    description: "90-day results or full refund",
    verified: false
  }
];

const TrustBadgesSection = () => {
  return (
    <section className="bg-gradient-to-b from-background via-secondary/10 to-background py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4">
            <Shield className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">Trusted & Certified</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-white tracking-tight mb-4">
            Industry-Leading Credentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're backed by certifications and a proven track record of delivering results for Pakistani businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                {/* Verified badge */}
                {badge.verified && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-white rounded-full text-black text-xs font-bold">
                    <BadgeCheck className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
                      {badge.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {badge.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-5 h-5 text-white" />
            <span className="font-semibold">ISO 9001 Compliant</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-white" />
            <span className="font-semibold">SECP Registered</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/50"></div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-white" />
            <span className="font-semibold">50+ Industry Awards</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
