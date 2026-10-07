import React from "react";

const AboutHome = () => {
  return (
    <section
      id="about"
      className="w-full py-16 sm:py-20 md:py-24 lg:py-28 bg-slate-50 scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 sm:gap-12 lg:gap-16">
          <div>
            <p className="uppercase text-[13px] font-medium mb-2">04 About</p>

            <h2 className=" text-[30px] sm:text-[25px] md:text-[30px] lg:text-[35px] leading-[1.15] font-bold tracking-[-0.03em]">
              Your website is part of your reputation.
            </h2>
          </div>

          <div>
            <p className="text-[17px] sm:text-[19px] md:text-[20px] lg:text-[21px] leading-[1.6] text-slate-700 max-w-3xl">
              We believe a website should do more than fill a screen. It should
              communicate what you do, make people trust your business and make
              the next step obvious.
            </p>

            <p className="text-[13px] sm:text-sm md:text-[15px] leading-7 text-slate-500 mt-6 sm:mt-8 max-w-2xl">
              BilalDevs focuses on modern frontend development and UI/UX design
              for businesses, freelancers, startups and personal brands. Every
              project is approached with attention to layout, usability,
              responsiveness and the details that make a digital experience feel
              professional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-5 mt-10 sm:mt-12">
              <div className="border-t border-slate-300 pt-4 sm:pt-5">
                <p className="text-[17px] sm:text-lg font-medium">Clean</p>

                <p className="text-[12px] sm:text-xs text-slate-500 leading-5 mt-2">
                  Clear interfaces and structured layouts.
                </p>
              </div>

              <div className="border-t border-slate-300 pt-4 sm:pt-5">
                <p className="text-[17px] sm:text-lg font-medium">Useful</p>

                <p className="text-[12px] sm:text-xs text-slate-500 leading-5 mt-2">
                  Every section has a reason to exist.
                </p>
              </div>

              <div className="border-t border-slate-300 pt-4 sm:pt-5">
                <p className="text-[17px] sm:text-lg font-medium">Responsive</p>

                <p className="text-[12px] sm:text-xs text-slate-500 leading-5 mt-2">
                  Designed for every screen size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
