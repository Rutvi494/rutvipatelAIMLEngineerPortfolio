import React, { useState, useEffect, useRef } from 'react';
import { IMPACT_METRICS } from '../data/portfolioData';
import { TrendingUp } from 'lucide-react';

export const ImpactMetrics: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(IMPACT_METRICS.map(() => 0));
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate count-ups
          const duration = 1600; // ms
          const frameRate = 30; // updates per sec
          const totalFrames = Math.round((duration / 1000) * frameRate);
          let currentFrame = 0;

          const timer = setInterval(() => {
            currentFrame++;
            const progress = currentFrame / totalFrames;
            // easeOutQuad curve
            const easeProgress = 1 - (1 - progress) * (1 - progress);

            setCounts(
              IMPACT_METRICS.map((metric) =>
                Math.round(metric.value * easeProgress)
              )
            );

            if (currentFrame >= totalFrames) {
              clearInterval(timer);
              setCounts(IMPACT_METRICS.map((m) => m.value));
            }
          }, 1000 / frameRate);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={containerRef} className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {IMPACT_METRICS.map((metric, idx) => (
          <div
            key={metric.label}
            className="group relative p-6 rounded-2xl glass-panel bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-[0_0_24px_rgba(56,189,248,0.15)] flex flex-col justify-between"
          >
            {/* Top row with subtle trend icon */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                Key Impact 0{idx + 1}
              </span>
              <TrendingUp className="w-4 h-4 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Metric Value */}
            <div className="mb-2">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-bold font-mono tracking-tight tabular-nums text-white group-hover:text-cyan-300 transition-colors">
                  {counts[idx]}
                </span>
                <span className="text-3xl font-bold text-cyan-400 font-mono">
                  {metric.suffix}
                </span>
              </div>
            </div>

            {/* Label & Context */}
            <div>
              <h3 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                {metric.label}
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {metric.sublabel}
              </p>
            </div>

            {/* Bottom accent glow hairline */}
            <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent group-hover:via-cyan-400/80 transition-all" />
          </div>
        ))}
      </div>
    </section>
  );
};
