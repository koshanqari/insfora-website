import React from 'react';
import { Lightbulb, Heart, Zap } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhatWeStandFor: React.FC = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Inspire',
      description: 'We spark curiosity and confidence through teaching and expression.',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-yellow-50',
      shadowColor: 'shadow-yellow-200/50'
    },
    {
      icon: Heart,
      title: 'Support',
      description: 'We show up for children emotionally and academically — like a peer, not a superior.',
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-50',
      shadowColor: 'shadow-red-200/50'
    },
    {
      icon: Zap,
      title: 'Empower',
      description: 'We help them think, speak, and dream on their own terms.',
      color: 'from-purple-400 to-indigo-500',
      bgColor: 'bg-purple-50',
      shadowColor: 'shadow-purple-200/50'
    }
  ];

  return (
    <section id="what-we-stand-for" className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8B5CF6 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
            
              <h2 className="text-5xl md:text-6xl font-black text-gray-900">
                INSFORA = 
                <span className="bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
                  {' '}Inspire. Support. Empower.
                </span>
              </h2>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 200} direction="up">
              <div className={`${pillar.bgColor} rounded-3xl p-8 shadow-xl ${pillar.shadowColor} hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50`}>
                <div className="relative mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${pillar.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <pillar.icon size={40} className="text-white" />
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-gray-700 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                  {pillar.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 flex justify-center">
                  <div className={`w-16 h-1 bg-gradient-to-r ${pillar.color} rounded-full group-hover:w-24 transition-all duration-500`}></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive Connection Lines */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <svg className="w-full h-32 opacity-20" viewBox="0 0 800 200">
            <path
              d="M100 100 Q400 50 700 100"
              stroke="url(#gradient1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M100 100 Q400 150 700 100"
              stroke="url(#gradient2)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="50%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};