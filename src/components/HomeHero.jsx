import React from "react";
import DotsAnimate from "./DotsAnimate";

const HomeHero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-4 sm:pt-4 lg:pt-4 pb-16 sm:pb-20"
    >
      <DotsAnimate top="60%" left="45%" />
      <DotsAnimate top="2%" left="40px" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[8%] right-[-120px] sm:right-[5%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] bg-blue-100/60 blur-[80px] sm:blur-[100px] rounded-full"></div>

        <div className="absolute bottom-[5%] left-[-100px] sm:left-[5%] w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] bg-slate-100 blur-[70px] sm:blur-[90px] rounded-full"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 md:gap-16 lg:gap-12 xl:gap-20 items-center min-h-0 lg:min-h-[calc(100vh-150px)]">
          <div className="w-full">
            <p className=" text-gray-800 mb-4 tracking-[0.7px] bg-gray-200 flex items-center gap-2 px-2 rounded-[8px] text-[12px] sm:text-[9px] md:text-[11px] lg:text-[13px] w-fit">
              <span className="inline-block h-[9px] w-[9px] sm:h-[10px] sm:w-[10px] md:h-[11px] md:w-[11px] lg:h-[12px] lg:w-[12px] bg-blue-600 rounded-full"></span>
              Available for New Projects
            </p>

            <h1 className="text-[13vw] leading-[0.95] tracking-[-0.055em] font-bold sm:text-[9vw] md:text-[7.5vw] lg:text-[5.5vw] xl:text-[5.2vw] 2xl:text-[5vw] max-w-[900px]">
              Digital <span className="text-blue-600">experiences</span> that
              mean business.
            </h1>

            <p className="mt-2 sm:mt-4 max-w-[650px] mb-6 text-[14px] sm:text-[16px] lg:text-[17px] leading-7 sm:leading-8 text-slate-700">
              We design and develop modern websites for businesses that want to
              look credible, communicate clearly and turn visitors into
              customers.
            </p>

            <div className="flex items-center gap-2 flex-wrap mb-10">
              <button className="cursor-pointer bg-black border-2 border-black text-white hover:bg-white hover:text-black px-[20px] sm:px-[21px] md:px-[22px] lg:px-[20px] py-[8px] sm:py-[11px] lg:py-[12px] rounded-[5px] text-[12px] sm:text-[13px] lg:text-[14px] transition-all duration-300">
                Calculate Your Website
              </button>

              <button className="cursor-pointer bg-gray-100 border-2 text-black hover:bg-blue-400 hover:border-blue-400 hover:text-white px-[20px] sm:px-[21px] md:px-[22px] lg:px-[20px] py-[8px] sm:py-[11px] lg:py-[12px] rounded-[5px] text-[12px] sm:text-[13px] lg:text-[14px] transition-all duration-300">
                Expolore Services
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 mt-9 sm:mt-12 text-[11px] sm:text-[12px] text-slate-600">
              <span>Responsive by default</span>
              <span className="hidden sm:inline">•</span>
              <span>Clean UI</span>
              <span className="hidden sm:inline">•</span>
              <span>Built around your goals</span>
            </div>
          </div>

          <div className="relative w-full max-w-[600px] mx-auto lg:max-w-none mt-4 sm:mt-6 lg:mt-0">
            <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-5 w-14 h-14 sm:w-20 sm:h-20 border border-blue-200 rounded-full"></div>

            <div className="relative bg-slate-950 rounded-[22px] sm:rounded-[28px] p-2.5 sm:p-3 shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:shadow-[0_30px_80px_rgba(15,23,42,0.18)] rotate-[1deg]">
              <div className="bg-white rounded-[16px] sm:rounded-[20px] overflow-hidden">
                <div className="h-9 sm:h-11 border-b border-slate-100 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-300 rounded-full"></span>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-300 rounded-full"></span>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-300 rounded-full"></span>

                  <div className="ml-2 sm:ml-4 h-5 sm:h-6 flex-1 max-w-[220px] bg-slate-100 rounded-md"></div>
                </div>

                <div className="p-5 sm:p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <div className="w-16 sm:w-20 h-2.5 sm:h-3 bg-slate-900 rounded-full"></div>
                    <div className="w-12 sm:w-16 h-2.5 sm:h-3 bg-blue-100 rounded-full"></div>
                  </div>

                  <div className="mt-9 sm:mt-12">
                    <div className="w-[80%] h-4 sm:h-5 bg-slate-900 rounded-md"></div>

                    <div className="w-[55%] h-4 sm:h-5 bg-blue-500 rounded-md mt-2.5 sm:mt-3"></div>

                    <div className="w-full h-1.5 sm:h-2 bg-slate-100 rounded-full mt-6 sm:mt-7"></div>

                    <div className="w-[75%] h-1.5 sm:h-2 bg-slate-100 rounded-full mt-2"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mt-8 sm:mt-10">
                    <div className="h-20 sm:h-24 bg-blue-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-600 rounded-md sm:rounded-lg"></div>

                      <div className="w-14 sm:w-16 h-1.5 sm:h-2 bg-blue-200 rounded-full mt-3 sm:mt-4"></div>
                    </div>

                    <div className="h-20 sm:h-24 bg-slate-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-slate-900 rounded-md sm:rounded-lg"></div>

                      <div className="w-14 sm:w-16 h-1.5 sm:h-2 bg-slate-200 rounded-full mt-3 sm:mt-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-2 sm:-bottom-7 sm:-left-8 lg:-left-10 bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-slate-400">
                Estimated project
              </p>

              <div className="flex items-end gap-1 mt-1">
                <span className="text-xl sm:text-2xl font-semibold">$</span>
                <span className="text-2xl sm:text-3xl font-semibold">350</span>
              </div>

              <p className="text-[9px] sm:text-[10px] text-green-600 mt-1">
                Based on selected requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
