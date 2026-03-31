import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const STEPS = [
  {
    num: '01',
    icon: 'solar:chat-round-dots-linear',
    title: 'Inquiry & Consultation',
    desc: 'Share your requirements — product type, volume, destination, and compliance needs. Our trade specialists assess feasibility and market conditions.',
  },
  {
    num: '02',
    icon: 'solar:magnifer-linear',
    title: 'Sourcing & Verification',
    desc: 'We identify and verify suppliers using AI-powered analysis, quality audits, and compliance checks across our global network.',
  },
  {
    num: '03',
    icon: 'solar:document-text-linear',
    title: 'Facilitation & Contracts',
    desc: 'LEGADEAL acts as a trusted intermediary — securing contracts, protecting both parties, and managing documentation flow.',
  },
  {
    num: '04',
    icon: 'solar:shield-check-linear',
    title: 'Compliance & Registration',
    desc: 'We handle SABER, SFDA, and all Saudi regulatory registrations, ensuring every product meets import requirements before shipping.',
  },
  {
    num: '05',
    icon: 'solar:delivery-linear',
    title: 'Logistics & Delivery',
    desc: 'End-to-end logistics management including freight, customs clearance, cold-chain solutions, and real-time AI-tracked shipments.',
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-[30px]');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.process-fade');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="relative py-32 bg-white z-10" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 process-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out">
          <span className="font-mono text-xs tracking-[0.25em] text-brand-gold-dark uppercase font-medium">
            How We Work
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mt-5 leading-tight tracking-tight">
            From Inquiry to Delivery
          </h2>
          <p className="text-slate-500 text-base md:text-lg mt-6 max-w-xl mx-auto font-light leading-relaxed">
            A streamlined five-step process that ensures transparency, compliance, and efficiency at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-16">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`process-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-2 border-brand-gold flex items-center justify-center z-10 shadow-md hidden md:flex">
                  <span className="font-mono text-xs font-medium text-brand-gold-dark">{step.num}</span>
                </div>

                {/* Content */}
                <div className={`${i % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:col-start-2 md:pl-20'}`}>
                  <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                      <Icon icon={step.icon} className="text-brand-gold-dark text-xl" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 tracking-widest">{step.num}</span>
                  </div>
                  <h3 className="font-playfair text-xl md:text-2xl font-medium text-slate-900 tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
