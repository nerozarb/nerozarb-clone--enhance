import Image from "next/image";
import { Check, Shield } from "lucide-react";

const features = [
  "We understand the Pakistani market and culture",
  "AI-powered content saves you time and money",
  "Proven strategies that increase engagement by 300%",
  "90% client retention rate - we deliver results",
];

const WhyChooseSection = () => {
  return (
    <section className="bg-background py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm shadow-2xl p-2">
            <div className="grid items-center gap-0 lg:grid-cols-2">
              <div className="relative h-96 lg:h-full w-full overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-white/5 z-10"></div>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fadb29d-8829-4d05-9666-8ac93c12f578-preview--nerozarb-lovable-app/assets/images/images_1.png"
                  alt="Professional working environment"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="px-8 py-12 lg:px-12 lg:py-16">
                <h2 className="mb-8 font-poppins text-4xl font-bold text-white">
                  Why Choose{" "}
                  <span className="text-white/90">
                    Nerozarb?
                  </span>
                </h2>
                <ul className="mb-10 space-y-5">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="mr-4 mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Check className="h-4 w-4 text-black" />
                      </div>
                      <span className="text-base text-muted-foreground group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 border border-white/20 backdrop-blur-sm">
                  <Shield className="w-5 h-5 text-white" />
                  <span className="text-sm font-bold text-white">TRUSTED BY 50+ COMPANIES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;