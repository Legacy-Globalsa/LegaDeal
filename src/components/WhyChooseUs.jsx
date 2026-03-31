import { useEffect, useRef, useState } from 'react';

const STEPS = [
  {
    tag: 'Advantage 01',
    title: 'Global Network of Trust',
    desc: 'Access a curated, verified network of trusted suppliers and buyers across Asia, Africa, Europe, and the GCC. We bridge the gap between continents.',
    bg: 'REACH',
  },
  {
    tag: 'Advantage 02',
    title: 'Ironclad Compliance',
    desc: "Operating ethically with a secured documentation flow. Our deep expertise in Saudi standards guarantees your goods pass customs without costly delays.",
    bg: 'SECURE',
  },
  {
    tag: 'Advantage 03',
    title: 'Flawless Execution',
    desc: 'From initial sourcing to final delivery, our AI-enhanced accuracy and transparent intermediary protection ensure faster execution and peace of mind.',
    bg: 'SPEED',
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      if (progress < 0.33) setActiveStep(0);
      else if (progress < 0.66) setActiveStep(1);
      else setActiveStep(2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="why-choose" className="relative h-[300vh] bg-slate-50" ref={sectionRef}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Word */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[20vw] sm:text-[200px] font-medium text-slate-900/[0.02] pointer-events-none select-none z-0 transition-all duration-700 tracking-tighter">
          {STEPS[activeStep].bg}
        </div>

        <div className="w-full max-w-3xl px-6 relative z-10 text-center">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 transition-all duration-[600ms] ease-out ${
                i === activeStep
                  ? 'opacity-100 translate-y-0'
                  : i < activeStep
                  ? 'opacity-0 -translate-y-[60px] pointer-events-none'
                  : 'opacity-0 translate-y-[60px] pointer-events-none'
              }`}
              style={{ transform: i === activeStep ? 'translateY(-50%)' : undefined }}
            >
              <span className="font-mono text-xs tracking-[0.2em] text-brand-gold-dark uppercase mb-5 block font-medium">
                {step.tag}
              </span>
              <h3 className="font-playfair text-4xl md:text-6xl font-medium text-slate-900 mb-6 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed font-light mx-auto max-w-xl">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
