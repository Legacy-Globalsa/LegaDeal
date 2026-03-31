import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

export default function CTA({ onOpenModal }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-[30px]');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 md:py-40 relative z-10 overflow-hidden bg-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-6 opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-brand-gold uppercase font-medium">
              Let's Connect
            </span>
            <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05] mt-5">
              Your Gateway to{' '}
              <span className="bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-dark bg-clip-text text-transparent animate-gradient-shift">
                Global Trade Success
              </span>
            </h2>
            <p className="text-slate-400 text-lg mt-6 font-light max-w-lg">
              From fish imports to date exports, from industrial goods to oil and gas commodities — LEGADEAL is your trusted partner in international commerce.
            </p>

            <div className="mt-10">
              <button
                onClick={onOpenModal}
                className="btn-shimmer bg-brand-gold text-brand-charcoal px-12 py-4 rounded-full font-medium text-base tracking-wide shadow-xl shadow-brand-gold/20 hover:shadow-2xl hover:bg-brand-gold-dark transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                Connect With Us Today
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                <Icon icon="solar:phone-linear" className="text-brand-gold text-lg" />
              </div>
              <div>
                <div className="text-white/60 text-xs font-light mb-0.5">Mobile Hotline</div>
                <a href="tel:+966503602359" className="text-white font-medium text-sm hover:text-brand-gold transition-colors">
                  +966 50 360 2359
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                <Icon icon="solar:letter-linear" className="text-brand-gold text-lg" />
              </div>
              <div>
                <div className="text-white/60 text-xs font-light mb-0.5">Email</div>
                <a href="mailto:info@legacyglobalsa.com" className="text-white font-medium text-sm hover:text-brand-gold transition-colors">
                  info@legacyglobalsa.com
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                <Icon icon="solar:link-linear" className="text-brand-gold text-lg" />
              </div>
              <div>
                <div className="text-white/60 text-xs font-light mb-0.5">Website</div>
                <a href="https://www.legacyglobalsa.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium text-sm hover:text-brand-gold transition-colors">
                  www.legacyglobalsa.com
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
                <Icon icon="solar:map-point-linear" className="text-brand-gold text-lg" />
              </div>
              <div>
                <div className="text-white/60 text-xs font-light mb-0.5">Office</div>
                <span className="text-white font-medium text-sm">
                  Near Al Mutlaq Hotel, King Abdulaziz Rd, KSA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
