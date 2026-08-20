import gsap from "gsap";
import Hero from "./components/Hero";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
    </main>
  );
};

export default App;
