import { useEffect, useRef } from 'react';

const STATS = [
  { target: 9, suffix: '+', label: 'Industries Served' },
  { target: 100, suffix: '%', label: 'Compliance Rate' },
  { target: 24, suffix: '/7', label: 'AI Monitoring' },
  { target: null, text: 'Global', label: 'Network Reach' },
];

const INDUSTRIES = [
  'Fish & Seafood',
  'Dates & Agriculture',
  'Oil & Gas',
  'FMCG',
  'Electronics',
  'Retail & Hospitality',
  'Construction',
  'Petrochemicals',
  'Industrial Manufacturing',
];

function Counter({ target, suffix }) {
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    if (!ref.current || counted.current || target == null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || counted.current) return;
        counted.current = true;
        observer.disconnect();

        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 4);
          ref.current.textContent = Math.floor(target * ease).toLocaleString();
          if (p < 1) requestAnimationFrame(update);
          else ref.current.textContent = target.toLocaleString();
        }
        requestAnimationFrame(update);
      },
      { threshold: 0.15 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  if (target == null) return null;
  return (
    <>
      <span ref={ref}>0</span>
      {suffix}
    </>
  );
}

export default function Stats() {
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
    const els = sectionRef.current?.querySelectorAll('.stat-fade-up');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white/70 backdrop-blur-xl border-y border-slate-200/80 py-20 relative z-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {STATS.map((s, i) => (
            <div key={i} className="stat-fade-up opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out">
              <div className="font-mono text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mb-3 tracking-tighter">
                {s.target != null ? <Counter target={s.target} suffix={s.suffix} /> : s.text}
              </div>
              <div className="text-xs text-slate-500 tracking-[0.15em] uppercase font-normal">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-slate-100 flex flex-wrap justify-center gap-3 md:gap-4 stat-fade-up opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out">
          {INDUSTRIES.map((name) => (
            <span
              key={name}
              className="px-4 py-2 rounded-full border border-slate-200 text-xs text-slate-600 bg-white shadow-sm font-light"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
