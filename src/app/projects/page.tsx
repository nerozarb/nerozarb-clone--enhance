import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { LoaderCircle } from "lucide-react";

const ProjectCardPlaceholder = ({ title, category }: { title: string; category: string }) => (
  <div className="relative overflow-hidden rounded-2xl bg-secondary shadow-lg aspect-[4/5] p-8 flex flex-col justify-end">
    <div className="absolute top-8 right-8 w-14 h-14 rounded-full border border-border flex items-center justify-center">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-muted-foreground/60"
      >
        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div>
      <h3 className="font-poppins text-2xl font-semibold text-foreground/40">{title}</h3>
      <p className="mt-1 font-poppins text-sm uppercase tracking-wider text-muted-foreground/70">{category}</p>
    </div>
  </div>
);

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 lg:py-32 bg-background">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-poppins text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Our Latest Projects
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Check out some of our recent work and success stories
              </p>
            </div>

            <div className="relative mt-20">
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-3xl bg-background/80 p-8 text-center backdrop-blur-sm border border-border/50">
                <LoaderCircle className="h-12 w-12 animate-spin text-foreground" />
                <h3 className="mt-6 font-poppins text-2xl font-semibold text-foreground">
                  Content Being Updated
                </h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  We're refreshing our project showcase with new exciting work. Check back soon to see our latest success stories.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 filter blur-lg pointer-events-none md:grid-cols-2 lg:grid-cols-3">
                <ProjectCardPlaceholder title="FUTURECO" category="BUSINESS CENTER" />
                <ProjectCardPlaceholder title="INFINITY GREEN" category="RESTAURANT" />
                <ProjectCardPlaceholder title="RENEWASPHERE" category="DISTRICT" />
                <ProjectCardPlaceholder title="TECH INNOVATIONS" category="STARTUP" />
                <ProjectCardPlaceholder title="URBAN STYLE" category="FASHION" />
                <ProjectCardPlaceholder title="FOODIE PARADISE" category="CAFE" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
