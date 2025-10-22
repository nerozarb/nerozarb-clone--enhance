import { ArrowRight, PlayCircle, Sparkles, Flame, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-background pt-32 pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Subtle animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      {/* Grid pattern */}
      <div 
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-[500px] w-full -z-0 opacity-20"
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
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-lg glow-effect backdrop-blur-sm border border-white/20">
              <Sparkles className="w-3 h-3 text-white" />
              PREMIUM AI-POWERED MARKETING
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm border border-red-500/30 animate-pulse">
              <Flame className="w-3 h-3 text-red-400" />
              Only 5 Slots Available This Month
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm border border-green-500/30">
              <Users className="w-3 h-3 text-green-400" />
              🔴 3 Businesses Signed Up This Week
            </div>
          </div>

          <h1 className="font-poppins font-bold tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-[80px] lg:leading-[1.05] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 max-w-5xl">
            <span className="text-white text-shadow-glow">30 Din Mein Digital Growth</span>
            <br />
            <span className="text-white">AI-Powered, Guaranteed Results</span>
          </h1>

          <p className="mt-8 max-w-[800px] mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            We use <span className="text-white font-semibold">AI automation</span> to deliver what traditional agencies take months to do — in just <span className="text-white font-semibold">days</span>. Social media, ads, content, SEO — sab kuch, <span className="text-white font-semibold">faster & cheaper</span>.
          </p>

          {/* Video Section */}
          <div className="mt-12 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 group-hover:from-white/5 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <PlayCircle className="w-12 h-12 text-black ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                <h3 className="text-white font-semibold text-xl mb-1">How Nerozarb Transforms Pakistani Brands</h3>
                <p className="text-white/80 text-sm">Watch this 2-minute explainer: Meet the founder, see our AI process, and hear a real success story</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>
              <div className="w-full h-full bg-white/5 backdrop-blur-sm"></div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              🎬 Real case study: How we grew a Karachi café from 800 to 8,000 Instagram followers in 14 days
            </p>
          </div>

          <div className="mt-10 flex w-full max-w-2xl flex-col items-center gap-4 sm:flex-row sm:justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
              <a
                href="#contact"
                className="group inline-flex h-14 w-full items-center justify-center rounded-xl bg-white px-10 text-base font-semibold text-black shadow-2xl shadow-white/20 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:shadow-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
              >
                Get Your Free 30-Minute Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-xs text-muted-foreground mt-2 text-center sm:text-left">
                We'll analyze your current marketing and show you 3 quick wins
              </p>
            </div>
          </div>
        
        </div>

        {/* Early bird pricing urgency */}
        <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-900 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-sm border border-yellow-500/30">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Book by March 15th: Get 1st month at 20% off</span>
          </div>
        </div>

        <div className="mt-20 lg:mt-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-12 text-center md:grid-cols-4 md:gap-x-12">
            
            <div className="group flex flex-col items-center transform transition-all duration-500 hover:scale-110">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <h3 className="relative font-poppins text-5xl font-bold tracking-tighter md:text-6xl text-white">50+</h3>
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">Clients Served</p>
            </div>
            
            <div className="group flex flex-col items-center transform transition-all duration-500 hover:scale-110">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <h3 className="relative font-poppins text-5xl font-bold tracking-tighter md:text-6xl text-white">300%</h3>
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">Avg. Growth</p>
            </div>

            <div className="group flex flex-col items-center transform transition-all duration-500 hover:scale-110">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <h3 className="relative font-poppins text-5xl font-bold tracking-tighter md:text-6xl text-white">90%</h3>
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">Retention Rate</p>
            </div>

            <div className="group flex flex-col items-center transform transition-all duration-500 hover:scale-110">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <h3 className="relative font-poppins text-5xl font-bold tracking-tighter md:text-6xl text-white">24/7</h3>
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">Support</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;