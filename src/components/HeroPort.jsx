import React from "react";
import DotsAnimate from "./DotsAnimate";
import BlinkDot from "./BlinkDot";

const HeroPort = () => {
  return (
    <>
      <section className="relative w-full min-h-[calc(100vh-180px)] flex items-center px-5 sm:px-8 md:px-12 lg:px-10 xl:px-20 py-12">
        <div className="w-full max-w-4xl flex flex-col text-left">
          <p className="text-gray-800 tracking-[0.7px] bg-gray-200 flex items-center gap-2 px-2 rounded-[8px] text-[12px] sm:text-[9px] md:text-[11px] lg:text-[13px] w-fit">
            <BlinkDot />
            Available for freelance projects & roles
          </p>
          <h1 className="text-[13vw] tracking-[-0.055em] leading-none font-bold sm:text-[9vw] md:text-[7.5vw] lg:text-[5.5vw] xl:text-[5.2vw] 2xl:text-[5vw] max-w-[900px]">
            Hi, I'm Bilal <span className="text-blue-600">Sheikh</span>
          </h1>

          <h2 className="text-[17px] sm:text-[19px] md:text-[22px] lg:text-[22px] mb-4 text-gray-700 font-semibold">
            junior Front-End Web Developer & UI/UX Designer
          </h2>

          <div className="mb-6">
            <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[15px] text-gray-700">
              I builed modern, responsive and user-friendly website with clean
              interface
            </p>

            <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[15px] text-gray-700">
              smooth interaction and professional UI/UX
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap mb-10">
            <button className="cursor-pointer bg-black border-2 border-black text-white hover:bg-white hover:text-black px-[20px] sm:px-[21px] md:px-[22px] lg:px-[20px] py-[8px] sm:py-[11px] lg:py-[10px] rounded-[5px] text-[12px] sm:text-[13px] lg:text-[14px] transition-all duration-300">
              View My Work
            </button>

            <button className="cursor-pointer bg-gray-100 border-2 text-black hover:bg-blue-400 hover:border-blue-400 hover:text-white px-[20px] sm:px-[21px] md:px-[22px] lg:px-[20px] py-[8px] sm:py-[11px] lg:py-[10px] rounded-[5px] text-[12px] sm:text-[13px] lg:text-[14px] transition-all duration-300">
              Contact Me
            </button>
          </div>

          <div className="flex gap-2 sm:gap-3 md:gap-4 items-center flex-wrap">
            <p className="text-[11px] uppercase sm:text-[9px] md:text-[11px] lg:text-[12px] mr-[5px] sm:mr-[8px] font-semibold text-gray-700">
              core stack
            </p>

            <p className="bg-gray-300 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold px-[7px] sm:px-[8px] py-[4px] sm:py-[5px] rounded-[4px] text-gray-700">
              React
            </p>

            <span className="text-[12px] sm:text-[13px] lg:text-[14px]">.</span>

            <p className="bg-gray-300 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold px-[7px] sm:px-[8px] py-[4px] sm:py-[5px] rounded-[4px] text-gray-700">
              Javascript
            </p>

            <span className="text-[12px] sm:text-[13px] lg:text-[14px]">.</span>

            <p className="bg-gray-300 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold px-[7px] sm:px-[8px] py-[4px] sm:py-[5px] rounded-[4px] text-gray-700">
              Tailwind CSS
            </p>

            <span className="text-[12px] sm:text-[13px] lg:text-[14px]">.</span>

            <p className="bg-gray-300 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold px-[7px] sm:px-[8px] py-[4px] sm:py-[5px] rounded-[4px] text-gray-700">
              UI/UX
            </p>

            <span className="text-[12px] sm:text-[13px] lg:text-[14px]">.</span>

            <p className="bg-gray-300 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] font-semibold px-[7px] sm:px-[8px] py-[4px] sm:py-[5px] rounded-[4px] text-gray-700">
              GSAP
            </p>
          </div>
        </div>

        <DotsAnimate top="50%" left="70%" />
        <DotsAnimate top="2%" left="200px" />
      </section>
    </>
  );
};

export default HeroPort;
