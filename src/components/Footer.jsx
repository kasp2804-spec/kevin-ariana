import { Monogram } from './UI.jsx';

export default function Footer() {
  return (
    <footer style={{
      padding: '5rem 1.25rem',
      background: 'var(--navy)',
      textAlign: 'center',
    }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <Monogram size={48} />
      </div>

      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: 52,
        color: 'var(--white)',
        lineHeight: 1,
        marginBottom: '.6rem',
        letterSpacing: '-.015em',
      }}>
        K <span style={{ color: 'var(--gold)', fontSize: '.6em' }}>&</span> A
      </div>

      <span style={{
        fontFamily: "'Playfair Display SC', serif",
        fontSize: 9.5,
        letterSpacing: '.32em',
        color: 'var(--sky-mid)',
        display: 'block',
        marginBottom: '2rem',
      }}>
        11 · Julio · 2026
      </span>

      <div style={{ margin: '0 auto 2rem', maxWidth: 60, height: 1, background: 'rgba(154,189,216,.2)' }} />

      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: 'italic',
        fontSize: 14,
        color: 'rgba(154,189,216,.38)',
        maxWidth: 400,
        margin: '0 auto',
        lineHeight: 1.9,
      }}>
        "Te basta Mi gracia, pues Mi poder<br />
        se perfecciona en la debilidad."<br />
        <em style={{ fontSize: 12, letterSpacing: '.1em' }}>— 2 Corintios 12:9</em>
      </p>
    </footer>
  );
}
