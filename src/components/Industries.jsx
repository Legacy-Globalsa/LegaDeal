import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const INDUSTRIES = [
  {
    name: 'Fish & Seafood',
    icon: 'solar:water-linear',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80',
    color: 'from-cyan-500/80 to-blue-600/80',
  },
  {
    name: 'Dates & Agriculture',
    icon: 'solar:leaf-linear',
    image: 'https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=600&q=80',
    color: 'from-amber-500/80 to-yellow-600/80',
  },
  {
    name: 'Oil & Gas',
    icon: 'solar:fire-linear',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80',
    color: 'from-slate-600/80 to-slate-800/80',
  },
  {
    name: 'FMCG',
    icon: 'solar:cart-large-minimalistic-linear',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80',
    color: 'from-emerald-500/80 to-green-600/80',
  },
  {
    name: 'Electronics',
    icon: 'solar:cpu-bolt-linear',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    color: 'from-indigo-500/80 to-purple-600/80',
  },
  {
    name: 'Retail & Hospitality',
    icon: 'solar:shop-linear',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    color: 'from-rose-500/80 to-pink-600/80',
  },
  {
    name: 'Construction Materials',
    icon: 'solar:buildings-2-linear',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    color: 'from-orange-500/80 to-red-600/80',
  },
  {
    name: 'Petrochemicals',
    icon: 'solar:test-tube-linear',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    color: 'from-teal-500/80 to-cyan-600/80',
  },
  {
    name: 'Industrial Manufacturing',
    icon: 'solar:settings-linear',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80',
    color: 'from-zinc-500/80 to-zinc-700/80',
  },
];

export default function Industries() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-[30px]', 'scale-95');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll('.industry-fade');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="industries" className="relative py-32 bg-slate-50 z-10" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 industry-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out">
          <span className="font-mono text-xs tracking-[0.25em] text-brand-gold-dark uppercase font-medium">
            Sectors We Serve
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mt-5 leading-tight tracking-tight">
            Industries & Markets
          </h2>
          <p className="text-slate-500 text-base md:text-lg mt-6 max-w-2xl mx-auto font-light leading-relaxed">
            From seafood and agriculture to oil, gas, and industrial manufacturing — LEGADEAL operates across nine high-demand sectors with deep market expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
          {INDUSTRIES.map((item, i) => (
            <div
              key={i}
              className="industry-fade opacity-0 translate-y-[30px] scale-95 transition-all duration-[800ms] ease-out group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} transition-opacity duration-500 group-hover:opacity-90`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
                <div className="flex items-center gap-2.5 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <Icon icon={item.icon} className="text-white text-lg" />
                  </div>
                  <h3 className="text-white font-medium text-sm md:text-base tracking-tight">
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
