import { FadeIn, SectionHeader } from './UI.jsx';

// ── Replace these with your actual gallery images ───────────────────────────
// Put images in /public and reference as '/gallery-1.jpg', etc.
// Or import from /src/assets
const GALLERY_PHOTOS = [
  '/gallery-1.jpg',
  '/gallery-2.jpg',
  '/gallery-3.jpg',
];

const TOILE_BG = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cg fill='none' stroke='%23b8d0e8' stroke-width='0.7' opacity='0.22'%3E%3Ccircle cx='40' cy='40' r='12'/%3E%3Ccircle cx='40' cy='40' r='8'/%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3Cellipse cx='40' cy='25' rx='5' ry='9' transform='rotate(0 40 40)'/%3E%3Cellipse cx='40' cy='25' rx='5' ry='9' transform='rotate(60 40 40)'/%3E%3Cellipse cx='40' cy='25' rx='5' ry='9' transform='rotate(120 40 40)'/%3E%3C/g%3E%3C/svg%3E")`,
  backgroundSize: '200px 200px',
};

export default function Galeria() {
  return (
    <section
      id="galeria"
      style={{
        padding: '5rem 1.25rem',
        background: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
        ...TOILE_BG,
      }}
    >
      <div style={{ maxWidth: 960, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <FadeIn>
          <SectionHeader tag="Un vistazo a nosotros" title="Momentos" />
        </FadeIn>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
        }}>
          {GALLERY_PHOTOS.map((src, i) => (
            <FadeIn key={src} delay={i * 0.12}>
              <div style={{
                overflow: 'hidden',
                border: '1px solid rgba(184,208,232,.4)',
                boxShadow: '0 6px 30px rgba(26,46,66,.07)',
              }}>
                <img
                  src={src}
                  alt={`Kevin y Ariana ${i + 1}`}
                  style={{
                    width: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    aspectRatio: i === 1 ? '3/4' : '4/3',
                    transition: 'transform .5s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
