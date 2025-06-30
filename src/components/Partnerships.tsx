import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Handshake, Users, Globe, Heart } from 'lucide-react';

export const Partnerships: React.FC = () => {
  const partners = [
    {
      name: 'Education First Foundation',
      description: 'Collaborative research on educational accessibility',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Youth Empowerment Network',
      description: 'Joint initiatives for student leadership development',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Community Care Alliance',
      description: 'Supporting underprivileged children through mentorship',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      name: 'Research & Development Collective',
      description: 'Data-driven insights for educational policy reform',
      icon: Handshake,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="scale">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <h2 className="text-5xl md:text-6xl font-black text-gray-900">
                Our 
                <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                  {' '}Partnerships
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working together with like-minded organizations to amplify our impact
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full mt-6"></div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.name} delay={index * 150} direction="up">
              <div className={`${partner.bgColor} rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group hover:-translate-y-2 border border-white/50 relative overflow-hidden h-full`}>
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <partner.icon size={28} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors flex-grow">
                    {partner.description}
                  </p>

                  {/* Connection Line Animation */}
                  <div className="mt-4">
                    <div className={`w-full h-1 bg-gradient-to-r ${partner.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={800} direction="scale">
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Handshake size={32} className="text-orange-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Stronger Together</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Through strategic partnerships, we're building a network of change-makers 
                committed to creating lasting impact in education and youth empowerment.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};