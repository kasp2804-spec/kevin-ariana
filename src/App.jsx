import Navbar    from './components/Navbar.jsx';
import Hero      from './components/Hero.jsx';
import Historia  from './components/Historia.jsx';
import Galeria   from './components/Galeria.jsx';
import Vestimenta from './components/Vestimenta.jsx';
import RSVP      from './components/RSVP.jsx';
import Regalos   from './components/Regalos.jsx';
import ComoLlegar from './components/ComoLlegar.jsx';
import Footer    from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Historia />
      <Galeria />
      <Vestimenta />
      <RSVP />
      <Regalos />
      <ComoLlegar />
      <Footer />
    </>
  );
}
