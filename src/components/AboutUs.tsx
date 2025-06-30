import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Users, Target, Heart, Lightbulb, Globe, BookOpen, Handshake, Zap } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const programs = [
    {
      icon: Target,
      title: 'Community Research Surveys',
      description: 'Led by youth. Backed by data. Our surveys spotlight ground realities that too often go unheard.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Learning Circles & Workshops',
      description: 'Safe spaces for exchange — where children, mentors, and educators learn together.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Handshake,
      title: 'Collaborations with Schools & NGOs',
      description: 'We support institutions with design, communication, research, and engagement solutions.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Volunteer & Leadership Tracks',
      description: 'We give passionate young people the tools and spaces to lead — both online and on-ground.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="about-us" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal direction="scale">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              About 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Us
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
        </ScrollReveal>

        {/* Who We Are Section */}
        <div className="mb-24">
          <ScrollReveal direction="left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Who We Are
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <ScrollReveal delay={200} direction="left">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Heart size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Youth-Led Initiative</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      INSFORA is a youth-led initiative, designed to empower young voices, unlock grassroots participation, and create equitable educational ecosystems.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} direction="right">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Globe size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We're not just a campaign — we're a community. Our name stands for Insight for Action, and our mission is rooted in collective impact.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={600} direction="scale">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl text-center">
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                Born from the vision of Femica India, INSFORA represents a new chapter: one where students, volunteers, and institutions come together to shape change — not wait for it.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* What We Do Section */}
        <div className="mb-24">
          <ScrollReveal direction="scale">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              What We Do
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200} direction="up">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 mb-12">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                We build platforms for young changemakers to take charge of real-world problems in education and community development. Our core programs include:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <ScrollReveal key={program.title} delay={index * 150} direction="up">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <program.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{program.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Our Roots Section */}
        <div className="mb-24">
          <ScrollReveal direction="scale">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
              Our Roots: Powered by 
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {' '}Femica India
              </span>
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={200} direction="left">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <p className="text-xl text-gray-700 leading-relaxed">
                  INSFORA began as a youth-driven extension of Femica India's commitment to social equity and community participation. What started as an internal research initiative under Femica has now evolved into a standalone platform — one that empowers young changemakers to lead, collaborate, and act.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} direction="right">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <p className="text-xl text-gray-700 leading-relaxed">
                  From offering strategic support to mentoring our founding team, Femica continues to anchor INSFORA's journey as an incubator and guiding force.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600} direction="scale">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl text-center">
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-white">
                    INSFORA may be led by youth, but it stands on the shoulders of Femica's experience.
                  </p>
                  <p className="text-xl text-orange-100">
                    INSFORA is one of Femica's flagship initiatives — built by students, scaled by community, and driven by purpose.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* How You Can Join Us Section */}
        <ScrollReveal direction="scale">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              How You Can Join Us
            </h2>
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Whether you're a student, a teacher, a volunteer, or a school — there's a place for you in this movement.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <button
                onClick={() => scrollToSection('be-a-volunteer')}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Users size={20} />
                Be a Volunteer
              </button>

              <button
                onClick={() => scrollToSection('collaborate-with-us')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Handshake size={20} />
                Collaborate with Us
              </button>

              <button
                onClick={() => scrollToSection('be-a-catalyst')}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Zap size={20} />
                Support Our Work
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};