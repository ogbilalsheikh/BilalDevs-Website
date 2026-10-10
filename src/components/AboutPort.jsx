import React from "react";

const AboutPort = () => {
  return (
    <section className="w-full bg-gray-100 min-h-[calc(100vh-180px)] px-5 sm:px-8 md:px-12 lg:px-10 xl:px-20 py-12">
      <div className="w-full">
        <div className=" max-w-[750px] mb-12">
          <p className="uppercase text-[13px] font-medium">
            about me
          </p>
          <h1 className="text-[35px] font-bold">
            A Little About Who I Am
          </h1>
          <h3 className="text-gray-500 text-[16px] font-medium">
            A glimpse into my journey, creative approach, and passion for
            building meaningful digital experiences.
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div className="lg:pt-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-blue-400"></span>

              <span className="text-[13px] font-medium uppercase tracking-[2px] text-gray-500">
                About Me
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] font-semibold text-gray-900 max-w-[520px]">
              Crafting purposeful digital experiences with code and design.
            </h2>

            <div className="mt-7 space-y-5 max-w-[540px]">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-7">
                I am a Senior front-end developer and UI/UX designer dedicated
                to bridging the gap between aesthetic design systems and clean,
                performant engineering.
              </p>

              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-7">
                Every project begins with clarity of user intent in Figma and is
                built out into accessible, responsive interfaces using modern
                web technologies.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span>Focused on thoughtful design & clean development</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-blue-400"></span>

                <span className="text-[13px] font-medium uppercase tracking-[2px] text-gray-500">
                  Key Focus Areas
                </span>
              </div>

              <span className="text-xs text-gray-400">05</span>
            </div>

            <div className="flex flex-col">
              <div className="group flex gap-5 py-5 border-b border-gray-200">
                <span className="text-sm text-gray-400 font-medium">01</span>

                <div>
                  <h3 className="text-[16px] font-medium text-gray-800 mb-1 group-hover:text-blue-500 transition-colors">
                    Modern responsive websites
                  </h3>

                  <p className="text-sm leading-6 text-gray-500">
                    Fluid layouts optimized across desktop, tablet, and mobile
                    displays.
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 py-5 border-b border-gray-200">
                <span className="text-sm text-gray-400 font-medium">02</span>

                <div>
                  <h3 className="text-[16px] font-medium text-gray-800 mb-1 group-hover:text-blue-500 transition-colors">
                    Clean and reusable UI components
                  </h3>

                  <p className="text-sm leading-6 text-gray-500">
                    Modular architecture ensuring predictable scalability and
                    maintainability.
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 py-5 border-b border-gray-200">
                <span className="text-sm text-gray-400 font-medium">03</span>

                <div>
                  <h3 className="text-[16px] font-medium text-gray-800 mb-1 group-hover:text-blue-500 transition-colors">
                    User-friendly interfaces
                  </h3>

                  <p className="text-sm leading-6 text-gray-500">
                    Logical visual hierarchy that reduces cognitive friction for
                    end users.
                  </p>
                </div>
              </div>

              <div className="group flex gap-5 py-5">
                <span className="text-sm text-gray-400 font-medium">05</span>

                <div>
                  <h3 className="text-[16px] font-medium text-gray-800 mb-1 group-hover:text-blue-500 transition-colors">
                    Professional website design
                  </h3>

                  <p className="text-sm leading-6 text-gray-500">
                    Cohesive brand typography, balanced whitespace, and refined
                    color harmony.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPort;
