import { AnimatedBackground } from "./components/Home/AnimatedBackground";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainComponent } from "./components/MainComponent";
import { MovieWikiInfo } from "./components/Projects/principalProjects/MovieWikiInfo";
import { StockManagerInfo } from "./components/Projects/principalProjects/StockManagerInfo";
import { BizarrapAPIInfo } from "./components/Projects/principalProjects/BizarrapAPIInfo";
import { TodoBusInfo } from "./components/Projects/principalProjects/TodoBusInfo";

export function App() {
  return (
    <>
      <AnimatedBackground className="animatedBackground" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />} />
          <Route path="/todoBus" element={<TodoBusInfo />} />
          <Route path="/movieWiki" element={<MovieWikiInfo />} />
          <Route path="/stockManager" element={<StockManagerInfo />} />
          <Route path="/bizarrapAPI" element={<BizarrapAPIInfo />} />
          <Route path="/*" element={<MainComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
