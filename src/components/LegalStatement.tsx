import React from 'react';
import { Shield, CheckCircle, Users, FileText } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const LegalStatement: React.FC = () => {
  const principles = [
    { icon: Shield, title: 'Ethical', description: 'All activities conducted with highest ethical standards' },
    { icon: CheckCircle, title: 'Transparent', description: 'Open processes and clear communication' },
    { icon: Users, title: 'Student-Led', description: 'Driven by passionate young changemakers' },
    { icon: FileText, title: 'Compliant', description: 'Following all regulatory guidelines' }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 shadow-xl border border-white/50">
                <div className="relative mb-8">
                  <Shield size={120} className="text-green-600 mx-auto" />
                  <div className="absolute -inset-8 bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-2xl rounded-full animate-pulse"></div>
                </div>
                
                {/* Principles Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {principles.map((principle, index) => (
                    <div key={principle.title} className="text-center group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                        <principle.icon size={20} className="text-white" />
                      </div>
                      <div className="text-gray-700 text-sm font-medium">{principle.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <div>
            <ScrollReveal direction="right">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Our Work is 
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {' '}Ethical, Transparent,
                </span>
                {' '}and Student-Led.
              </h2>
            </ScrollReveal>
            
            <div className="space-y-8">
              <ScrollReveal delay={200} direction="right">
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100 hover:shadow-lg transition-all duration-300">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    INSFORA is a youth-led nonprofit initiative registered under 
                    voluntary guidelines.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400} direction="right">
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our research efforts, educational sessions, and surveys are conducted 
                    with consent and shared with recognised institutions and public bodies.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={600} direction="scale">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 shadow-2xl">
                  <p className="text-xl font-bold text-white">
                    We uphold integrity, safety, and transparency in every activity we do.
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