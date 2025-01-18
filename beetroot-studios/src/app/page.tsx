"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

interface Game {
  title: string;
  description: string;
  image: string;
}

interface GameCardProps {
  game: Game;
  index: number;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              {['About', 'Games', 'News', 'Careers', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="relative text-white/80 hover:text-white text-sm uppercase tracking-widest transition-colors duration-300 py-2"
                >
                  <span className="relative">
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#8B1F47] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
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
              {['About', 'Games', 'News', 'Careers', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-white/80 hover:text-white text-sm uppercase tracking-wider transition-all duration-300 hover:translate-x-2"
                >
                  {item}
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
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 bg-black">
        <Image
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070"
          alt="Hero Background"
          fill
          className="object-cover opacity-25 scale-100 transform transition-transform duration-[2s] hover:scale-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="max-w-4xl transform transition-all duration-1000 ease-out">
          <h1 className={`text-7xl md:text-8xl font-bold text-white mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Through games,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F]">
              adds colors to lives!
            </span>
          </h1>
          <p className={`text-xl text-gray-300 mb-12 max-w-2xl transition-all delay-300 duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            We create innovative and entertaining mobile games that bring joy to millions of players worldwide.
          </p>
          <div className={`flex gap-6 transition-all delay-500 duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="group relative px-8 py-3 rounded-lg overflow-hidden bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 hover:border-[#8B1F47]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#8B1F47]/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B1F47] to-[#641434] transition-transform duration-300 group-hover:scale-105"></div>
              <span className="relative text-white text-lg font-semibold z-10">Our Games</span>
            </button>
            <button className="group relative px-8 py-3 rounded-lg overflow-hidden">
              <div className="absolute inset-0 border-2 border-white/30 transition-all duration-300 group-hover:border-[#8B1F47]/50 group-hover:scale-105"></div>
              <span className="relative text-white text-lg font-semibold z-10">Learn More</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce cursor-pointer hover:text-blue-500 transition-colors">
          <svg className="w-8 h-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

const GameCard = ({ game, index }: GameCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#8B1F47]/20 hover:border-[#8B1F47]/30">
      <div className="aspect-[16/9] relative overflow-hidden">
        <div className="relative w-full h-full transform-gpu">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            style={{ transformOrigin: 'center center' }}
          />
          <div 
            className="absolute inset-0 bg-gradient-to-t from-[#641434] via-[#641434]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
            style={{ transformOrigin: 'center center' }}
          />
        </div>
      </div>
      <div className="p-8 transform transition-all duration-500 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#641434]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D64B7F] transition-colors">{game.title}</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{game.description}</p>
          <button className="mt-6 text-[#B82E63] font-semibold group-hover:text-white transition-colors flex items-center gap-2">
            Learn More 
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#641434]/20 to-black/95"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 p-8 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 transform transition-all duration-500 hover:border-[#8B1F47]/30">
            <h2 className="text-5xl font-bold text-white mb-6">
              Who We <span className="text-[#8B1F47]">Are</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We are a passionate team of game developers dedicated to creating unforgettable gaming experiences. Our mission is to bring joy and excitement to players around the world through innovative mobile games.
            </p>
            <div className="flex gap-6">
              <button className="group relative px-8 py-3 rounded-lg overflow-hidden bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 hover:border-[#8B1F47]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#8B1F47]/20">
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B1F47] to-[#641434] transition-transform duration-300 group-hover:scale-105"></div>
                <span className="relative text-white text-lg font-semibold z-10">Join Our Team</span>
              </button>
              <button className="group relative px-8 py-3 rounded-lg overflow-hidden">
                <div className="absolute inset-0 border-2 border-white/30 transition-all duration-300 group-hover:border-[#8B1F47]/50 group-hover:scale-105"></div>
                <span className="relative text-white text-lg font-semibold z-10">Learn More</span>
              </button>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden group bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 transform transition-all duration-500 hover:border-[#8B1F47]/30">
            <Image
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070"
              alt="Our Team"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const inputClasses = `
    bg-gradient-to-br from-[#641434]/40 to-black/60 
    backdrop-blur-sm 
    border border-[#8B1F47]/20 
    text-white 
    px-6 py-4 
    rounded-lg 
    w-full
    transition-all duration-300
    placeholder:text-[#4A154B]/90
    placeholder:font-medium
    hover:border-[#8B1F47]/40
    hover:shadow-md hover:shadow-[#8B1F47]/10
    focus:outline-none 
    focus:border-[#8B1F47]/60
    focus:ring-2 
    focus:ring-[#8B1F47]/20
    focus:shadow-lg focus:shadow-[#8B1F47]/10
    focus:bg-gradient-to-br focus:from-[#641434]/50 focus:to-black/70
  `;

  return (
    <section className="py-32">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white">
              Contact <span className="text-[#8B1F47]">Us</span>
            </h2>
          </div>
          
          <div className="p-8 rounded-xl bg-black/40 backdrop-blur-sm border border-[#8B1F47]/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name And Surname*"
                  className={inputClasses}
                  required
                />
                <input
                  type="email"
                  placeholder="E-Mail Address*"
                  className={inputClasses}
                  required
                />
              </div>
              
              <input
                type="text"
                placeholder="Subject Title*"
                className={inputClasses}
                required
              />
              
              <textarea
                placeholder="Your Message*"
                rows={6}
                className={`${inputClasses} resize-none`}
                required
              ></textarea>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6LdKw7oqAAAAAAhNov3QHbZ5gqpRv1huqdfA66Z3"
                  theme="dark"
                  className="transform scale-90 sm:scale-100"
                />
              </div>

              <div className="flex justify-center">
                <button 
                  type="submit"
                  className="
                    group relative px-12 py-4 
                    rounded-lg overflow-hidden 
                    bg-gradient-to-r from-[#8B1F47] to-[#641434] 
                    hover:from-[#B82E63] hover:to-[#8B1F47] 
                    text-white 
                    font-semibold 
                    tracking-wider
                    uppercase
                    transition-all duration-300 
                    transform hover:scale-105 
                    hover:shadow-lg hover:shadow-[#8B1F47]/20
                  "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const games = [
  {
    title: "Epic Quest",
    description: "A thrilling adventure game that takes you through magical realms.",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070",
  },
  {
    title: "Space Warriors",
    description: "Battle in the vast cosmos with stunning graphics and intense action.",
    image: "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=2072",
  },
  {
    title: "Strategy Masters",
    description: "Build your empire and conquer new territories in this strategy game.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative bg-black min-h-screen">
        <div className="fixed inset-0 bg-gradient-to-b from-black via-[#641434]/20 to-black pointer-events-none"></div>
        
        <div className="relative z-10">
          <Hero />
          
          <section className="py-32">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center mb-16 space-y-6 p-8 rounded-xl bg-black/40 backdrop-blur-sm border border-[#8B1F47]/10">
                <h2 className="text-5xl font-bold text-white">
                  Featured <span className="text-[#8B1F47]">Games</span>
                </h2>
                <p className="text-gray-400 text-lg text-center max-w-2xl">
                  Discover our latest and most popular mobile games that millions of players enjoy worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.map((game, index) => (
                  <GameCard key={index} game={game} index={index} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
