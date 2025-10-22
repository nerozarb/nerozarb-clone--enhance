"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const navLinks = [
{ href: "/", label: "Home" },
{ href: "/services", label: "Services" },
{ href: "/projects", label: "Projects" },
{ href: "/pricing", label: "Pricing" },
{ href: "/blog", label: "Blog" },
{ href: "/about", label: "About" }];


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-[1200px] px-4 sm:px-6">
      <div className="rounded-2xl sm:rounded-full px-4 sm:px-8 backdrop-blur-xl bg-gradient-to-br from-white/15 via-white/8 to-black/20 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15),inset_0_-1px_0_rgba(0,0,0,0.2)] relative overflow-hidden">
        {/* Glossy reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-2xl sm:rounded-full pointer-events-none"></div>
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent rounded-2xl sm:rounded-full pointer-events-none"></div>
        
        <div className="flex items-center justify-between h-16 sm:h-20 relative z-10">
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Generated-Image-September-13-2025-12_12AM-2-1761090933693.png"
                alt="NEROZARB Logo"
                width={48}
                height={48}
                className="h-10 w-10 sm:h-12 sm:w-12 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
            </div>
            <span className="text-base sm:text-xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">NEROZARB</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white/90 hover:text-white transition-all duration-300 relative group drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/80 rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(255,255,255,0.5)]"></span>
              </Link>
            )}
            
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 backdrop-blur-sm"
              aria-label="Change language">
              <span>🇵🇰</span>
              <span>HI-UR</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            <Link href="/contact">
              <button className="h-10 px-6 bg-white text-black font-semibold rounded-full hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group"
              aria-label="Toggle menu">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen &&
      <div className="lg:hidden mt-2 rounded-2xl sm:rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/30 shadow-[0_8px_32px_rgba(255,255,255,0.1)] animate-in slide-in-from-top-4 duration-300 overflow-hidden relative">
          {/* Mobile menu glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="px-6 sm:px-8 py-4 flex flex-col space-y-3 relative z-10">
            {navLinks.map((link) =>
          <Link
            key={link.href}
            href={link.href}
            className="block py-2.5 text-base font-medium text-white/90 hover:text-white transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] active:scale-95 transition-transform"
            onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
          )}
            <div className="border-t border-white/20 pt-4 flex flex-col items-start space-y-3">
              <button
              className="flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors"
              aria-label="Change language">
                <span>🇵🇰</span>
                <span>HI-UR</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <Link href="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full h-11 px-6 bg-white text-black font-semibold rounded-full hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all duration-300 active:scale-95">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      }
    </nav>);

};

export default Navbar;