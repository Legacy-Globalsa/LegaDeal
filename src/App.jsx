
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Commodities from './components/Commodities';
import Industries from './components/Industries';
import Process from './components/Process';
import AIOperations from './components/AIOperations';
import GlobalReach from './components/GlobalReach';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="antialiased bg-slate-50 selection:bg-brand-gold/10 selection:text-slate-900 scroll-smooth">
      <div className="ambient-glow" />
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <Hero onOpenModal={() => setModalOpen(true)} />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Process />
      <GlobalReach />
      <Stats />
      <CTA onOpenModal={() => setModalOpen(true)} />
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default App;
