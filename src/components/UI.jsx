import { useRef, useEffect, useState } from 'react';

// ── Monogram / Rings SVG ────────────────────────────────────────────────────
export function Monogram({ size = 72 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle cx="36" cy="36" r="34" stroke="var(--gold)" strokeWidth="1" opacity="0.6" />
      {/* Inner ring */}
      <circle cx="36" cy="36" r="28" stroke="var(--gold)" strokeWidth="0.5" opacity="0.4" />
      {/* Petal accents */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="36"
          cy="18"
          rx="3"
          ry="6"
          fill="var(--gold)"
          opacity="0.35"
          transform={`rotate(${deg} 36 36)`}
        />
      ))}
      {/* Center dot */}
      <circle cx="36" cy="36" r="3" fill="var(--gold)" opacity="0.7" />
    </svg>
  );
}

// ── Decorative Divider ──────────────────────────────────────────────────────
export function Divider({ light = false }) {
  const lineColor = light ? 'rgba(255,255,255,.22)' : 'rgba(184,208,232,.55)';
  const dotColor  = light ? 'rgba(255,255,255,.5)' : 'var(--gold)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1.6rem' }}>
      <div style={{ flex: 1, maxWidth: 80, height: 1, background: lineColor }} />
      <div style={{ width: 6, height: 6, background: dotColor, transform: 'rotate(45deg)', margin: '0 1rem' }} />
      <div style={{ flex: 1, maxWidth: 80, height: 1, background: lineColor }} />
    </div>
  );
}

// ── Section Header ──────────────────────────────────────────────────────────
export function SectionHeader({ tag, title, light = false }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <p style={{
        fontFamily: "'Playfair Display SC', serif",
        fontSize: 10,
        letterSpacing: '.3em',
        color: light ? 'var(--sky-mid)' : 'var(--sky-deep)',
        marginBottom: '2.5rem',
      }}>
        {tag}
      </p>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(28px, 6vw, 44px)',
        color: light ? 'var(--white)' : 'var(--navy)',
        lineHeight: 1.15,
        letterSpacing: '-.01em',
      }}>
        {title}
      </h2>
      <Divider light={light} />
    </div>
  );
}

// ── Scroll-fade-in wrapper ───────────────────────────────────────────────────
export function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(22px)',
        transition: `opacity .85s ease ${delay}s, transform .85s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── Countdown ───────────────────────────────────────────────────────────────
export function useCountdown(targetDateStr) {
  const [time, setTime] = useState({ d: '--', h: '--', m: '--' });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDateStr) - new Date();
      if (diff <= 0) { setTime({ d: '00', h: '00', m: '00' }); return; }
      setTime({
        d: String(Math.floor(diff / 864e5)).padStart(2, '0'),
        h: String(Math.floor((diff % 864e5) / 36e5)).padStart(2, '0'),
        m: String(Math.floor((diff % 36e5) / 6e4)).padStart(2, '0'),
      });
    };
    calc();
    const id = setInterval(calc, 30_000);
    return () => clearInterval(id);
  }, [targetDateStr]);

  return time;
}
