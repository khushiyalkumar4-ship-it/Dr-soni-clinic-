/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromotionsBanner from './components/PromotionsBanner';
import ClinicShowcase from './components/ClinicShowcase';
import Services from './components/Services';
import Wellness from './components/Wellness';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PromotionsBanner />
        <Hero />
        <ClinicShowcase />
        <Services />
        <Wellness />
        <About />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}

