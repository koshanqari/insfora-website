import React from 'react';
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

function App() {
  return (
    <div className="min-h-screen">
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

console.log(import.meta.env);
console.log('ENDPOINT:', import.meta.env.VITE_GS_ENDPOINT);

export default App;