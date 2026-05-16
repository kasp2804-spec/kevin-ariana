import { FadeIn, SectionHeader } from './UI.jsx';
import { REGALOS } from '../data.js';

const TOILE_BG = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cg fill='none' stroke='%23b8d0e8' stroke-width='0.7' opacity='0.22'%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3C/g%3E%3C/svg%3E")`,
  backgroundSize: '200px 200px',
};

export default function Regalos() {
  return (
    <section
      id="regalos"
      style={{
        padding: '5rem 1.25rem',
        background: 'var(--white)',
        position: 'relative',
        overflow: 'hidden',
        ...TOILE_BG,
      }}
    >
      <div style={{ maxWidth: 560, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <SectionHeader tag="Si deseas obsequiarnos" title="Mesa de Regalos" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(14px,2vw,16px)',
              color: 'var(--navy2)',
              lineHeight: 1.9,
              marginBottom: '2rem',
            }}>
              Tu presencia es el mejor regalo. Si deseas hacernos un obsequio, puedes hacerlo a través de:
            </p>

            {/* Datos bancarios */}
            <div style={{
              padding: '1.6rem',
              border: '1px solid rgba(184,208,232,.45)',
              background: 'rgba(205,224,240,.1)',
              marginBottom: '2rem',
              position: 'relative',
              textAlign: 'left',
            }}>
              <div style={{ position: 'absolute', inset: 5, border: '1px solid rgba(184,208,232,.2)', pointerEvents: 'none' }} />

              <span style={{
                fontFamily: "'Playfair Display SC', serif",
                fontSize: 9,
                letterSpacing: '.25em',
                color: 'var(--sky-mid)',
                display: 'block',
                marginBottom: '1rem',
              }}>
                Datos Bancarios
              </span>

              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(14px,2vw,16px)',
                color: 'var(--navy)',
                lineHeight: 2,
              }}>
                {REGALOS.banco}<br />
                <strong style={{ letterSpacing: '.05em' }}>{REGALOS.cuenta}</strong>
              </p>

              <div style={{ margin: '1rem 0', height: 1, background: 'rgba(184,208,232,.4)' }} />

              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(14px,2vw,16px)',
                color: 'var(--navy)',
                lineHeight: 2,
              }}>
                Llave Bancolombia<br />
                <strong style={{ letterSpacing: '.05em' }}>{REGALOS.llave}</strong>
              </p>
            </div>

            {/* QR */}
            <p style={{
              fontFamily: "'Playfair Display SC', serif",
              fontSize: 9,
              letterSpacing: '.25em',
              color: 'var(--sky-mid)',
              marginBottom: '1rem',
            }}>
              Código QR para transferencia
            </p>

            <div style={{
              display: 'inline-block',
              padding: '1rem',
              border: '1px solid rgba(184,208,232,.45)',
              background: 'var(--white)',
              boxShadow: '0 4px 20px rgba(26,46,66,.06)',
            }}>
              <img
                src={REGALOS.qrImage}
                alt="QR Transferencia"
                style={{ width: 180, height: 180, display: 'block' }}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
