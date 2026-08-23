import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useRef } from "react";
// import { useMediaQuery } from "react-responsive";
import { Carousel } from "../components/ui/carousel";
import { SplitText } from "gsap/all";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  // const isMobile = useMediaQuery({ maxWidth: 760 });

  useGSAP(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;

    const heroSplit = new SplitText(".hero_text", { type: "lines" });
    const heroTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.2,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=200",
        scrub: 0.2,
        pin: true,
      },
    });

    heroTrigger.to(heroSplit.lines, {
      opacity: 0,
      yPercent: -15,
      ease: "expo.out",
      stagger: 0.06,
      delay: 0.8,
      duration: 18,
    });

    const handleLoadedMetadata = () => {
      tl.to(video, {
        currentTime: video.duration - 0.01,
        ease: "none",
        duration: 6,
      });
    };
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.onloadedmetadata = handleLoadedMetadata;
    }
  }, []);
  return (
    <>
      <section
        ref={heroRef}
        id="hero"
        className="hero relative z-10 min-h-dvh w-full overflow-hidden border border-transparent px-10 py-10 space-y-5 "
      >
        <div className="video absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="absolute inset-0 z-0 h-dvh w-full object-cover"
            muted
            playsInline
            preload="auto"
          >
            <source
              src="/videos/meadow-mobile.mp4"
              type="video/mp4"
              media="(max-width: 568px)"
            />
            <source
              src="/videos/meadow-tab.mp4"
              type="video/mp4"
              media="(max-width: 1024px)"
            />
            <source src="/videos/meadow-optimized.mp4" type="video/mp4" />
          </video>
          {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/3 bg-linear-to-t from-black/90 via-black/50 to-transparent"
        /> */}
        </div>

        <div className="hero_text">
          <div className="flex justify-between items-start ">
            <div className="flex max-md:flex-col md:gap-2 md:items-center justify-center">
              <p className="max-md:text-[14px] font-semibold leading-[1.43]">
                Esther Orieji
              </p>
              <p className="max-md:text-[12px] font-normal leading-[1.33] text-gray-400">
                Frontend Engineer
              </p>
            </div>
            <p className="text-[12px] leading-[1.33]  inline-flex justify-center items-center gap-1.5">
              Contact me{" "}
              <span>
                {" "}
                <ArrowUpRight className="size-3.5 text-gray-400" />
              </span>
            </p>
          </div>

          <div className="py-10 md:w-2/3">
            <h1 className="leading-[1.05] tracking-tight font-playfair">
              Building <span className="text-primary">design-led</span> digital
              products
              <span className="inline-flex items-center justify-center ml-2 ">
                {" "}
                <Sparkles className="size-12 mr-3 max-sm:hidden" />
                one at a time.
              </span>
            </h1>
          </div>

          <div className="md:mt-36 mt-15">
            <Carousel />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
