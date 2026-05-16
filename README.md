# Kevin & Ariana · Boda 2026

Proyecto fuente de la invitación web. React + Vite.

---

## Estructura

```
kevin-ariana/
├── public/
│   ├── favicon.svg       ← ícono de la pestaña
│   ├── icons.svg         ← íconos SVG del sitio
│   ├── cover.jpg         ← foto portada (hero)
│   ├── couple.jpg        ← foto de la pareja (sección Historia)
│   ├── gallery-1.jpg     ← foto galería 1
│   ├── gallery-2.jpg     ← foto galería 2
│   ├── gallery-3.jpg     ← foto galería 3
│   └── qr.png            ← código QR Bancolombia
│
├── src/
│   ├── data.js           ← ✏️  TODO EL CONTENIDO EDITABLE AQUÍ
│   ├── App.jsx           ← Ensamble de secciones
│   ├── index.css         ← Variables de color, fuentes, animaciones
│   ├── main.jsx          ← Entry point
│   └── components/
│       ├── UI.jsx        ← Componentes compartidos (Monogram, FadeIn, etc.)
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Historia.jsx
│       ├── Galeria.jsx
│       ├── Vestimenta.jsx
│       ├── RSVP.jsx
│       ├── Regalos.jsx
│       ├── ComoLlegar.jsx
│       └── Footer.jsx
```

---

## Pasos para arrancar

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en local
npm run dev

# 3. Build para producción (sube la carpeta /dist a Netlify)
npm run build
```

---

## ✏️ Editar contenido

**Casi todo el contenido del sitio está en `src/data.js`.**  
Solo abre ese archivo y cambia los textos, fechas, links, datos bancarios, etc.

### Fotos
Pon tus imágenes en la carpeta `/public/` con estos nombres exactos:
- `cover.jpg` — foto de portada (hero, pantalla completa)
- `couple.jpg` — foto de la pareja (sección Historia)
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` — galería
- `qr.png` — código QR para transferencia

Si quieres usar otros nombres, cámbialos en cada componente en `/src/components/`.

### Formspree (formulario RSVP)
El ID de Formspree está en `src/data.js`:
```js
export const FORMSPREE_ID = 'mdabryld';
```

### Colores
Los colores del diseño están como variables CSS en `src/index.css`:
```css
:root {
  --navy: #1a2e42;
  --gold: #c9a84c;
  --sky-deep: #5a8aaa;
  /* ... */
}
```

---

## Deploy en Netlify

1. `npm run build` → genera la carpeta `dist/`
2. Sube `dist/` a Netlify drag-and-drop, **o** conecta este repositorio en GitHub y Netlify hará el build automáticamente.

Si conectas el repo en GitHub, Netlify detecta Vite automáticamente con:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
