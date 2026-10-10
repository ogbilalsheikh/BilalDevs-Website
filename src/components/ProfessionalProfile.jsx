import React from "react";

const ProfessionalProfile = () => {
  return (
    <section className="w-full bg-gray-100 min-h-[calc(100vh-180px)] px-5 sm:px-8 md:px-12 lg:px-10 xl:px-20 py-12">
      <div className="w-full">
        <div>
          <p className="uppercase text-[13px] font-medium">Profile </p>
          <h1 className="text-[35px] font-bold">Professional Profile</h1>
        </div>
        <div className="w-full bg-gray-200 flex flex-col md:flex-row gap-6 rounded-[20px] p-6 sm:p-7 md:p-8 mt-10">
          <div className="w-full md:w-[40%] flex flex-col mt-[10px] gap-8">
            <div>
              <p className="uppercase text-gray-500 font-semibold text-[12px]">
                Current Role
              </p>
              <h1 className="text-[22px] font-semibold">
                Senior Front-End Web Developer
              </h1>
            </div>

            <div>
              <p className="uppercase text-gray-500 font-semibold text-[12px]">
                Specialization
              </p>
              <h1 className="text-[18px] font-semibold">
                Front-End Development & UI/UX Design
              </h1>
            </div>
          </div>

          <div className="w-full md:w-[60%] border-l-0 md:border-l border-gray-300 pl-0 md:pl-8">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
              Professional Profile
            </p>

            <p className="text-gray-700 leading-7 max-w-3xl">
              I’m a Senior Front-End Web Developer and UI/UX Designer focused on
              creating modern, responsive, and user-friendly websites. I combine
              clean code with thoughtful design to build digital experiences
              that are visually polished, easy to use, and responsive across
              devices.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <p className="flex items-center gap-2 text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Open to Senior Roles
              </p>

              <p className="flex items-center gap-2 text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Freelance Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProfile;
