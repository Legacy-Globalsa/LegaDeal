import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const AI_FEATURES = [
  {
    icon: 'solar:chart-2-linear',
    title: 'Market Intelligence',
    desc: 'AI analyzes global commodity prices, demand patterns, and emerging market opportunities in real-time.',
  },
  {
    icon: 'solar:shield-check-linear',
    title: 'Supplier Verification',
    desc: 'Automated due diligence, background checks, and risk scoring for every supplier in our network.',
  },
  {
    icon: 'solar:map-arrow-right-linear',
    title: 'Shipment Tracking',
    desc: 'Real-time AI-powered tracking, predictive ETAs, and automated compliance checkpoints.',
  },
  {
    icon: 'solar:document-text-linear',
    title: 'Smart Documentation',
    desc: 'Intelligent document processing, automated compliance checks, and digital contract management.',
  },
];

export default function AIOperations() {
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
    const els = sectionRef.current?.querySelectorAll('.ai-fade');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-32 bg-slate-900 z-10 overflow-hidden" ref={sectionRef}>
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      {/* Accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="ai-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out">
              <span className="font-mono text-xs tracking-[0.25em] text-brand-gold uppercase font-medium">
                Technology Edge
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-medium text-white mt-5 leading-tight tracking-tight">
                AI-Powered<br />Operations
              </h2>
              <p className="text-slate-400 text-base md:text-lg mt-6 font-light leading-relaxed max-w-lg">
                Innovation is our advantage. LEGADEAL uses artificial intelligence to analyze markets, verify suppliers, track shipments, and optimize every step of the trade process.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {AI_FEATURES.map((feature, i) => (
                <div
                  key={i}
                  className="ai-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-colors duration-300"
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-3">
                    <Icon icon={feature.icon} className="text-brand-gold text-lg" />
                  </div>
                  <h4 className="text-white font-medium text-sm mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="ai-fade opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                alt="AI-Powered Global Operations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute inset-0 bg-brand-gold/5" />

              {/* Overlaid data cards */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-slate-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs text-emerald-400 tracking-wide">AI Systems Active</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="font-mono text-lg text-white font-medium">847</div>
                      <div className="text-xs text-slate-500 font-light">Suppliers Scored</div>
                    </div>
                    <div>
                      <div className="font-mono text-lg text-white font-medium">24/7</div>
                      <div className="text-xs text-slate-500 font-light">Monitoring</div>
                    </div>
                    <div>
                      <div className="font-mono text-lg text-brand-gold font-medium">99.2%</div>
                      <div className="text-xs text-slate-500 font-light">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
