import { AnimatedBackground } from './components/Home/AnimatedBackground'
import { Header } from "./components/Header/Header";
import { Main } from "./components/Home/Main";
import { About } from './components/About/About';

export function App() {
  return (
    <>
      <AnimatedBackground className='animatedBackground' />
      <Header />
      <Main />
      <About />
    </>
  )
}