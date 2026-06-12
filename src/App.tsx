/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AuthorityBand } from './components/AuthorityBand';
import { BentoFeatures } from './components/BentoFeatures';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-gray-200 selection:bg-primary/30 selection:text-white pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <AuthorityBand />
      <BentoFeatures />
      <Services />
      <Testimonials />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
