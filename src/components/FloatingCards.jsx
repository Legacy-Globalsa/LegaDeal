import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const CARDS = [
  {
    id: 'a',
    pos: 'top-[22%] left-[12%] w-52',
    baseRot: -4,
    floatDelay: 0,
    floatDur: 5500,
    content: (
      <>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-xs text-brand-gold font-medium tracking-tight">Shipment #8942</span>
          <Icon icon="solar:routing-2-linear" className="text-slate-400 text-sm" />
        </div>
        <div className="h-1 rounded-full bg-slate-100 w-full overflow-hidden mb-2">
          <div className="h-full bg-brand-gold w-[75%] rounded-full" />
        </div>
        <span className="text-xs text-slate-400 block font-light">75% Transit to Riyadh</span>
      </>
    ),
  },
  {
    id: 'b',
    pos: 'top-[30%] right-[12%] w-56',
    baseRot: 3,
    floatDelay: 1200,
    floatDur: 6500,
    content: (
      <>
        <span className="font-mono text-xs text-slate-500 font-medium block mb-3 uppercase tracking-widest">Compliance Status</span>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-slate-600 tracking-wide font-light">SABER Registered</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-slate-600 tracking-wide font-light">SFDA Cleared</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-xs text-slate-600 tracking-wide font-light">Customs Processing</span>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'c',
    pos: 'bottom-[25%] left-[15%] w-48',
    baseRot: 2,
    floatDelay: 500,
    floatDur: 4800,
    content: (
      <div className="flex flex-col gap-2">
        <div className="bg-slate-50 border border-slate-100 rounded-xl py-2.5 flex items-center justify-center gap-2">
          <Icon icon="solar:shield-check-linear" className="text-emerald-500 text-sm" />
          <span className="text-xs text-slate-600 font-light">Supplier Verified</span>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-xl py-2.5 flex items-center justify-center gap-2">
          <Icon icon="solar:document-text-linear" className="text-brand-gold text-sm" />
          <span className="text-xs text-slate-600 font-light">Contract Secured</span>
        </div>
      </div>
    ),
  },
];

export default function FloatingCards() {
  const refs = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouse = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener('mousemove', onMouse);

    // Entrance animation
    refs.current.forEach((el, i) => {
      if (!el) return;
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = el.style.transform.replace('scale(0.9)', 'scale(1)');
      }, 800 + i * 250);
    });

    let animId;
    function animate() {
      const time = Date.now();
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const scrollY = window.scrollY;

      CARDS.forEach((card, i) => {
        const el = refs.current[i];
        if (!el) return;
        const floatY = Math.sin((time - card.floatDelay) / card.floatDur * Math.PI * 2) * -10;
        const rotX = -my * 4;
        const rotY = mx * 4;
        const cardParallax = scrollY * -0.2;
        el.style.transform = `perspective(1000px) translateY(${floatY + cardParallax}px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${card.baseRot}deg) scale(1)`;
      });
      animId = requestAnimationFrame(animate);
    }
    animId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-10 hidden lg:block pointer-events-none">
      {CARDS.map((card, i) => (
        <div
          key={card.id}
          ref={(el) => (refs.current[i] = el)}
          className={`floating-card absolute ${card.pos} bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-sm ${card.id === 'b' ? 'p-5' : 'p-4'} opacity-0`}
          style={{ transform: `rotateZ(${card.baseRot}deg) scale(0.9)`, transition: 'opacity 0.6s ease' }}
        >
          {card.content}
        </div>
      ))}
    </div>
  );
}
