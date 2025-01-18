"use client";

import Image from 'next/image';
import Navbar from '@/components/Navbar';

const stats = [
  { number: "50M+", label: "Total Downloads" },
  { number: "180+", label: "Employees" },
  { number: "4.8", label: "Average Game Rating" },
  { number: "25+", label: "Active Countries" }
];

const values = [
  {
    title: "Player-Centric",
    description: "We prioritize our players' experience in every decision we make. We continuously gather feedback and improve our games accordingly."
  },
  {
    title: "Innovation",
    description: "We follow the latest technologies and trends in the gaming industry, developing new ideas and mechanics."
  },
  {
    title: "Quality",
    description: "We aim for the highest quality standards in every project, striving to provide our players with a flawless experience."
  },
  {
    title: "Sustainability",
    description: "We focus on sustainable growth for long-term success, using our resources wisely."
  },
  {
    title: "Diversity",
    description: "We believe that bringing together different perspectives and talents leads to better games."
  },
  {
    title: "Community",
    description: "We value building a strong player community and maintaining constant interaction with them."
  }
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="relative bg-black min-h-screen pt-32">
        <div className="fixed inset-0 bg-gradient-to-b from-black via-[#641434]/20 to-black pointer-events-none"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Us
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] mt-2 pb-2">
                Shaping the Future of Gaming
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Since 2018, we&apos;ve been developing innovative and high-quality mobile games. 
              Our mission is to create unforgettable experiences for players and make our mark in the global gaming market.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 hover:border-[#8B1F47]/30 transition-all duration-500">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    What started as a small team in Istanbul in 2018 has grown into a global game studio. 
                    Our first game &ldquo;Epic Quest&rdquo; achieved great success on both App Store and Google Play.
                  </p>
                  <p>
                    Currently, with over 180 talented employees, we reach millions of players worldwide. 
                    With our experience in the mobile gaming market, we raise the bar with each project.
                  </p>
                  <p>
                    We&apos;re also conducting research and development in new areas like AR/VR technologies and blockchain gaming, 
                    aiming to shape the future of gaming experiences.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <div className="relative w-full h-full transform-gpu">
                  <Image
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070"
                    alt="Beetroot Studios Office"
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
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="p-8 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 hover:border-[#8B1F47]/30 transition-all duration-500">
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
                  description: "15+ years of gaming industry experience. Previous experience: Ubisoft, EA Games"
                },
                {
                  name: "Sarah Johnson",
                  role: "Creative Director",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
                  description: "10+ years of game design experience. Creative lead of award-winning games"
                },
                {
                  name: "Michael Chen",
                  role: "Technology Director",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1974",
                  description: "20+ years of software development experience. Unity and Unreal Engine expert"
                }
              ].map((member, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 hover:border-[#8B1F47]/30 transition-all duration-500">
                  <div className="aspect-square relative overflow-hidden">
                    <div className="relative w-full h-full transform-gpu">
                      <Image
                        src={member.image}
                        alt={member.name}
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
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#D64B7F] font-medium mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-white mb-12">Our Awards</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "2023 - Best Mobile Game Studio",
                "2022 - Best Strategy Game",
                "2021 - Best Breakthrough Studio",
                "2020 - Most Innovative Mobile Game"
              ].map((award, index) => (
                <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10">
                  <p className="text-white">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 