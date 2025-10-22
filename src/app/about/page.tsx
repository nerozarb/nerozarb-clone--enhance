import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: <Target className="h-8 w-8 text-white" />,
    title: "Results-Driven",
    description: "Hum sirf promises nahi karte, delivered results pe focus karte hain."
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: "Client-First",
    description: "Aapki success humari priority hai. Har strategy aapke goals ke around built hai."
  },
  {
    icon: <Award className="h-8 w-8 text-white" />,
    title: "Quality Excellence",
    description: "High-quality content aur services jo aapke brand ko stand out karti hain."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    title: "Continuous Growth",
    description: "Hum continuously innovate karte hain to deliver best results."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 lg:py-32 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-poppins text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                About NEROZARB
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Pakistani businesses ke liye premium AI-powered marketing solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Humara Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  NEROZARB ki founding Pakistani SMEs ko world-class digital marketing services provide karne ke mission ke saath hui. Humne dekha ki local businesses ko modern, data-driven marketing strategies tak access nahi hai.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Humari team ne AI-powered solutions develop kiye jo specifically Pakistani market aur consumer behavior ke liye designed hain. Urdu aur English bilingual content, local culture understanding, aur proven strategies se hum 50+ businesses ko grow kar chuke hain.
                </p>
                <p className="text-lg text-muted-foreground">
                  Aaj, hum proud hain ki humara 90% client retention rate hai aur average 300% engagement growth deliver karte hain.
                </p>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0fadb29d-8829-4d05-9666-8ac93c12f578-preview--nerozarb-lovable-app/assets/images/images_1.png"
                  alt="NEROZARB team working"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-secondary py-16 px-8 rounded-3xl mb-20">
              <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-black mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="font-poppins text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="font-poppins text-5xl font-bold text-foreground">50+</h3>
                <p className="mt-2 text-muted-foreground">Clients Served</p>
              </div>
              <div>
                <h3 className="font-poppins text-5xl font-bold text-foreground">300%</h3>
                <p className="mt-2 text-muted-foreground">Avg. Growth</p>
              </div>
              <div>
                <h3 className="font-poppins text-5xl font-bold text-foreground">90%</h3>
                <p className="mt-2 text-muted-foreground">Retention Rate</p>
              </div>
              <div>
                <h3 className="font-poppins text-5xl font-bold text-foreground">24/7</h3>
                <p className="mt-2 text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
