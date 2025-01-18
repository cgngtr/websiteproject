"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

const benefits = [
  {
    title: "Flexible Work Environment",
    description: "Work from home options and flexible hours to maintain work-life balance",
    icon: "🏠"
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health insurance coverage for you and your family",
    icon: "🏥"
  },
  {
    title: "Professional Development",
    description: "Training opportunities and conference attendance support",
    icon: "📚"
  },
  {
    title: "Game Library",
    description: "Access to a vast library of games for research and inspiration",
    icon: "🎮"
  },
  {
    title: "Team Activities",
    description: "Regular team building events and social activities",
    icon: "🎉"
  },
  {
    title: "Performance Bonus",
    description: "Annual performance-based bonuses and profit sharing",
    icon: "💰"
  }
];

const positions = [
  {
    title: "Senior Game Developer",
    department: "Development",
    location: "Istanbul, Turkey",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for an experienced game developer to join our core development team.",
    requirements: [
      "Strong experience with Unity or Unreal Engine",
      "Proficiency in C++ and C#",
      "Experience in mobile game development",
      "Strong problem-solving skills",
      "Excellent team collaboration abilities"
    ]
  },
  {
    title: "Game Designer",
    department: "Design",
    location: "Istanbul, Turkey",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our design team to create engaging and innovative game mechanics.",
    requirements: [
      "Previous experience in game design",
      "Strong understanding of player psychology",
      "Experience with game design tools",
      "Excellent analytical skills",
      "Creative problem-solving abilities"
    ]
  },
  {
    title: "3D Artist",
    department: "Art",
    location: "Istanbul, Turkey",
    type: "Full-time",
    experience: "3+ years",
    description: "Create stunning 3D models and animations for our upcoming games.",
    requirements: [
      "Proficiency in Maya, Blender, or similar tools",
      "Strong portfolio demonstrating 3D modeling skills",
      "Experience in game art creation",
      "Knowledge of PBR workflows",
      "Understanding of optimization techniques"
    ]
  }
];

export default function Careers() {
  return (
    <>
      <Navbar />
      <main className="relative bg-black min-h-screen pt-32">
        <div className="fixed inset-0 bg-gradient-to-b from-black via-[#641434]/20 to-black pointer-events-none"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] mt-2 pb-2">
                Create the Future of Gaming
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We&apos;re always looking for talented individuals to join our team.
            </p>
          </div>

          {/* Why Join Us Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Why Join Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-8 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 hover:border-[#8B1F47]/30 transition-all duration-500">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div key={index} className="p-8 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10">
                  <div className="md:flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-[#D64B7F]">{position.department}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{position.location}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{position.type}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{position.experience}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-2 rounded-lg bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] text-white font-semibold hover:opacity-90 transition-opacity">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-400 mb-6">{position.description}</p>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Application Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Apply Online",
                  description: "Submit your application through our careers portal"
                },
                {
                  step: "2",
                  title: "Initial Review",
                  description: "Our HR team will review your application"
                },
                {
                  step: "3",
                  title: "Interviews",
                  description: "Technical and cultural fit interviews"
                },
                {
                  step: "4",
                  title: "Welcome Aboard",
                  description: "Join our team and start creating amazing games"
                }
              ].map((step, index) => (
                <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] flex items-center justify-center text-white font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center mb-24">
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions?
            </h2>
            <p className="text-gray-400 mb-8">
              If you have any questions about our open positions or the application process, 
              feel free to contact our HR team.
            </p>
            <a href="mailto:careers@beetrootstudios.com" className="text-[#D64B7F] hover:text-[#B82E63] transition-colors">
              careers@beetrootstudios.com
            </a>
          </div>
        </div>
      </main>
    </>
  );
} 