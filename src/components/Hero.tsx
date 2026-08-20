import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 760 });

  useGSAP(() => {
    const startValue = isMobile ? "top 50%" : "top top";
    const endvalue = isMobile ? "120% top" : "bottom top";
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endvalue,
        scrub: true,
        pin: true,
      },
    });
    if (!videoRef.current) return;

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current?.duration,
      });
    };
  }, []);
  return (
    <>
      <section
        id="hero"
        className="relative z-10 min-h-dvh w-full border border-transparent"
      >
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic</p>
              <p className="subtitle">
                Sip the spirit <br />
                of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes - designed to delight your
                senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          className="w-full absolute inset-0 md:object-contain object-cover"
          src="/videos/meadow.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
