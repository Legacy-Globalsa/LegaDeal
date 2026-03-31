import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const SERVICES = [
  {
    icon: 'solar:earth-linear',
    iconBg: 'bg-amber-50 border-amber-100',
    iconColor: 'text-brand-gold-dark',
    title: 'International Trading',
    desc: 'We source high-quality products from trusted global manufacturers and deliver them securely to Saudi Arabia and international markets.',
    image: 'https://academy.iccwbo.org/wp-content/uploads/2024/11/International_Trade_Overview-2.jpg',
  },
  {
    icon: 'solar:hand-shake-linear',
    iconBg: 'bg-amber-50 border-amber-100',
    iconColor: 'text-amber-600',
    title: 'Intermediary Services',
    desc: 'A specialized facilitation role that protects both buyers and sellers, ensuring smooth, fair, transparent, and secure cross-border transactions.',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80',
  },
  {
    icon: 'solar:routing-2-linear',
    iconBg: 'bg-emerald-50 border-emerald-100',
    iconColor: 'text-emerald-600',
    title: 'Import & Export Mgmt',
    desc: 'Complete end-to-end trade services including complex logistics, efficient customs clearance, and rigorous quality control protocols.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80',
  },
  {
    icon: 'solar:shield-check-linear',
    iconBg: 'bg-indigo-50 border-indigo-100',
    iconColor: 'text-indigo-600',
    title: 'Saudi Compliance',
    desc: "We navigate Saudi Arabia's strict regulatory landscape, ensuring all imported goods meet requirements including SABER and SFDA registration.",
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
  },
  {
    icon: 'solar:box-linear',
    iconBg: 'bg-orange-50 border-orange-100',
    iconColor: 'text-orange-600',
    title: 'Global Commodities',
    desc: 'Expert trading in high-demand sectors including premium seafood, world-class Saudi dates, and strictly compliant oil & gas commodities.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
  {
    icon: 'solar:cpu-linear',
    iconBg: 'bg-slate-100 border-slate-200',
    iconColor: 'text-slate-700',
    title: 'AI-Powered Operations',
    desc: 'Innovation is our advantage. We utilize artificial intelligence to analyze global markets, verify suppliers, and optimize shipment tracking.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
  },
];

export default function Services() {
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
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll('.fade-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSpotlight(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }

  return (
    <section id="services" className="relative py-32 bg-slate-50 z-10" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 fade-up opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out">
          <span className="font-mono text-xs tracking-[0.25em] text-brand-gold-dark uppercase font-medium">
            Our Core Services
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mt-5 leading-tight tracking-tight">
            Comprehensive Trade
            <br />& Facilitation Solutions
          </h2>
          <p className="text-slate-500 text-base md:text-lg mt-6 max-w-xl mx-auto font-light leading-relaxed">
            Connecting global markets with Saudi Arabia through trusted partnerships, strict
            compliance, and innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="spotlight-card group bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_10px_rgba(15,23,42,0.02)] transition-all duration-500 hover:border-slate-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,23,42,0.06)] fade-up opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseMove={handleSpotlight}
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="spotlight-content p-8">
                <div className={`icon-container w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${s.iconBg}`}>
                  <Icon icon={s.icon} className={`${s.iconColor} text-2xl`} />
                </div>
                <h3 className="text-slate-900 font-medium text-lg md:text-xl mb-3 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
