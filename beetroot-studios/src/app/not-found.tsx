"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-black flex items-center justify-center">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-[#641434]/20 to-black pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="space-y-8 p-8 rounded-xl bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10">
          <h1 className="text-9xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B1F47] via-[#B82E63] to-[#D64B7F]">
              404
            </span>
          </h1>
          
          <h2 className="text-3xl font-semibold text-white mb-6">
            Sayfa Bulunamadı
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönerek devam edebilirsiniz.
          </p>
          
          <Link 
            href="/"
            className="inline-block group relative px-8 py-3 rounded-lg overflow-hidden bg-gradient-to-br from-[#641434]/40 to-black/60 backdrop-blur-sm border border-[#8B1F47]/10 hover:border-[#8B1F47]/30 transition-all duration-500 hover:shadow-lg hover:shadow-[#8B1F47]/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B1F47] to-[#641434] transition-transform duration-300 group-hover:scale-105"></div>
            <span className="relative text-white text-lg font-semibold z-10">Ana Sayfaya Dön</span>
          </Link>
        </div>
      </div>
    </main>
  );
} 