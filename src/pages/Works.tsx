import gsap from "gsap";
import { Card } from "../components/card";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { GitPullRequest, MailBadge, MailPlus } from "lucide-react";

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
      tl.from(".reveal", {
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
        className={`font-mono whitespace-nowrap overflow-hidden border-r-2 w-0 tracking-wider h-fit px-10 mt-8 z-10 title`}
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
          className={` max-md:w-2/3 w-1/2 md:px-18 ${isMobile ? "" : "sticky-container"}`}
        >
          <h2 className="heading-h1 font-playfair leading-[1.12] py-5 tracking-[0.02em] md:w-2/3">
            things i've created.
          </h2>
          <p className="leading-[1.63] py-5 tracking-wide font-normal text-lg md:w-2/3">
            A collection of projects, thoughts and experiences. Each one taught
            me a new skill.
          </p>
          <div className="font-caveat text-[#c33b2a] font-bold">
            <p className="text-3xl leading-[1.38] font-semibold underline underline-offset-6">
              Core skills
            </p>
            <ul className="text-lg">
              <li>React & TailwindCSS</li>
              <li>Next.JS</li>
              <li>TanStack Query</li>
              <li>Supabase DB</li>
            </ul>
          </div>
        </div>
        <div className="grid min-w-0 grid-cols-1 gap-x-5 gap-y-16 md:grid-cols-2 p-2 md:w-1/2">
          <div className="-rotate-2 md:-translate-x-4 md:-translate-y-10 ">
            <Card
              bg="bg-lime-200"
              image="optonews.png"
              id="01"
              category="health"
              title="optonews"
              description="A dedicated career and information portal for the optometry community."
              url="https://optonews.com.ng/"
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
              image="JobRank.png"
              id="02"
              category="AI"
              title="Job Rank"
              description="Job Rank is an AI-powered job matching engine that replaces rigid keyword filters with semantic vector search, helping candidates find opportunities that match their real skills and experience"
              url="https://job-rank.vercel.app/"
              className="torn-paper-container"
            />
          </div>
          <div className="rotate-2 md:-translate-x-2">
            <Card
              bg="bg-mist-300"
              image="skipfit.png"
              id="03"
              category="Health"
              title="Skip-fit"
              description="Skip Fit is a lightweight fitness-tracking web app to log workouts, quick-add common activities, and schedule simple calendar reminders. A read!"
              url="https://medium.com/@estherorieji2/create-a-chatbot-with-vercel-ai-sdk-googles-vertex-ai-7df8e2c4450d?sharedUserId=estherorieji2"
            />
          </div>
          <div className="-rotate-2 md:-translate-x-0.5 md:translate-y-24 ">
            <Card
              bg="bg-fuchsia-200"
              image="ekehi.png"
              id="04"
              category="Business"
              title="Ekehi"
              description="Ekehi is a business intelligence platform designed to support women entrepreneurs and women-led SMEs across Nigeria and Africa. The platform aggregates funding opportunities, financial products, training programs, and business resources into a searchable, filterable resource hub."
              url="https://ekehi.netlify.app/"
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

      <div className="h-screen p-8 md:p-20 flex items-center justify-center contact-card mt-20">
        <div className="relative rounded-2xl w-full h-fit bg-secondary px-10 py-5 grid grid-rows-[auto_1fr_auto]">
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
            <div className="flex max-md:flex-col items-start justify-start gap-4 p-3 text-primary">
              <a
                href="https://github.com/first-afk"
                className="inline-flex items-end justify-center gap-3"
              >
                <GitPullRequest className="size-5 rounded-sm" />{" "}
                <span className="text-xs opacity-50 leading-[1.33]">
                  Github
                </span>
              </a>
              <a href="" className="inline-flex items-end justify-center gap-3">
                <MailBadge className="size-5 rounded-sm" />{" "}
                <span className="text-xs opacity-50 leading-[1.33]">
                  LinkedIn
                </span>
              </a>
              <a href="" className="inline-flex items-end justify-center gap-3">
                <MailPlus className="size-5 rounded-sm" />{" "}
                <span className="text-xs opacity-50 leading-[1.33]">Mail</span>
              </a>
            </div>
            <p className="text-xs text-primary/50 mt-4 tracking-wide leading-[1.33]">
              &#169; 2026 ESTHER ORIEJI. ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
