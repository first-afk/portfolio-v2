import { Card } from "../components/card";

const Works = () => {
  return (
    <section id="works" className="relative z-20 flex min-h-dvh py-10 flex-col">
      <h1 className="font-mono whitespace-nowrap overflow-hidden border-r-2 w-0 tracking-wider title h-fit px-10">
        ~/esther/works
      </h1>
      <div className="absolute md:block hidden">
        <img
          src="/images/name.png"
          alt="display-image"
          className="rotate-80 -translate-x-40 translate-y-24 size-3/5"
        />
      </div>
      <div className="space-y-16 flex max-md:flex-col z-20 px-10 py-10 w-full">
        <div className="max-md:w-2/3 w-1/2 md:px-18">
          <h2 className="heading-h1 font-playfair leading-[1.12] py-5 tracking-[0.02em] md:w-2/3">
            things i've created.
          </h2>
          <p className="leading-[1.63] py-5 tracking-wide font-normal text-sm md:w-2/3">
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

          <div className="items-center justify-center flex ">
            <Card
              bg="bg-amber-300"
              className="h-36 w-fit items-center justify-center flex p-2"
            >
              <p className="w-2/3 leading-[1.38] text-2xl font-normal font-caveat">
                Currently building something cool ^_~
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
