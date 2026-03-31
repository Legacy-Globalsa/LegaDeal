import { useState, useEffect } from 'react';
import logo from '../assets/LegaDealLogo.png';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b border-slate-200/60 px-8 py-4 transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[30px]'
      } ${scrolled ? 'shadow-sm bg-white/95' : 'bg-slate-50/80'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="LEGADEAL" className="h-14 w-auto" />
        </div>
        <div className="flex items-center">
          <a
            href="#services"
            className="text-slate-500 hover:text-slate-900 font-normal text-sm tracking-wide transition-all duration-300 mr-6 hidden md:block"
          >
            Services
          </a>
          <a
            href="#commodities"
            className="text-slate-500 hover:text-slate-900 font-normal text-sm tracking-wide transition-all duration-300 mr-6 hidden md:block"
          >
            Commodities
          </a>
          <a
            href="#industries"
            className="text-slate-500 hover:text-slate-900 font-normal text-sm tracking-wide transition-all duration-300 mr-6 hidden lg:block"
          >
            Industries
          </a>
          <a
            href="#process"
            className="text-slate-500 hover:text-slate-900 font-normal text-sm tracking-wide transition-all duration-300 mr-6 hidden lg:block"
          >
            How It Works
          </a>
          <button
            onClick={onOpenModal}
            className="relative overflow-hidden group bg-brand-charcoal text-white px-7 py-2.5 rounded-full font-normal text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-400 hover:scale-[1.02] active:scale-[0.98] btn-shimmer"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </nav>
  );
}
