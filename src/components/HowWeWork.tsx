import React from 'react';
import { BarChart3, Search, Users, Share2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const HowWeWork: React.FC = () => {
  const steps = [
    { icon: Search, title: 'Research', description: 'Local surveys and community analysis' },
    { icon: Users, title: 'Engage', description: 'Direct work with children and families' },
    { icon: BarChart3, title: 'Analyze', description: 'Data-driven insights and findings' },
    { icon: Share2, title: 'Share', description: 'Collaborate with institutions and leaders' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <div className="relative">
                  <BarChart3 size={120} className="text-blue-400 mx-auto mb-8" />
                  <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl rounded-full animate-pulse"></div>
                </div>
                
                {/* Process Flow */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {steps.map((step, index) => (
                    <div key={step.title} className="text-center group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                        <step.icon size={20} className="text-white" />
                      </div>
                      <div className="text-white/80 text-sm font-medium">{step.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="text-white">
            <ScrollReveal direction="right">
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                Driven by 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {' '}Ground Truth
                </span>
                . Built on Research.
              </h2>
            </ScrollReveal>
            
            <div className="space-y-8">
              <ScrollReveal delay={200} direction="right">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <p className="text-xl text-blue-100 leading-relaxed">
                    We conduct local surveys and community-based research across schools, parents, and children to identify real gaps in access and quality of education.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400} direction="right">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <p className="text-xl text-blue-100 leading-relaxed">
                    These findings are shared with government stakeholders, education leaders, and local institutions to drive informed support where it matters most.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={600} direction="scale">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 shadow-2xl">
                  <p className="text-xl font-bold text-white">
                    We believe data backed by empathy is the most powerful force for social change.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};