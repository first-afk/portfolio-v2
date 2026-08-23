import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Scroll from "./util/Scroll";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Scroll />} />
        <Route path="/works" element={<Scroll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
