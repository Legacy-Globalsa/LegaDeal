import { useEffect, useRef } from 'react';

const COLOR_PALETTE = [
  { c: '#3C3C3B', weight: 0.30 },
  { c: '#EDBA2D', weight: 0.30 },
  { c: '#94A3B8', weight: 0.20 },
  { c: '#D4A017', weight: 0.10 },
  { c: '#E2E8F0', weight: 0.10 },
];

function getRandomColor() {
  let r = Math.random(), sum = 0;
  for (const p of COLOR_PALETTE) {
    sum += p.weight;
    if (r <= sum) return p.c;
  }
  return COLOR_PALETTE[0].c;
}

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    let width, height;
    let rotationAngle = 0;
    let parallaxYOffset = 0;
    let mouseX = 0, mouseY = 0;
    let animId;

    const clusterCenters = [
      { x: 250, y: -100, z: 150 }, { x: -200, y: 150, z: -100 },
      { x: 50, y: -250, z: -150 }, { x: 250, y: 200, z: 100 },
      { x: -150, y: -200, z: 250 }, { x: 100, y: 250, z: -150 },
    ];

    const nodes = Array.from({ length: 110 }, () => {
      const cluster = clusterCenters[Math.floor(Math.random() * clusterCenters.length)];
      const spread = 200;
      return {
        ox: cluster.x + (Math.random() - 0.5) * spread,
        oy: cluster.y + (Math.random() - 0.5) * spread,
        oz: cluster.z + (Math.random() - 0.5) * spread,
        color: getRandomColor(),
        radius: 1.5 + Math.random() * 3.5,
        seed: Math.random() * 100,
      };
    });

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }

    function onMouseMove(e) {
      mouseX = (e.clientX / width - 0.5) * 2;
      mouseY = (e.clientY / height - 0.5) * 2;
    }

    function onScroll() {
      parallaxYOffset = window.scrollY * 0.15;
    }

    function draw() {
      ctx.fillStyle = '#F8FAFC';
      ctx.fillRect(0, 0, width, height);
      rotationAngle += 0.0006;
      const focalLength = 1200;
      const cx = width / 2;
      const cy = height / 2;
      const time = Date.now() * 0.001;

      const projected = nodes.map((node) => {
        const y = node.oy + Math.sin(time * 0.3 + node.seed) * 10;
        let x = node.ox * Math.cos(rotationAngle) - node.oz * Math.sin(rotationAngle);
        let z = node.oz * Math.cos(rotationAngle) + node.ox * Math.sin(rotationAngle);
        x -= mouseX * (z + focalLength) * 0.015;
        const yAdj = y - mouseY * (z + focalLength) * 0.015;
        const scale = focalLength / (focalLength + z);
        return { x: x * scale + cx, y: yAdj * scale + cy - parallaxYOffset, z, scale, node };
      });

      projected.sort((a, b) => b.z - a.z);

      ctx.globalCompositeOperation = 'source-over';
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i], p2 = projected[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 80 * p1.scale) {
            const alpha = (1 - dist / (80 * p1.scale)) * 0.1 * Math.min(1, p1.scale);
            ctx.strokeStyle = `rgba(148,163,184,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      projected.forEach((p) => {
        if (p.z > -focalLength) {
          const breathe = 0.95 + 0.05 * Math.sin(time * 0.5 + p.node.seed);
          const r = p.node.radius * p.scale * breathe;
          if (r > 0.1) {
            const fogZ = 600;
            let alpha = 1;
            if (p.z > fogZ) alpha = Math.max(0, 1 - (p.z - fogZ) / 600);
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
            ctx.fillStyle = p.node.color;
            ctx.fill();
          }
        }
      });

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll);
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full pointer-events-auto opacity-100"
    />
  );
}
