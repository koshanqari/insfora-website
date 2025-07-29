import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { WhatWeStandFor } from './components/WhatWeStandFor';
import { HowWeWork } from './components/HowWeWork';
import { OurAlignment } from './components/OurAlignment';
import { Partnerships } from './components/Partnerships';
import { AboutUs } from './components/AboutUs';
import { BeAVolunteer } from './components/BeAVolunteer';
import { CollaborateWithUs } from './components/CollaborateWithUs';
import { BeACatalyst } from './components/BeACatalyst';
import { LegalStatement } from './components/LegalStatement';
import { Footer } from './components/Footer';
import { SurveyPopup } from './components/SurveyPopup';
import { CampusAmbassador } from './components/CampusAmbassador';
import { testSupabaseConnection } from './utils/testSupabase';

function MainPage() {
  return (
    <div className="min-h-screen">
      {/* CTA for Campus Ambassador Program */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 md:bottom-8 md:right-8 md:left-auto md:justify-end">
        <Link
          to="/campus_ambassador"
          className="px-4 py-2 text-sm md:px-6 md:py-4 md:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg md:rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          <span className="hidden md:inline">Become a Campus Ambassador</span>
          <span className="md:hidden">Campus Ambassador</span>
        </Link>
      </div>
      <Hero />
      <WhoWeAre />
      <WhatWeStandFor />
      <HowWeWork />
      <OurAlignment />
      <Partnerships />
      <AboutUs />
      <BeAVolunteer />
      <CollaborateWithUs />
      <BeACatalyst />
      <LegalStatement />
      <Footer />
      <SurveyPopup />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/campus_ambassador" element={<CampusAmbassador />} />
      </Routes>
    </Router>
  );
}

console.log('Environment variables:', {
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Present' : 'Missing'
});

// Test Supabase connection on app load
testSupabaseConnection();

export default App;