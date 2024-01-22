import { useEffect } from 'react';
import { AnimatedBackground } from './components/Home/AnimatedBackground'
import { Header } from "./components/Header/Header";
import { Main } from "./components/Home/Main";
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export function App() {
  useEffect(() => {
    // Función que se ejecuta cada vez que hay un scroll
    const handleScroll = () => {
      // Obtener la posición actual de desplazamiento vertical
      const posicionY = window.scrollY;
      console.log("Posición Y:", posicionY);

      // Aquí puedes realizar acciones basadas en la posición Y, como cambiar estilos, cargar más contenido, etc.
    };

    // Agregar el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Eliminar el evento de scroll al desmontar el componente para evitar pérdidas de rendimiento
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <AnimatedBackground className='animatedBackground' />
      <Header />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}