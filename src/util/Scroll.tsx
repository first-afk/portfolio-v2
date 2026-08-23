/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Hero from "../pages/Hero";
import Works from "../pages/Works";

const Scroll = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const worksRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    };
    const observerCallback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (location.pathname !== "/works") {
            navigate("/works", { replace: true });
          }
        } else {
          if (location.pathname !== "/") {
            navigate("/", { replace: true });
          }
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    if (worksRef.current) {
      observer.observe(worksRef.current);
    }
    return () => observer.disconnect();
  }, [navigate, location.pathname]);
  return (
    <div className="scroll-smooth">
      <Hero />
      <div ref={worksRef}>
        <Works />
      </div>
    </div>
  );
};

export default Scroll;
