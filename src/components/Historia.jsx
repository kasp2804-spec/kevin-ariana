import { FadeIn, SectionHeader } from './UI.jsx';
import { HISTORIA } from '../data.js';

// Replace with your actual portrait photo
// import couplePhoto from '../assets/couple.jpg';
const COUPLE_PHOTO = '/couple.jpg';

export default function Historia() {
  const titleLines = HISTORIA.title.split('\n');

  return (
    <section
      id="historia"
      style={{
        padding: '5rem 1.25rem',
        background: 'var(--white)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <SectionHeader tag={HISTORIA.tag} title={titleLines.join('\n')} />
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
        }}>
          {/* Photo */}
          <FadeIn>
            <div style={{ position: 'relative' }}>
              {/* Decorative SVG ring behind photo */}
              <svg
                style={{
                  position: 'absolute',
                  inset: -18,
                  width: 'calc(100% + 36px)',
                  zIndex: 2,
                  pointerEvents: 'none',
                }}
                viewBox="0 0 300 300"
                fill="none"
              >
                <circle cx="150" cy="150" r="148" stroke="var(--sky)" strokeWidth="0.6" opacity="0.5" />
                <circle cx="150" cy="150" r="138" stroke="var(--gold)" strokeWidth="0.4" opacity="0.3" strokeDasharray="4 8" />
              </svg>

              <div style={{
                aspectRatio: '3/4',
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 18px 60px rgba(26,46,66,.14)',
                border: '1px solid rgba(184,208,232,.3)',
              }}>
                <img
                  src={COUPLE_PHOTO}
                  alt="Kevin y Ariana"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.15}>
            <SectionHeader
              tag="· Su historia ·"
              title={titleLines[0]}
            />

            <p style={{
              fontSize: 'clamp(14px,2vw,16px)',
              color: 'var(--navy2)',
              lineHeight: 1.95,
              fontStyle: 'italic',
              marginBottom: '1.8rem',
            }}>
              {HISTORIA.body}
            </p>

            <blockquote style={{
              marginTop: '1.8rem',
              padding: '1.2rem 1.4rem',
              borderLeft: '3px solid var(--gold)',
              background: 'rgba(205,224,240,.12)',
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(12px,1.8vw,14px)',
                color: 'var(--navy2)',
                lineHeight: 1.85,
                marginBottom: '.7rem',
              }}>
                {HISTORIA.cita}
              </p>
              <cite style={{
                fontFamily: "'Playfair Display SC', serif",
                fontSize: 9,
                letterSpacing: '.22em',
                color: 'var(--gold3)',
                display: 'block',
                textAlign: 'right',
                fontStyle: 'normal',
              }}>
                {HISTORIA.citaRef}
              </cite>
            </blockquote>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
