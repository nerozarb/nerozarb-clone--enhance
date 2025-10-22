"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // A real implementation would call an API route
    console.log("Subscribing email:", email);
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white font-poppins">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <a href="#" className="flex items-center space-x-3 mb-4">
                            <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Generated-Image-September-13-2025-12_12AM-2-1761090933693.png"
                alt="NEROZARB Logo"
                width={40}
                height={40}
                className="h-10 w-10" />

                            <span className="text-2xl font-bold tracking-tight">NEROZARB</span>
                        </a>
                        <p className="text-sm text-gray-400 max-w-sm">
                            Apne brand ko AI-powered marketing solutions se transform karein jo Pakistani businesses ke liye designed hain.
                        </p>
                        
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4 text-white" />
                          <span className="text-white font-semibold">📍 Serving clients in Karachi, Lahore, Islamabad</span>
                        </div>
                        
                        <div className="flex space-x-3 mt-6">
                            <a href="https://www.facebook.com/nerozarb" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                                <Facebook className="w-4 h-4 text-white" />
                            </a>
                            <a href="https://www.instagram.com/nerozarb" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                                <Instagram className="w-4 h-4 text-white" />
                            </a>
                            <a href="https://www.linkedin.com/company/nerozarb" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                                <Linkedin className="w-4 h-4 text-white" />
                            </a>
                           <a href="https://twitter.com/nerozarb" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                                <Twitter className="w-4 h-4 text-white" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                              { name: 'Home', href: '/' },
                              { name: 'Services', href: '/services' },
                              { name: 'Projects', href: '/projects' },
                              { name: 'Pricing', href: '/pricing' },
                              { name: 'About', href: '/about' },
                              { name: 'Blog', href: '/blog' },
                              { name: 'Contact', href: '/contact' }
                            ].map((item) =>
              <li key={item.name}>
                                    <a href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">{item.name}</a>
                                </li>
              )}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <Mail className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                                <a href="mailto:nerozarb@gmail.com" className="hover:text-white transition-colors">nerozarb@gmail.com</a>
                            </li>
                            <li className="flex items-start space-x-3 text-gray-400">
                                <Phone className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                                <a href="tel:+923266116911" className="hover:text-white transition-colors">+92 326 611 6911</a>
                            </li>
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                                <span>Pakistan</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Updated Rahein</h3>
                            <p className="text-sm text-gray-400">Latest marketing insights aur exclusive offers apne inbox mein hasil karein.</p>
                        </div>
                        <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-md md:ml-auto">
                            <input
                type="email"
                placeholder="Apna email enter karein"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-none h-11 px-4 rounded-l-md text-white placeholder-gray-500 focus:ring-1 focus:ring-white focus:outline-none flex-grow text-sm"
                aria-label="Email for newsletter" />

                            <button type="submit" className="bg-white text-black font-semibold rounded-r-md hover:bg-gray-200 transition-colors px-6 h-11 text-sm flex-shrink-0">
                                Subscribe Karein
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col-reverse sm:flex-row justify-between items-center text-gray-500 text-xs gap-4">
                     <p className="text-center sm:text-left">© 2025 NEROZARB. Tamam haqooq mahfooz hain.</p>
                     <div className="flex flex-wrap justify-center sm:justify-end items-center gap-x-6 gap-y-2">
                         <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                         <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                     </div>
                </div>
            </div>
        </footer>);

};

export default Footer;