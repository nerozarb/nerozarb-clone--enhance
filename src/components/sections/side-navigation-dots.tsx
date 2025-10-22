"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "packages", label: "Packages" },
  { id: "results", label: "Results" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonials", label: "Testimonials" },
];

const SideNavigationDots = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            return;
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    const elements = navItems.map(({ id }) => document.getElementById(id));
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleLinkClick = ( e: React.MouseEvent<HTMLAnchorElement>, id: string ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 transform flex-col items-end gap-4 lg:flex">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleLinkClick(e, item.id)}
            aria-label={`Go to ${item.label} section`}
            className="group flex cursor-pointer items-center justify-end gap-2"
          >
            <div className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[120px]">
              <span className="px-2 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {item.label}
              </span>
            </div>
            <div
              className={`relative h-3 w-3 shrink-0 rounded-full transition-all duration-300 ${
                isActive
                  ? "scale-125 bg-white shadow-lg"
                  : "bg-muted group-hover:bg-muted-foreground"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
};

export default SideNavigationDots;