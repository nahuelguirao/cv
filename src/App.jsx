import { AnimatedBackground } from './components/Home/AnimatedBackground'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { MainComponent } from './components/MainComponent';
import { TasklyInfo } from './components/Projects/principalProjects/TasklyInfo'
import { MovieWikiInfo } from './components/Projects/principalProjects/MovieWikiInfo';
import { StockManagerInfo } from './components/Projects/principalProjects/StockManagerInfo';
import { BizarrapAPIInfo } from './components/Projects/principalProjects/BizarrapAPIInfo';

export function App() {
  return (
    <>
      <AnimatedBackground className='animatedBackground' />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainComponent />} />
          <Route path='/taskly' element={<TasklyInfo />} />
          <Route path='/movieWiki' element={<MovieWikiInfo />} />
          <Route path='/stockManager' element={<StockManagerInfo />} />
          <Route path='/bizarrapAPI' element={<BizarrapAPIInfo />} />
          <Route path='/*' element={<MainComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}