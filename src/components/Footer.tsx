import React from 'react';
import { Mail, Instagram, Facebook, Copyright, Heart, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-12">
          
          <div className="flex items-center justify-center mb-4">
          <img
            src="/insfora-2.png"
            alt="INSFORA Logo"
            className="w-40 h-auto drop-shadow-lg"
          />
        </div>
          
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <Heart size={20} className="animate-pulse" />
              <span className="text-lg">Together for Change. Together for Direction.</span>
              <Heart size={20} className="animate-pulse" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <a 
              href="mailto:team@insfora.in" 
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-1">Email Us</div>
                  <div className="text-lg font-semibold">team@insfora.in</div>
                </div>
              </div>
            </a>
            
            <a 
              href="https://www.instagram.com/weareinsfora/.ngo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Instagram size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-1">Follow Us</div>
                  <div className="text-lg font-semibold">@weareisnfora</div>
                </div>
              </div>
            </a>
            
            <a 
              href="https://www.facebook.com/weareinsfora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Facebook size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-1">Connect With Us</div>
                  <div className="text-lg font-semibold">@weareisnfora</div>
                </div>
              </div>
            </a>

            <button
              onClick={handleWhatsAppClick}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-blue-200 mb-1">Chat With Us</div>
                  <div className="text-lg font-semibold">WhatsApp</div>
                </div>
              </div>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="mb-8">
            <button
              onClick={() => scrollToSection('about-us')}
              className="text-blue-200 hover:text-white transition-colors duration-300 text-lg font-medium"
            >
              About Us
            </button>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-blue-200 mb-4">
              <div className="flex items-center gap-2">
                <Copyright size={16} />
                <span>All Rights Reserved © 2025</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-blue-400 rounded-full"></div>
              <div className="text-center">
                INSFORA is a non-profit, student-run initiative.
              </div>
            </div>

            {/* Femica India Attribution */}
            <div className="mb-6 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-white/20">
                <Heart size={16} className="text-orange-400" />
                <span className="text-sm font-medium">An Initiative by FEMICA India</span>
                <Heart size={16} className="text-orange-400" />
              </div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20">
                <Heart size={16} className="text-red-400 animate-pulse" />
                <span className="text-sm">Made with love by students, for students</span>
                <Heart size={16} className="text-red-400 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};