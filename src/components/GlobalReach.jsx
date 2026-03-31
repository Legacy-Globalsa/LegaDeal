import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const REGIONS = [
  { name: 'Asia Pacific', flag: '🌏', detail: 'Seafood, Electronics, FMCG' },
  { name: 'Africa', flag: '🌍', detail: 'Fish, Agriculture, Commodities' },
  { name: 'Europe', flag: '🌎', detail: 'Industrial Goods, Machinery' },
  { name: 'GCC Region', flag: '🇸🇦', detail: 'Oil & Gas, Dates, Petrochemicals' },
];

const TRUST_ITEMS = [
  { icon: 'solar:verified-check-linear', text: 'SABER & SFDA Certified Processes' },
  { icon: 'solar:lock-linear', text: 'Secured Documentation Flow' },
  { icon: 'solar:scale-linear', text: 'Ethical & Transparent Operations' },
  { icon: 'solar:hand-shake-linear', text: 'Intermediary Buyer/Seller Protection' },
  { icon: 'solar:cpu-linear', text: 'AI-Enhanced Verification' },
  { icon: 'solar:global-linear', text: 'Multi-Continent Network' },
];

export default function GlobalReach() {
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
    const els = sectionRef.current?.querySelectorAll('.global-fade');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 bg-slate-50 z-10" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Global Reach */}
          <div>
            <div className="global-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out">
              <span className="font-mono text-xs tracking-[0.25em] text-brand-gold-dark uppercase font-medium">
                Global Presence
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-medium text-slate-900 mt-5 leading-tight tracking-tight">
                Connected Across<br />Continents
              </h2>
              <p className="text-slate-500 text-base mt-6 font-light leading-relaxed max-w-lg">
                LEGADEAL connects suppliers, buyers, manufacturers, and distributors worldwide — with Saudi Arabia as our strategic hub for regional trade.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80"
                alt="Global shipping and logistics"
                className="w-full aspect-[16/10] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {REGIONS.map((region, i) => (
                    <div
                      key={i}
                      className="global-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-3 text-center"
                      style={{ transitionDelay: `${(i + 2) * 100}ms` }}
                    >
                      <div className="text-xl mb-1">{region.flag}</div>
                      <div className="text-white text-xs font-medium">{region.name}</div>
                      <div className="text-white/60 text-[10px] mt-0.5 font-light">{region.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Trust Indicators */}
          <div>
            <div className="global-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out" style={{ transitionDelay: '100ms' }}>
              <span className="font-mono text-xs tracking-[0.25em] text-brand-gold-dark uppercase font-medium">
                Built on Trust
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-medium text-slate-900 mt-5 leading-tight tracking-tight">
                Compliance &<br />Transparency
              </h2>
              <p className="text-slate-500 text-base mt-6 font-light leading-relaxed">
                Every transaction is backed by verified documentation, strict Saudi compliance protocols, and ethical business practices that protect all parties.
              </p>
            </div>

            <div className="mt-10 space-y-3">
              {TRUST_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="global-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out group flex items-center gap-4 bg-white border border-slate-200/80 rounded-xl p-4 hover:border-brand-gold/30 hover:shadow-sm transition-colors duration-300"
                  style={{ transitionDelay: `${(i + 3) * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Icon icon={item.icon} className="text-brand-gold-dark text-lg" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
