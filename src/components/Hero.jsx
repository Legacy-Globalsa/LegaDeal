import { useEffect, useRef, useState } from 'react';
import HeroCanvas from './HeroCanvas';
import FloatingCards from './FloatingCards';

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#_';

function useScrambleText(finalString, duration, delay) {
  const [text, setText] = useState(finalString);
  useEffect(() => {
    const startDelay = setTimeout(() => {
      const start = Date.now();
      const interval = setInterval(() => {
        const progress = (Date.now() - start) / duration;
        if (progress >= 1) {
          setText(finalString);
          clearInterval(interval);
          return;
        }
        setText(
          finalString
            .split('')
            .map((char, idx) => {
              if (char === ' ' || char === '\n') return char;
              if (progress > idx / finalString.length) return char;
              return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
            })
            .join('')
        );
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startDelay);
  }, [finalString, duration, delay]);
  return text;
}

export default function Hero({ onOpenModal }) {
  const [mounted, setMounted] = useState(false);
  const contentRef = useRef(null);
  const title1 = useScrambleText('Global Trading', 1000, 300);
  const title2 = useScrambleText('Excellence', 1200, 500);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300);

    const handleScroll = () => {
      if (contentRef.current && window.scrollY < window.innerHeight) {
        contentRef.current.style.transform = `translateY(${window.scrollY * -0.25}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const anim = (delay) =>
    `transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[25px]'
    }`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroCanvas />
      <FloatingCards />

      <div ref={contentRef} className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6">
        {/* Badge */}
        <div className={`${anim()} delay-100`}>
          <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/80 shadow-sm rounded-full px-5 py-2 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-slate-500 font-normal">
              Saudi Market Access
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className={`${anim()} delay-300 font-playfair text-6xl md:text-8xl lg:text-9xl font-medium text-slate-900 leading-[0.95] tracking-tight mt-8`}>
          <span>{title1}</span>
          <br />
          <span className="bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-dark bg-clip-text text-transparent animate-gradient-shift">
            {title2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`${anim()} delay-500 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mt-8 leading-relaxed font-light`}>
          We enable seamless business transactions across borders, connecting suppliers, buyers, and
          manufacturers with reliability, transparency, and AI-driven innovation.
        </p>

        {/* CTAs */}
        <div className={`${anim()} delay-700 flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center`}>
          <button
            onClick={onOpenModal}
            className="btn-shimmer bg-brand-gold text-brand-charcoal px-10 py-4 rounded-full font-medium text-sm md:text-base tracking-wide shadow-md hover:shadow-lg hover:bg-brand-gold-dark transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
          >
            Start Trading
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/50 backdrop-blur-md border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white px-10 py-4 rounded-full font-normal text-sm md:text-base shadow-sm transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Services <span className="ml-1 opacity-50">↓</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-10 left-1/2 transition-opacity duration-1000 ease-in-out animate-float-indicator flex flex-col items-center ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
        <span className="font-mono text-xs tracking-[0.4em] text-slate-400 mt-3 uppercase">Scroll</span>
      </div>
    </section>
  );
}
