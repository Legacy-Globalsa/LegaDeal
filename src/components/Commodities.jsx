import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const COMMODITIES = [
  {
    tag: 'Premium Seafood',
    title: 'Fish & Seafood Trading',
    desc: 'LEGADEAL imports and exports premium seafood from Asia, Africa, Europe, and GCC countries. We ensure cold-chain integrity, freshness certifications, and full SFDA compliance for every shipment.',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=800&q=80',
    icon: 'solar:water-linear',
    stats: [
      { label: 'Source Regions', value: '4+' },
      { label: 'Species Traded', value: '50+' },
    ],
    gradient: 'from-cyan-600 to-blue-700',
    accent: 'text-cyan-600',
    accentBg: 'bg-cyan-50 border-cyan-100',
  },
  {
    tag: 'Saudi Heritage',
    title: 'Premium Saudi Dates',
    desc: 'We export world-class Saudi dates globally, ensuring freshness, authenticity, and halal certification. From Ajwa to Sukkari, our dates meet the highest international standards.',
    image: 'https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=800&q=80',
    icon: 'solar:leaf-linear',
    stats: [
      { label: 'Date Varieties', value: '12+' },
      { label: 'Export Destinations', value: '30+' },
    ],
    gradient: 'from-amber-600 to-yellow-700',
    accent: 'text-amber-600',
    accentBg: 'bg-amber-50 border-amber-100',
  },
  {
    tag: 'Energy Sector',
    title: 'Oil & Gas Commodities',
    desc: 'LEGADEAL trades in selected energy commodities with strict compliance and verified suppliers. Our deep sector expertise ensures transparent, secure, and regulation-compliant transactions.',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80',
    icon: 'solar:fire-linear',
    stats: [
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Verified Suppliers', value: '40+' },
    ],
    gradient: 'from-slate-700 to-slate-900',
    accent: 'text-slate-700',
    accentBg: 'bg-slate-100 border-slate-200',
  },
];

export default function Commodities() {
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
    const els = sectionRef.current?.querySelectorAll('.commodity-fade');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="commodities" className="relative py-32 bg-white z-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 commodity-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out">
          <span className="font-mono text-xs tracking-[0.25em] text-brand-gold-dark uppercase font-medium">
            Key Commodities
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mt-5 leading-tight tracking-tight">
            What We Trade
          </h2>
          <p className="text-slate-500 text-base md:text-lg mt-6 max-w-xl mx-auto font-light leading-relaxed">
            Specializing in high-demand sectors with verified sourcing, cold-chain logistics, and full regulatory compliance.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {COMMODITIES.map((item, i) => (
            <div
              key={i}
              className={`commodity-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className={`relative group ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-20`} />
                </div>
                {/* Floating stats */}
                <div className="absolute -bottom-4 left-4 right-4 md:left-6 md:right-6 flex gap-3">
                  {item.stats.map((stat, si) => (
                    <div
                      key={si}
                      className="flex-1 bg-white/95 backdrop-blur-lg rounded-xl border border-slate-200/80 shadow-lg p-4 text-center"
                    >
                      <div className="font-mono text-xl md:text-2xl font-medium text-slate-900 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 font-light">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} pt-6 lg:pt-0`}>
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 border ${item.accentBg} mb-5`}>
                  <Icon icon={item.icon} className={`${item.accent} text-sm`} />
                  <span className={`font-mono text-xs tracking-[0.15em] uppercase ${item.accent} font-medium`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-playfair text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed font-light mb-6">
                  {item.desc}
                </p>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-brand-gold-dark transition-colors group/btn"
                >
                  Learn More
                  <Icon icon="solar:arrow-right-linear" className="text-lg transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
