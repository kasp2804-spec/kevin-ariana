// ── Site Data ──────────────────────────────────────────────────────────────
// Edit this file to update content across the whole site.

export const WEDDING_DATE = '2026-07-11T15:30:00';
export const RSVP_DEADLINE = '11 de junio de 2026';
export const FORMSPREE_ID = 'mdabryld'; // your Formspree form ID

export const VENUE = {
  name: 'Hotel Marriott Barranquilla',
  salon: 'Salón Puerto Colombia I',
  address: 'Calle 1A # 25-40 Lote D7',
  neighborhood: 'Portal del Genovés',
  city: 'Puerto Colombia, Atlántico',
  mapsUrl: 'https://maps.google.com/?q=Hotel+Marriott+Barranquilla',
  details: [
    { icon: '🕐', text: 'Ceremonia · 3:30 pm · Recepción a continuación' },
    { icon: '📍', text: '20 min del centro de Barranquilla' },
    { icon: '🅿️', text: 'Estacionamiento disponible en las instalaciones' },
  ],
};

export const NAV_LINKS = [
  { href: '#historia',   label: 'Historia' },
  { href: '#galeria',    label: 'Galería' },
  { href: '#vestimenta', label: 'Vestimenta' },
  { href: '#rsvp',       label: 'Asistencia' },
  { href: '#llegar',     label: 'Cómo Llegar' },
];

export const DRESSCODE = {
  formalidad: 'Etiqueta Rigurosa',
  subtitulo: 'Black Tie',
  hombres: {
    descripcion: 'Smoking negro\nCorbatín negro',
    pinterestUrl: 'https://www.pinterest.com/arianaraujo199712/vestimenta-hombres/',
  },
  mujeres: {
    descripcion: 'Vestido largo\nElegante',
    pinterestUrl: 'https://www.pinterest.com/arianaraujo199712/vestimenta-mujeres/',
  },
  coloresReservados: [
    { color: '#f8f4ef', name: 'Blanco',   border: '1px solid rgba(255,255,255,.4)' },
    { color: '#add8e6', name: 'Baby Blue', border: 'none' },
    { color: '#c0392b', name: 'Rojo',      border: 'none' },
  ],
};

export const REGALOS = {
  banco: 'Bancolombia — Cuenta de Ahorros',
  cuenta: '083-536170-02',
  llave: '@santoya633',
  // QR image: put your qr.png in /public and reference it here
  qrImage: '/qr.png',
};

export const HISTORIA = {
  tag: '· Su historia ·',
  title: 'El capítulo más hermoso\nde nuestras vidas',
  body: 'Nuestra historia no es casualidad. Es el eco de un amor infinitamente más grande que el nuestro; la obra paciente de un Dios que, en Su gracia, tomó dos vidas y las convirtió en una sola promesa.',
  cita: '«Y Él me ha dicho: «Te basta Mi gracia, pues Mi poder se perfecciona en la debilidad». Por tanto, con muchísimo gusto me gloriaré más bien en mis debilidades, para que el poder de Cristo more en mí.»',
  citaRef: '2 Corintios 12:9',
};
