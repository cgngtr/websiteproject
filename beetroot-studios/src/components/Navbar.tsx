"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="fixed w-full z-50">
      <div className="bg-gradient-to-b from-black/95 to-[#641434]/20 backdrop-blur-md border-b border-[#8B1F47]/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center group">
              <span className="text-2xl font-extrabold tracking-wider">
                <span className="text-[#8B1F47] group-hover:text-[#B82E63] transition-colors duration-300">BEETROOT</span>
                <span className="text-white/90 group-hover:text-white transition-colors duration-300"> STUDIOS</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-10">
              {[
                { name: 'About', path: '/about' },
                { name: 'Games', path: '/games' },
                { name: 'News', path: '/news' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.path} 
                  className={`relative text-sm uppercase tracking-widest transition-colors duration-300 py-2 group ${
                    isActivePath(item.path) ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-[#8B1F47] transform transition-transform duration-300 origin-left ${
                      isActivePath(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-8">
              <button className="hidden md:block bg-gradient-to-r from-[#8B1F47] to-[#641434] hover:from-[#B82E63] hover:to-[#8B1F47] text-white px-8 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#8B1F47]/20">
                Play Now
              </button>
              <button className="text-white/80 hover:text-white text-sm uppercase tracking-wider transition-colors duration-300 font-medium">
                EN
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="md:hidden text-white p-2 transition-transform duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className={`md:hidden transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <nav className="py-6 space-y-4">
              {[
                { name: 'About', path: '/about' },
                { name: 'Games', path: '/games' },
                { name: 'News', path: '/news' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`block text-sm uppercase tracking-wider transition-all duration-300 hover:translate-x-2 ${
                    isActivePath(item.path) ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-6 bg-gradient-to-r from-[#8B1F47] to-[#641434] hover:from-[#B82E63] hover:to-[#8B1F47] text-white px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-300">
                Play Now
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
} 