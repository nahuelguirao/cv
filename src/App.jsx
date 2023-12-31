import { AnimatedBackground } from './components/Home/AnimatedBackground'
import { Header } from "./components/Header/Header";
import { Main } from "./components/Home/Main";
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';

export function App() {
  return (
    <>
      <AnimatedBackground className='animatedBackground' />
      <Header />
      <Main />
      <About />
      <Contact />
    </>
  )
}