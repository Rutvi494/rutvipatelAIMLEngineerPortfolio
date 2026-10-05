import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
}

interface PulsePacket {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
}

export const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 24 : 52;
    const connectionDistance = isMobile ? 90 : 135;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const colors = ['#38bdf8', '#818cf8', '#a855f7', '#06b6d4'];

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.45),
      vy: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.45),
      radius: Math.random() * 1.5 + 1.2,
      baseRadius: Math.random() * 1.5 + 1.2,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // Data packets travelling between nodes
    const packets: PulsePacket[] = [];
    const maxPackets = isMobile ? 3 : 7;

    const spawnPacket = () => {
      if (packets.length >= maxPackets) return;
      const i = Math.floor(Math.random() * particles.length);
      // find a neighbor
      for (let j = 0; j < particles.length; j++) {
        if (i === j) continue;
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < connectionDistance) {
          packets.push({
            fromIndex: i,
            toIndex: j,
            progress: 0,
            speed: 0.012 + Math.random() * 0.015,
          });
          break;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relX = (e.clientX - rect.left - width / 2) * 0.03;
      const relY = (e.clientY - rect.top - height / 2) * 0.03;
      mouseRef.current.targetX = relX;
      mouseRef.current.targetY = relY;
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse parallax interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const offsetX = mouseRef.current.x;
      const offsetY = mouseRef.current.y;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.pulsePhase += p.pulseSpeed;

          // Boundary bounce
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        const currentRadius = p.baseRadius + Math.sin(p.pulsePhase) * 0.6;

        ctx.beginPath();
        ctx.arc(p.x + offsetX, p.y + offsetY, Math.max(0.8, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x + offsetX, particles[i].y + offsetY);
            ctx.lineTo(particles[j].x + offsetX, particles[j].y + offsetY);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw packets
      if (!prefersReducedMotion) {
        if (Math.random() < 0.04) spawnPacket();

        for (let k = packets.length - 1; k >= 0; k--) {
          const pkt = packets[k];
          pkt.progress += pkt.speed;

          if (pkt.progress >= 1) {
            packets.splice(k, 1);
            continue;
          }

          const fromP = particles[pkt.fromIndex];
          const toP = particles[pkt.toIndex];
          if (!fromP || !toP) {
            packets.splice(k, 1);
            continue;
          }

          const curX = fromP.x + (toP.x - fromP.x) * pkt.progress + offsetX;
          const curY = fromP.y + (toP.y - fromP.y) * pkt.progress + offsetY;

          ctx.beginPath();
          ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = '#38bdf8';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#38bdf8';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full block opacity-70" />
      {/* Vignette Scrim ensuring 100% WCAG legibility for hero text */}
      <div className="absolute inset-0 bg-radial-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/40 via-transparent to-[#07090e]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/75 to-transparent w-full md:w-3/5" />
    </div>
  );
};
