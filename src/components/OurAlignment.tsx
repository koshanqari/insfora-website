import React from 'react';
import { BookOpen, Users, Globe } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const OurAlignment: React.FC = () => {
  const sdgs = [
    {
      icon: BookOpen,
      number: 4,
      title: 'Quality Education',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      description: 'Ensuring inclusive and equitable quality education'
    },
    {
      icon: Users,
      number: 10,
      title: 'Reduced Inequalities',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Reducing inequality within and among countries'
    },
    {
      icon: Globe,
      number: 17,
      title: 'Partnerships for the Goals',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Strengthening global partnerships for sustainable development'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              We Align With 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Global Goals
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {sdgs.map((sdg, index) => (
            <ScrollReveal key={sdg.number} delay={index * 200} direction="up">
              <div className={`${sdg.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden`}>
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sdg.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 bg-gradient-to-br ${sdg.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <sdg.icon size={40} className="text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-gray-700">{sdg.number}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm font-semibold text-gray-500 mb-2">
                    SDG {sdg.number}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {sdg.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {sdg.description}
                  </p>

                  {/* Progress Bar Animation */}
                  <div className="mt-6">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`bg-gradient-to-r ${sdg.color} h-2 rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600} direction="scale">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 text-center">
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
              We act locally but align globally — our initiatives reflect the UN's 
              shared vision for 
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}equitable, inclusive, and connected growth
              </span>
              .
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};