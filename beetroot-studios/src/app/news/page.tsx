"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';

const news = [
  {
    title: "Epic Quest Reaches 10 Million Downloads",
    date: "March 15, 2024",
    category: "Milestone",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071",
    summary: "Our flagship RPG game Epic Quest has reached a significant milestone with 10 million downloads worldwide.",
    content: `We are thrilled to announce that Epic Quest has reached 10 million downloads globally! This achievement is a testament to our dedicated team and amazing community. To celebrate this milestone, we're launching a special in-game event with exclusive rewards for all players.

The journey has been incredible, and we're just getting started. Stay tuned for exciting new features and content updates coming soon.

Thank you to all our players for being part of this amazing journey!`
  },
  {
    title: "Introducing Space Commander: Our Latest Strategy Game",
    date: "March 10, 2024",
    category: "Game Launch",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1974",
    summary: "Beetroot Studios launches Space Commander, an innovative space strategy game for mobile platforms.",
    content: `We're excited to announce the launch of Space Commander, our latest strategy game that takes players on an epic journey through space. With stunning graphics, engaging gameplay, and deep strategic elements, Space Commander offers a fresh take on the mobile strategy genre.

Key Features:
- Dynamic space battles
- Fleet management system
- Alliance mechanics
- Regular content updates

Download now on the App Store and Google Play!`
  },
  {
    title: "Beetroot Studios Expands Development Team",
    date: "March 5, 2024",
    category: "Company News",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070",
    summary: "Our studio continues to grow with the addition of talented developers and artists to our team.",
    content: `As part of our ongoing expansion, we're excited to welcome new talented individuals to the Beetroot Studios family. This growth allows us to work on more exciting projects and deliver even better gaming experiences to our players.

Our new team members bring expertise in:
- Game design
- 3D modeling
- UI/UX design
- Backend development

We're always looking for passionate individuals to join our team. Check out our careers page for current opportunities!`
  },
  {
    title: "Upcoming Game Preview: Crystal Legends",
    date: "March 1, 2024",
    category: "Preview",
    image: "https://images.unsplash.com/photo-1642532788882-10e3f7b7e5e9?q=80&w=1974",
    summary: "Get a first look at our upcoming puzzle RPG game, Crystal Legends, launching in Q2 2024.",
    content: `We're excited to give you a sneak peek at Crystal Legends, our upcoming puzzle RPG that combines match-3 gameplay with deep RPG elements. Set in a magical world filled with mystical creatures, players will collect and evolve their team while solving increasingly challenging puzzles.

Features to look forward to:
- Unique match-3 combat system
- Creature collection and evolution
- PvP tournaments
- Guild system

Stay tuned for more updates and the official launch date!`
  }
];

export default function News() {
  return (
    <>
      <Navbar />
      <main className="relative bg-black min-h-screen pt-32">
        <div className="fixed inset-0 bg-gradient-to-b from-black via-[#641434]/20 to-black pointer-events-none"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Latest News
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] mt-2 pb-2">
                Stay Up to Date
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Keep up with the latest updates, announcements, and behind-the-scenes content from Beetroot Studios.
            </p>
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {news.map((item, index) => (
              <div key={index} className="group rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 hover:border-[#8B1F47]/30 transition-all duration-500 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <div className="relative w-full h-full transform-gpu">
                    <Image
                      src={item.image}
                      alt={item.title}
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
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#641434]/40 text-[#D64B7F] text-sm">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {item.summary}
                  </p>
                  <div className="space-y-4 text-gray-400">
                    {item.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="max-w-2xl mx-auto text-center mb-24">
            <h2 className="text-4xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-400 mb-8">
              Get the latest news and updates delivered directly to your inbox.
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

          {/* Social Media Section */}
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-white mb-6">
              Follow Us
            </h2>
            <p className="text-gray-400 mb-8">
              Stay connected with us on social media for daily updates and behind-the-scenes content.
            </p>
            <div className="flex justify-center gap-6">
              {[
                { platform: "Twitter", icon: "𝕏", url: "https://twitter.com/beetrootstudios" },
                { platform: "Instagram", icon: "📸", url: "https://instagram.com/beetrootstudios" },
                { platform: "LinkedIn", icon: "in", url: "https://linkedin.com/company/beetrootstudios" },
                { platform: "YouTube", icon: "▶️", url: "https://youtube.com/beetrootstudios" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 