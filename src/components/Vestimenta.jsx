import { FadeIn, SectionHeader } from './UI.jsx';
import { DRESSCODE } from '../data.js';

export default function Vestimenta() {
  return (
    <section
      id="vestimenta"
      style={{
        padding: '5rem 1.25rem',
        background: 'var(--navy)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 660, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <SectionHeader tag="Una nota sobre" title={DRESSCODE.formalidad} light />
        </FadeIn>

        {/* Badge */}
        <FadeIn>
          <div style={{
            display: 'inline-block',
            padding: '1rem 2.5rem',
            background: 'var(--plaque-blue)',
            color: 'var(--white)',
            marginBottom: '2rem',
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', inset: 5, border: '1px solid rgba(255,255,255,.2)' }} />
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(20px,5vw,28px)',
              display: 'block',
            }}>
              {DRESSCODE.formalidad}
            </span>
            <span style={{
              fontFamily: "'Playfair Display SC', serif",
              fontSize: 9,
              letterSpacing: '.2em',
              color: 'rgba(255,255,255,.7)',
            }}>
              {DRESSCODE.subtitulo}
            </span>
          </div>
        </FadeIn>

        {/* Hombres / Mujeres */}
        <FadeIn>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem',
            marginBottom: '2.5rem',
          }}>
            {[
              { title: 'Hombres', data: DRESSCODE.hombres },
              { title: 'Mujeres', data: DRESSCODE.mujeres },
            ].map(({ title, data }) => (
              <div key={title} style={{
                padding: '1.4rem 1rem',
                border: '1px solid rgba(154,189,216,.25)',
                background: 'rgba(255,255,255,.05)',
              }}>
                <span style={{
                  fontFamily: "'Playfair Display SC', serif",
                  fontSize: 10,
                  letterSpacing: '.22em',
                  color: 'var(--sky-mid)',
                  display: 'block',
                  marginBottom: '.8rem',
                }}>
                  {title}
                </span>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(13px,2vw,15px)',
                  color: 'rgba(247,249,252,.78)',
                  lineHeight: 1.8,
                  marginBottom: '1rem',
                  whiteSpace: 'pre-line',
                }}>
                  {data.descripcion}
                </p>
                <a
                  href={data.pinterestUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'Playfair Display SC', serif",
                    fontSize: 9,
                    letterSpacing: '.18em',
                    color: 'var(--gold2)',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(226,201,126,.4)',
                    paddingBottom: 2,
                  }}
                >
                  Ver inspiración ↗
                </a>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Colores reservados */}
        <FadeIn>
          <p style={{
            fontFamily: "'Playfair Display SC', serif",
            fontSize: 9.5,
            letterSpacing: '.25em',
            color: 'var(--sky-mid)',
            marginBottom: '1.2rem',
          }}>
            Colores Reservados
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '1rem',
          }}>
            {DRESSCODE.coloresReservados.map(({ color, name, border }) => (
              <div key={name} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 52, height: 52,
                  borderRadius: '50%',
                  background: color,
                  margin: '0 auto .6rem',
                  border: border || 'none',
                  boxShadow: '0 0 0 2px rgba(255,255,255,.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ color: 'var(--navy)', fontSize: 18, fontWeight: 300, lineHeight: 1 }}>✕</div>
                </div>
                <div style={{
                  fontFamily: "'Playfair Display SC', serif",
                  fontSize: 8.5,
                  letterSpacing: '.15em',
                  color: 'rgba(157,189,216,.7)',
                }}>
                  {name}
                </div>
              </div>
            ))}
          </div>

          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 13,
            color: 'rgba(157,189,216,.6)',
            lineHeight: 1.8,
          }}>
            Por favor evita estos colores. ¡Gracias por tu consideración!
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
