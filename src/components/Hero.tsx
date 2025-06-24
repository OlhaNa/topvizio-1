import blobImage from "../assets/green-blob.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden font-sans flex items-center">
      {/* Green Blob (background) */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <img
          src={blobImage}
          alt="Green blob background"
          className="w-[1000px] md:w-[1200px] xl:w-[1400px] h-auto object-contain"
        />
      </div>

      {/* Hero Text Block */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 transform mt-[180px]">
        <div
          className="grid grid-cols-[minmax(60px,800px)_1fr] gap-y-[8px] text-[clamp(48px,10vw,200px)] font-black uppercase leading-[0.8] text-transparent bg-gradient-to-b from-white to-gray-400 bg-clip-text"
          style={{ fontFamily: '"Alumni Sans", sans-serif' }}
        >
          {/* Line 1: SUSTAINABLE */}
          <div className="col-span-2 pl-[60px]">SUSTAINABLE</div>

          {/* Line 2: DIGITAL & BUSINESS */}
          <div className="pl-[60px]">DIGITAL</div>
          <div className="text-right pr-[60px]">BUSINESS</div>

          {/* Line 3: TRANSFORMATION + scroll */}
          <div className="col-span-2 flex justify-start items-end pl-4 md:pl-12 lg:pl-[146px] pr-4 md:pr-10 lg:pr-[80px] gap-[50px]">
            <span className="text-[clamp(48px,10vw,180px)] font-black leading-none">
              TRANSFORMATION
            </span>
            <div className="flex flex-col items-end">
              <span className="text-[14px] md:text-[18px] lg:text-[22px] font-semibold leading-none mb-[20px] normal-case">
                Scroll to discover
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
