"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';

const games = [
  {
    title: "Epic Quest",
    description: "An immersive RPG adventure where players embark on an epic journey through a mystical realm filled with magic and ancient mysteries.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070",
    genre: "RPG",
    platform: "iOS & Android",
    status: "Released",
    rating: "4.8",
    downloads: "10M+"
  },
  {
    title: "Space Commander",
    description: "A strategic space combat game where players build their fleet, explore galaxies, and engage in epic space battles.",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1974",
    genre: "Strategy",
    platform: "iOS & Android",
    status: "Released",
    rating: "4.6",
    downloads: "5M+"
  },
  {
    title: "Pixel Warriors",
    description: "A retro-style fighting game featuring unique characters, each with their own special abilities and combat styles.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070",
    genre: "Fighting",
    platform: "iOS & Android",
    status: "Released",
    rating: "4.7",
    downloads: "8M+"
  },
  {
    title: "Dream Racing",
    description: "Experience the thrill of high-speed racing with stunning graphics and realistic physics in various exotic locations.",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?q=80&w=1971",
    genre: "Racing",
    platform: "iOS & Android",
    status: "Released",
    rating: "4.5",
    downloads: "3M+"
  }
];

const upcomingGames = [
  {
    title: "Crystal Legends",
    description: "A magical match-3 puzzle game with RPG elements, where players collect and evolve mystical creatures.",
    image: "https://images.unsplash.com/photo-1642532788882-10e3f7b7e5e9?q=80&w=1974",
    genre: "Puzzle RPG",
    platform: "iOS & Android",
    releaseDate: "Q2 2024"
  },
  {
    title: "Cyber Revolution",
    description: "A cyberpunk action-adventure game set in a dystopian future where players fight against corrupt AI systems.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070",
    genre: "Action",
    platform: "iOS & Android",
    releaseDate: "Q3 2024"
  }
];

export default function Games() {
  return (
    <>
      <Navbar />
      <main className="relative bg-black min-h-screen pt-32">
        <div className="fixed inset-0 bg-gradient-to-b from-black via-[#641434]/20 to-black pointer-events-none"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Games
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] mt-2 pb-2">
                Unforgettable Gaming Experiences
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Discover our collection of innovative mobile games that combine stunning visuals, 
              engaging gameplay, and unforgettable stories.
            </p>
          </div>

          {/* Released Games */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Released Games
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {games.map((game, index) => (
                <div key={index} className="group rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 hover:border-[#8B1F47]/30 transition-all duration-500 overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="relative w-full h-full transform-gpu">
                      <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        style={{ transformOrigin: 'center center' }}
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-all duration-700 group-hover:scale-110"
                        style={{ transformOrigin: 'center center' }}
                      ></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{game.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-500">★</span>
                        <span className="text-white">{game.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-6">{game.description}</p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <span className="px-3 py-1 rounded-full bg-[#641434]/40 text-[#D64B7F] text-sm">
                        {game.genre}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#641434]/40 text-[#D64B7F] text-sm">
                        {game.platform}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#641434]/40 text-[#D64B7F] text-sm">
                        {game.downloads} Downloads
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] text-white text-center font-semibold hover:opacity-90 transition-opacity"
                      >
                        App Store
                      </a>
                      <a
                        href="#"
                        className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] text-white text-center font-semibold hover:opacity-90 transition-opacity"
                      >
                        Google Play
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Games */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Coming Soon
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingGames.map((game, index) => (
                <div key={index} className="group rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 hover:border-[#8B1F47]/30 transition-all duration-500 overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="relative w-full h-full transform-gpu">
                      <Image
                        src={game.image}
                        alt={game.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        style={{ transformOrigin: 'center center' }}
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 transition-all duration-700 group-hover:scale-110"
                        style={{ transformOrigin: 'center center' }}
                      ></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">{game.title}</h3>
                      <span className="text-[#D64B7F] font-semibold">{game.releaseDate}</span>
                    </div>
                    <p className="text-gray-400 mb-6">{game.description}</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-3 py-1 rounded-full bg-[#641434]/40 text-[#D64B7F] text-sm">
                        {game.genre}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#641434]/40 text-[#D64B7F] text-sm">
                        {game.platform}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="max-w-2xl mx-auto text-center mb-24">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter to receive updates about new games, features, and exclusive content.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-black/30 border border-[#8B1F47]/30 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#8B1F47]"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
} 