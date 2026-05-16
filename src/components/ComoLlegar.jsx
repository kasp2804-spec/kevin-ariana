import { FadeIn, SectionHeader } from './UI.jsx';
import { VENUE } from '../data.js';

const TOILE_BG = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cg fill='none' stroke='%23b8d0e8' stroke-width='0.7' opacity='0.22'%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3C/g%3E%3C/svg%3E")`,
  backgroundSize: '200px 200px',
};

// Google Maps embed URL for Hotel Marriott Barranquilla
const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.5!2d-74.8!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42e8fcb571e97%3A0x1af1f7e9a4b3a2c!2sHotel+Marriott+Barranquilla!5e0!3m2!1ses!2sco!4v1';

export default function ComoLlegar() {
  return (
    <section
      id="llegar"
      style={{
        padding: '5rem 1.25rem',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        ...TOILE_BG,
      }}
    >
      <div style={{ maxWidth: 940, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <SectionHeader tag="El camino hacia nosotros" title="Cómo Llegar" />
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Info card */}
          <FadeIn>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(22px,4vw,32px)',
              color: 'var(--navy)',
              lineHeight: 1.2,
              marginBottom: '.5rem',
            }}>
              {VENUE.name.replace(' Barranquilla', '')}<br />
              <span style={{ fontSize: '.75em' }}>Barranquilla</span>
            </h3>

            <p style={{
              fontFamily: "'Playfair Display SC', serif",
              fontSize: 10,
              letterSpacing: '.15em',
              color: 'var(--sky-deep)',
              marginBottom: '.8rem',
            }}>
              {VENUE.salon}
            </p>

            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 15,
              color: 'var(--navy2)',
              lineHeight: 1.85,
              marginBottom: '1.8rem',
            }}>
              {VENUE.address}<br />
              {VENUE.neighborhood}<br />
              {VENUE.city}
            </p>

            {/* Detail bullets */}
            {VENUE.details.map(({ icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: 30, height: 30,
                  border: '1px solid rgba(154,189,216,.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 13,
                  flexShrink: 0,
                }}>
                  {icon}
                </div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: 14,
                  color: 'var(--navy2)',
                  paddingTop: '.3rem',
                  lineHeight: 1.7,
                }}>
                  {text}
                </p>
              </div>
            ))}

            <a
              href={VENUE.mapsUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '.65rem 1.8rem',
                border: '1px solid rgba(90,138,170,.4)',
                fontFamily: "'Playfair Display SC', serif",
                fontSize: 9,
                letterSpacing: '.22em',
                color: 'var(--sky-deep)',
                textDecoration: 'none',
                transition: 'background .2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(90,138,170,.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              ↗ Abrir en Google Maps
            </a>
          </FadeIn>

          {/* Map embed */}
          <FadeIn delay={0.15}>
            <div style={{
              aspectRatio: '4/3',
              border: '1px solid rgba(184,208,232,.4)',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(26,46,66,.08)',
            }}>
              <iframe
                src={MAP_EMBED_URL}
                style={{ width: '100%', height: '100%', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Hotel Marriott Barranquilla"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
