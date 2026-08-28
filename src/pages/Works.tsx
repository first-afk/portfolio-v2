import gsap from "gsap";
import { Card } from "../components/card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const worksRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: worksRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });
      tl.to("h1", {
        width: "25%", // Expands the width to reveal the hidden text
        duration: 1, // Make this faster (0.8s) so the user isn't waiting
        ease: "steps(10)", // Gives it that choppy typewriter feel. Adjust '14' based on character count
      }).from(".reveal", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.5,
        delay: 0.5,
      });
    },
    { scope: worksRef },
  );

  return (
    <section
      id="works"
      ref={worksRef}
      className="relative z-20 flex min-h-dvh flex-col"
    >
      <h1
        className={`font-mono whitespace-nowrap overflow-hidden border-r-2 w-0 tracking-wider h-fit px-10 mt-8 z-10`}
      >
        ~/esther/works
      </h1>
      <div className="absolute md:block hidden reveal">
        <img
          src="/images/name.png"
          alt="display-image"
          className="rotate-80 -translate-x-40 translate-y-26 size-3/5"
        />
      </div>

      <div className="space-y-16 flex max-md:flex-col z-20 px-10 py-10 w-full reveal">
        <div
          className={` ${isMobile ? "max-md:w-2/3 w-1/2 md:px-18" : "sticky-container"}`}
        >
          <h2 className="heading-h1 font-playfair leading-[1.12] py-5 tracking-[0.02em] md:w-2/3">
            things i've created.
          </h2>
          <p className="leading-[1.63] py-5 tracking-wide font-normal text-lg md:w-2/3">
            A collection of projects, thoughts and experiences. Each one taught
            me something new.
          </p>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-x-5 gap-y-16 md:grid-cols-2 p-2 md:w-1/2">
          <div className="-rotate-2 md:-translate-x-4 md:-translate-y-10 ">
            <Card
              bg="bg-lime-200"
              image="name.png"
              id="01"
              category="health"
              title="optonews"
              description="lorem ipsum set dolor met kini kor kini kor"
              url=""
            />
          </div>
          <div className="rotate-3 md:-translate-x-0.5 md:translate-y-10 scrapbook-wrapper">
            <img
              src="/images/tape2.png"
              className="tape-graphic h-12 w-50"
              alt="tape"
            />
            <Card
              bg="bg-mauve-200"
              image="name.png"
              id="01"
              category="health"
              title="optonews"
              description="lorem ipsum set dolor met kini kor kini kor"
              url=""
              className="torn-paper-container"
            />
          </div>
          <div className="rotate-2 md:-translate-x-2">
            <Card
              bg="bg-mist-300"
              image="name.png"
              id="01"
              category="health"
              title="optonews"
              description="lorem ipsum set dolor met kini kor kini kor"
              url=""
            />
          </div>
          <div className="-rotate-2 md:-translate-x-0.5 md:translate-y-24 ">
            <Card
              bg="bg-fuchsia-200"
              image="name.png"
              id="01"
              category="health"
              title="optonews"
              description="lorem ipsum set dolor met kini kor kini kor"
              url=""
            />
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-[25%]">
        <img
          src="/images/bulb.png"
          alt="display-image"
          className="translate-x-20 translate-y-26 size-2/5"
        />
      </div>
      <div className="absolute md:block hidden bottom-[30%] left-[18%]">
        <img
          src="/images/ruler.png"
          alt="display-image"
          className="translate-y-16 size-4/5 opacity-80"
        />
      </div>

      <div className="h-screen p-8 md:p-20 flex items-center justify-center contact-card">
        <div className="relative rounded-2xl w-full h-full max-md:max-h-4/5 bg-secondary px-10 py-3 grid grid-rows-[auto_1fr_auto]">
          <div>
            <p className="font-mono whitespace-nowrap tracking-wider text-primary/70 mt-7">
              ~/esther/contact
            </p>
          </div>

          <div className="mt-4">
            <p className="text-primary font-playfair text-[56px] md:text-6xl italic leading-[1.05] font-normal capitalize md:w-4/5 mb-3">
              want to bring your product to life?
            </p>
            <p className=" text-primary/70 tracking-wide leading-[1.33]">
              I build interfaces that fits your vision
            </p>
            <div className="rounded-full bg-primary p-4 tracking-wider uppercase leading-[1.43] font-medium w-fit mt-5 mb-4">
              Send a message
            </div>
          </div>
          <div className="hidden md:flex absolute items-center justify-center right-10 bottom-10 -rotate-8 -translate-x-0.5 -translate-y-3 shadow-xl shadow-black/60">
            <Card
              bg="bg-amber-300"
              className="h-36 w-fit items-center justify-center flex p-2"
            >
              <p className="w-2/3 leading-[1.38] text-2xl font-normal font-caveat">
                Currently building something cool ^_~
              </p>
            </Card>
          </div>
          <div className="copyright">
            <hr className="bg-primary/10 w-full h-0.5" />
            <p className="text-xs text-primary/50  mt-4">
              &#169; 2026 ESTHER ORIEJI. ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
