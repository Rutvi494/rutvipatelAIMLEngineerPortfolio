import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, select, textarea');
      const projectCard = target.closest('[data-cursor="view"]');
      const githubBtn = target.closest('[data-cursor="github"]');

      if (projectCard) {
        setIsPointer(true);
        setCursorText('VIEW');
      } else if (githubBtn) {
        setIsPointer(true);
        setCursorText('↗');
      } else if (interactive) {
        setIsPointer(true);
        setCursorText('');
      } else {
        setIsPointer(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-all duration-200 ${
          cursorText
            ? 'w-14 h-14 bg-cyan-500/90 text-slate-950 font-bold text-xs tracking-wider border border-white/40 shadow-[0_0_20px_rgba(56,189,248,0.5)]'
            : isPointer
            ? 'w-8 h-8 bg-cyan-400/30 border border-cyan-400/80 backdrop-blur-xs scale-110 shadow-[0_0_12px_rgba(56,189,248,0.4)]'
            : 'w-3 h-3 bg-cyan-400/90 shadow-[0_0_8px_rgba(56,189,248,0.8)]'
        }`}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </div>
  );
};
