"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

const contactOptions = [
  {
    title: "General Inquiries",
    description: "Questions about our company, games, or general feedback",
    icon: "💬"
  },
  {
    title: "Business",
    description: "Partnership opportunities and business collaborations",
    icon: "🤝"
  },
  {
    title: "Support",
    description: "Technical support and game-related assistance",
    icon: "🎮"
  }
];

const socialLinks = [
  {
    platform: "Twitter",
    url: "https://twitter.com/beetrootstudios",
    icon: "𝕏"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/company/beetrootstudios",
    icon: "in"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/beetrootstudios",
    icon: "📸"
  }
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="relative bg-black min-h-screen pt-32">
        <div className="fixed inset-0 bg-gradient-to-b from-black via-[#641434]/20 to-black pointer-events-none"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] mt-2 pb-2">
                Let&apos;s Connect
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Have questions or want to collaborate? We&apos;d love to hear from you. 
              Choose the most suitable contact option below or fill out our contact form.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {contactOptions.map((option, index) => (
              <div key={index} className="p-8 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 hover:border-[#8B1F47]/30 transition-all duration-500">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{option.title}</h3>
                <p className="text-gray-400 mb-6">{option.description}</p>
                <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] text-white font-semibold hover:opacity-90 transition-opacity">
                  Select
                </button>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto mb-24">
            <div className="p-8 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    className="px-4 py-2 rounded-lg bg-black/30 border border-[#8B1F47]/30 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#8B1F47]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="px-4 py-2 rounded-lg bg-black/30 border border-[#8B1F47]/30 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#8B1F47]"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-[#8B1F47]/30 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#8B1F47]"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-black/30 border border-[#8B1F47]/30 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#8B1F47] resize-none"
                ></textarea>
                <div className="flex justify-center">
                  <button type="submit" className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F] text-white font-semibold hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {/* Office Location */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10">
              <h3 className="text-xl font-bold text-white mb-6">Office Location</h3>
              <div className="space-y-4 text-gray-400">
                <p>Beetroot Studios</p>
                <p>Maslak, Istanbul</p>
                <p>Turkey</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
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

          {/* FAQ Section */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "How can I report a bug?",
                  answer: "You can report bugs through our support portal or by selecting the 'Support' option in our contact form above."
                },
                {
                  question: "Do you offer internship opportunities?",
                  answer: "Yes! Please visit our Careers page for current internship openings and application details."
                },
                {
                  question: "How can I collaborate with Beetroot Studios?",
                  answer: "For business collaborations, please select the 'Business' option in our contact form or reach out via email."
                },
                {
                  question: "Where can I find your press kit?",
                  answer: "Our press kit is available for download on our website's media section."
                }
              ].map((faq, index) => (
                <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10">
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 