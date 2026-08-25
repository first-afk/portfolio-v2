const Works = () => {
  return (
    <section
      id="works"
      className="relative z-20 flex min-h-dvh px-10 py-10 flex-col"
    >
      <h1 className="font-mono whitespace-nowrap overflow-hidden border-r-2 w-0 tracking-wider title h-fit">
        ~/esther/works
      </h1>

      <div className="space-y-16 flex max-md:flex-col">
        <div className="md:w-1/2 w-2/3">
          <h2 className="heading-h1 font-playfair leading-[1.12] py-5 tracking-[0.02em] md:w-2/3">
            things i've created.
          </h2>
          <p className="leading-[1.63] py-5 tracking-wide font-normal text-sm md:w-2/3">
            A collection of projects, thoughts and experiences. Each one taught
            me something new.
          </p>
        </div>

        <div className="scrapbook-wrapper flex items-center justify-center">
          <img
            src="/images/tape2.png"
            className="tape-graphic h-15 w-50"
            alt="tape"
          />

          {/* <img src="paperclip.png" className="clip-graphic" alt="paperclip" /> */}

          <div className="torn-paper-container bg-mauve-200 flex items-center justify-center">
            <div className="torn-image-container">
              <img src="/images/name.png" alt="" className="torn-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
