import { Phone, FileBarChart, Rocket, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    step: 1,
    icon: <Phone className="w-8 h-8" />,
    title: 'Free Strategy Call',
    duration: '30 mins',
    description: 'We discuss your goals, budget, and timeline',
  },
  {
    step: 2,
    icon: <FileBarChart className="w-8 h-8" />,
    title: 'Custom Proposal',
    duration: '24 hours',
    description: 'Tailored strategy + pricing + expected results',
  },
  {
    step: 3,
    icon: <Rocket className="w-8 h-8" />,
    title: 'Onboarding',
    duration: '2-3 days',
    description: 'Account access, brand guidelines, content calendar',
  },
  {
    step: 4,
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: 'Launch',
    duration: 'Day 7',
    description: 'First campaigns go live!',
  },
];

const ProcessTimelineSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            What Happens{" "}
            <span className="text-white/90">
              Next?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple 4-step process se shuru karte hain aapka digital transformation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative group"
              >
                {/* Connector line - hidden on last item */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-white/30 to-transparent z-0"></div>
                )}

                <div className="relative glass-effect p-6 rounded-3xl border border-border/50 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10 h-full flex flex-col">
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg shadow-xl z-10">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white w-fit">
                    <span>{step.duration}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 glass-effect rounded-3xl border border-border/50">
              <p className="text-lg text-muted-foreground max-w-2xl">
                <span className="text-white font-semibold">Poora process sirf 7 din mein!</span> Traditional agencies mein ye 4-6 weeks lagta hai.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-white/20 hover:shadow-3xl hover:shadow-white/30"
              >
                <Phone className="w-5 h-5" />
                Book Your Free Strategy Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;