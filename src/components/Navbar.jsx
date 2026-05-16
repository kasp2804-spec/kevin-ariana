import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data.js';

const navLinkStyle = {
  fontFamily: "'Playfair Display SC', serif",
  fontSize: 9.5,
  letterSpacing: '.2em',
  color: 'var(--sky-deep)',
  textDecoration: 'none',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 58,
        background: 'rgba(245,248,251,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(184,208,232,.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1.5rem',
        zIndex: 200,
        boxShadow: scrolled ? '0 2px 20px rgba(26,46,66,.07)' : 'none',
        transition: 'box-shadow .3s',
      }}>
        {/* Desktop links - left */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '2rem' }}>
          {NAV_LINKS.slice(0, 2).map(l => (
            <a key={l.href} href={l.href} style={navLinkStyle}>{l.label}</a>
          ))}
        </div>

        {/* Logo / Monogram center */}
        <a href="#" style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: 22,
          color: 'var(--navy)',
          letterSpacing: '.04em',
          textDecoration: 'none',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
          K &amp; A
        </a>

        {/* Desktop links - right */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '2rem', marginLeft: 'auto' }}>
          {NAV_LINKS.slice(2).map(l => (
            <a key={l.href} href={l.href} style={navLinkStyle}>{l.label}</a>
          ))}
        </div>

        {/* Hamburger - mobile */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="nav-hamburger"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            marginLeft: 'auto',
            zIndex: 300,
            padding: 8,
          }}
          aria-label="Menú"
        >
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 24, height: 2,
              background: 'var(--navy)',
              marginBottom: i < 2 ? 5 : 0,
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translateY(7px)'
                : i === 2 ? 'rotate(-45deg) translateY(-7px)'
                : 'none'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
              transition: 'transform .25s, opacity .25s',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 58, left: 0, right: 0,
          zIndex: 199,
          background: 'rgba(245,248,251,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(184,208,232,.35)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1.5rem 0',
          gap: '1.4rem',
        }}>
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{ ...navLinkStyle, fontSize: 12, letterSpacing: '.22em' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      {/* Responsive style tag */}
      <style>{`
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
