import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Users, Heart, Zap } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="scale">
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-16 text-center leading-tight">
            We don't just imagine a 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> better tomorrow </span>
            we're building it today
          </h2>
        </ScrollReveal>
        
        <div className="max-w-5xl mx-auto space-y-12">
          <ScrollReveal delay={200} direction="left">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    What began as a shared concern among a few students became a growing movement — a belief that education should never be a luxury.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400} direction="right">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    INSFORA brings together young minds who act with empathy and purpose — turning intention into impact, and compassion into change.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={600} direction="scale">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl text-center group hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  This is not a charity. This is a movement.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};