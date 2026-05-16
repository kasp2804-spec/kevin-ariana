import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FadeIn, SectionHeader, Monogram } from './UI.jsx';
import { FORMSPREE_ID, RSVP_DEADLINE } from '../data.js';

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(154,189,216,.55)',
  padding: '.5rem 0',
  fontFamily: "'Playfair Display', serif",
  fontStyle: 'italic',
  fontSize: 16,
  color: 'var(--navy)',
  outline: 'none',
  WebkitAppearance: 'none',
  appearance: 'none',
};

const labelStyle = {
  display: 'block',
  fontFamily: "'Playfair Display SC', serif",
  fontSize: 9,
  letterSpacing: '.22em',
  color: 'var(--sky-mid)',
  marginBottom: '.5rem',
  textTransform: 'uppercase',
};

const TOILE_BG = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cg fill='none' stroke='%23b8d0e8' stroke-width='0.7' opacity='0.22'%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3C/g%3E%3C/svg%3E")`,
  backgroundSize: '200px 200px',
};

export default function RSVP() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [asistencia, setAsistencia] = useState(null); // 'si' | 'no'
  const [cupos, setCupos] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.nombre.value.trim()) { form.nombre.focus(); return; }
    if (!asistencia) { alert('Por favor indica si asistirás.'); return; }
    handleSubmit(e);
  };

  return (
    <section
      id="rsvp"
      style={{
        padding: '5rem 1.25rem',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        ...TOILE_BG,
      }}
    >
      <div style={{ maxWidth: 560, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Floating monogram above card */}
        <div style={{
          position: 'absolute',
          top: -28, left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
        }}>
          <Monogram size={56} />
        </div>

        <div style={{
          background: 'var(--white)',
          border: '1px solid rgba(184,208,232,.45)',
          padding: 'clamp(2.5rem,6vw,4rem) clamp(1.5rem,5vw,3.5rem)',
          textAlign: 'center',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', inset: 10, border: '1px solid rgba(184,208,232,.2)', pointerEvents: 'none' }} />

          <FadeIn>
            <SectionHeader tag="· Confirmación ·" title="Confirma tu Asistencia" />
          </FadeIn>

          {state.succeeded ? (
            /* ── Success message ── */
            <FadeIn>
              <div style={{ paddingTop: '1.5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: 36, marginBottom: '.8rem' }}>
                  {asistencia === 'si' ? '🎉' : '💙'}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: 28,
                  color: 'var(--navy)',
                  marginBottom: '1rem',
                }}>
                  {asistencia === 'si' ? '¡Gracias! ¡Los esperamos!' : 'Gracias por avisarnos'}
                </h3>
                <p style={{ fontStyle: 'italic', fontSize: 15, lineHeight: 1.7, color: 'var(--navy2)' }}>
                  {asistencia === 'si'
                    ? 'Tu confirmación ha sido recibida con alegría.\n¡Será un honor celebrar contigo el 11 de julio!'
                    : 'Lamentamos que no puedas acompañarnos. Tu cariño nos llega de igual manera.'}
                </p>
              </div>
            </FadeIn>
          ) : (
            /* ── Form ── */
            <form onSubmit={onSubmit} style={{ position: 'relative', zIndex: 1, paddingTop: '1.5rem' }}>
              {/* Hidden fields */}
              <input type="hidden" name="_subject" value="RSVP Boda Kevin & Ariana" />
              <input type="hidden" name="asistencia" value={
                asistencia === 'si' ? 'Confirma asistencia'
                : asistencia === 'no' ? 'No puede asistir'
                : 'Sin respuesta'
              } />

              {/* ¿Asistirás? */}
              <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
                <p style={{ ...labelStyle, textAlign: 'center', marginBottom: '1rem' }}>
                  ¿Contaremos con el placer de tu compañía?
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                  {[
                    { value: 'si', label: 'Claro que sí, allí estaré.' },
                    { value: 'no', label: 'Con gran pesar, no podré.' },
                  ].map(({ value, label }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setAsistencia(value)}
                      style={{
                        padding: '.7rem 1.4rem',
                        border: '1px solid rgba(154,189,216,.45)',
                        background: asistencia === value ? 'var(--plaque-blue)' : 'transparent',
                        color: asistencia === value ? 'var(--white)' : 'var(--sky-deep)',
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: 'italic',
                        fontSize: 14,
                        cursor: 'pointer',
                        transition: 'background .2s, color .2s',
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cupos (only if attending) */}
              {asistencia === 'si' && (
                <div style={{ marginBottom: '1.4rem', textAlign: 'left' }}>
                  <label style={labelStyle} htmlFor="cupos">
                    ¿Cuántos cupos de tu invitación utilizarás?
                  </label>
                  <p style={{ fontStyle: 'italic', fontSize: 12, color: 'var(--sky-mid)', lineHeight: 1.6, marginBottom: '.6rem' }}>
                    Si no todos los de tu grupo podrán asistir, indica aquí cuántos sí irán.
                  </p>
                  <input
                    id="cupos"
                    name="cupos"
                    type="number"
                    min="1"
                    value={cupos}
                    onChange={e => setCupos(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              )}

              {/* Nombre */}
              <div style={{ marginBottom: '1.4rem', textAlign: 'left' }}>
                <label style={labelStyle} htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  style={inputStyle}
                />
                <ValidationError field="nombre" prefix="Nombre" errors={state.errors}
                  style={{ color: '#c04040', fontSize: 11, fontStyle: 'italic' }} />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '1.8rem', textAlign: 'left' }}>
                <label style={labelStyle} htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@correo.com"
                  style={inputStyle}
                />
              </div>

              {/* Notices */}
              <div style={{
                fontSize: 12, color: 'var(--navy2)', lineHeight: 1.6,
                padding: '1rem', background: 'rgba(205,224,240,.15)',
                marginBottom: '1.6rem', textAlign: 'left',
              }}>
                <p style={{ marginBottom: '.6rem', lineHeight: 1.5 }}>
                  <strong>Celebración de adultos:</strong> con todo el amor del mundo, este es un evento reservado para adultos. Agradecemos su comprensión.
                </p>
                <p style={{ lineHeight: 1.8 }}>
                  <strong>Cupos no transferibles:</strong> esta invitación es exclusiva para las personas indicadas en ella. Si alguien de tu grupo no puede asistir, por favor infórmanos — con mucho gusto haremos el mejor uso posible de su lugar.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: state.submitting ? 'var(--sky-mid)' : 'var(--navy)',
                  color: 'var(--white)',
                  border: 'none',
                  fontFamily: "'Playfair Display SC', serif",
                  fontSize: 11,
                  letterSpacing: '.2em',
                  cursor: state.submitting ? 'wait' : 'pointer',
                  transition: 'background .3s',
                }}
              >
                {state.submitting ? 'Enviando...' : 'Confirmar'}
              </button>

              <ValidationError errors={state.errors}
                style={{ display: 'block', textAlign: 'center', marginTop: '.8rem', color: '#c04040', fontStyle: 'italic', fontSize: 13 }} />

              <p style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 13,
                color: 'var(--sky-mid)',
              }}>
                Por favor confirma antes del{' '}
                <strong style={{ color: 'var(--sky-deep)' }}>{RSVP_DEADLINE}</strong>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
