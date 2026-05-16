import { Monogram, Divider, useCountdown } from './UI.jsx';
import { WEDDING_DATE } from '../data.js';

// ── Replace these imports with your actual photo paths ──────────────────────
// Put your images in /public and reference them as '/photo-cover.jpg', etc.
// Or put them in /src/assets and import them here.
// Example: import coverPhoto from '../assets/cover.jpg';
const COVER_PHOTO = '/cover.jpg'; // hero full-bleed cover photo

export default function Hero() {
  const { d, h, m } = useCountdown(WEDDING_DATE);
  const TOILE_BG = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cg fill='none' stroke='%23b8d0e8' stroke-width='0.7' opacity='0.22'%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3Ccircle cx='40' cy='40' r='8'/%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3Cellipse cx='40' cy='25' rx='5' ry='9' transform='rotate(0 40 40)'/%3E%3Cellipse cx='40' cy='25' rx='5' ry='9' transform='rotate(60 40 40)'/%3E%3Cellipse cx='40' cy='25' rx='5' ry='9' transform='rotate(120 40 40)'/%3E%3Cellipse cx='40' cy='25' rx='5' ry='9' transform='rotate(180 40 40)'/%3E%3Cellipse cx='40' cy='25' rx='5' ry='9' transform='rotate(240 40 40)'/%3E%3Cellipse cx='40' cy='25' rx='5' ry='9' transform='rotate(300 40 40)'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: '200px 200px',
  };

  return (
    <>
      {/* ── Full-bleed cover photo ── */}
      <div style={{ position: 'relative', marginTop: 58, overflow: 'hidden' }}>
        <div style={{ width: '100%', maxHeight: '100svh', overflow: 'hidden', lineHeight: 0 }}>
          <img
            src={COVER_PHOTO}
            alt="Kevin y Ariana"
            style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>
        {/* Fade to white at bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,1) 100%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* ── Main hero card ── */}
      <section
        id="hero"
        style={{
          background: 'var(--white)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 1.2rem 4rem',
          position: 'relative',
          ...TOILE_BG,
        }}
      >
        {/* Floating monogram */}
        <div style={{
          marginBottom: '1.4rem',
          marginTop: '-36px',
          position: 'relative',
          zIndex: 5,
          filter: 'drop-shadow(0 5px 14px rgba(201,168,76,.45))',
          animation: 'popIn .7s .2s cubic-bezier(.34,1.56,.64,1) both',
        }}>
          <Monogram size={64} />
        </div>

        {/* Invitation card */}
        <div style={{
          width: '100%',
          maxWidth: 540,
          background: 'rgba(255,255,255,.98)',
          border: '1.5px solid rgba(184,208,232,.5)',
          padding: 'clamp(1.6rem,5vw,3rem) clamp(1.2rem,6vw,3.5rem)',
          textAlign: 'center',
          boxShadow: '0 12px 60px rgba(26,46,66,.1)',
          position: 'relative',
          zIndex: 4,
        }}>
          {/* Inner border double lines */}
          <div style={{ position: 'absolute', inset: 7, border: '1px solid rgba(184,208,232,.22)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 13, border: '1px solid rgba(184,208,232,.1)', pointerEvents: 'none' }} />

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(48px,13vw,96px)',
            lineHeight: .92,
            color: 'var(--navy)',
            letterSpacing: '-.015em',
            animation: 'fadeUp 1s .3s ease both',
          }}>
            Kevin
            <span style={{ display: 'block', fontSize: '.48em', color: 'var(--gold)', lineHeight: 1.35 }}>&</span>
            Ariana
          </h1>

          <Divider />

          <p style={{
            fontFamily: "'Playfair Display SC', serif",
            fontSize: 'clamp(8.5px,2.2vw,11px)',
            letterSpacing: '.18em',
            color: 'var(--navy2)',
            lineHeight: 2.1,
            animation: 'fadeUp .8s .65s ease both',
            marginTop: '1.6rem',
          }}>
            Sábado · 11 de Julio de 2026 · 3:30 pm
          </p>

          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(15px,3vw,19px)',
            color: 'var(--sky-deep)',
            lineHeight: 1.75,
            animation: 'fadeUp .9s .8s ease both',
            maxWidth: 340,
            margin: '.6rem auto 0',
          }}>
            Aquí encontrarás todo lo que necesitas para gozar junto con nosotros del día más esperado — no te pierdas ningún detalle.
          </p>

          <div style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '.55rem 1.8rem',
            border: '1px solid rgba(90,138,170,.3)',
            fontFamily: "'Playfair Display SC', serif",
            fontSize: 9,
            letterSpacing: '.28em',
            color: 'var(--sky-deep)',
            animation: 'fadeUp .8s .8s ease both',
          }}>
            Descubre todo ↓
          </div>
        </div>
      </section>

      {/* ── Countdown banner ── */}
      <section style={{
        padding: '5rem 1.25rem',
        background: 'var(--navy)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <p style={{
          fontFamily: "'Playfair Display SC', serif",
          fontSize: 10,
          letterSpacing: '.3em',
          color: 'var(--sky-mid)',
          marginBottom: '2.5rem',
        }}>
          Faltan
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(1.5rem,5vw,4rem)', alignItems: 'baseline' }}>
          {[['d', 'días'], ['h', 'horas'], ['m', 'min']].map(([key, label]) => (
            <div key={key} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(48px,10vw,80px)',
                color: 'var(--white)',
                lineHeight: 1,
                display: 'block',
              }}>
                {{ d, h, m }[key]}
              </div>
              <div style={{
                fontFamily: "'Playfair Display SC', serif",
                fontSize: 9,
                letterSpacing: '.2em',
                color: 'var(--sky-mid)',
                marginTop: '.4rem',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
