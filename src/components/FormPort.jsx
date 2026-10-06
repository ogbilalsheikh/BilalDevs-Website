import React from "react";

const FormPort = () => {
  return (
    <div className="w-full bg-gray-100 rounded-[20px] p-5 sm:p-7 md:p-8 lg:p-10 mt-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="flex-1">
          <p className="uppercase text-[11px] sm:text-[12px] font-semibold text-gray-500 mb-3">
            GET IN TOUCH
          </p>

          <h2 className="text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-semibold leading-[1.15]">
            Have an idea?
            <br />
            Let’s build it.
          </h2>

          <p className="text-[14px] sm:text-[15px] text-gray-600 leading-6 sm:leading-7 mt-4 max-w-md">
            Have a project in mind or just want to say hello? Feel free to reach
            out. I’m always open to discussing new ideas, websites, and creative
            opportunities.
          </p>

          <div className="mt-7 flex flex-col gap-2.5 w-full max-w-sm">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-[9px] px-4 py-3 hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-[7px] bg-gray-100 flex items-center justify-center text-[12px] font-bold text-gray-700 group-hover:bg-white group-hover:text-[#0A66C2] transition-all duration-300">
                  in
                </span>

                <span className="text-[13px] font-medium text-gray-700 group-hover:text-white transition-all duration-300">
                  LinkedIn
                </span>
              </div>

              <span className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">
                ↗
              </span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-[9px] px-4 py-3 hover:bg-[#24292F] hover:border-[#24292F] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-[7px] bg-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-700 group-hover:bg-white group-hover:text-[#24292F] transition-all duration-300">
                  GH
                </span>

                <span className="text-[13px] font-medium text-gray-700 group-hover:text-white transition-all duration-300">
                  GitHub
                </span>
              </div>

              <span className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">
                ↗
              </span>
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-[9px] px-4 py-3 hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-[7px] bg-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-700 group-hover:bg-white group-hover:text-[#25D366] transition-all duration-300">
                  WA
                </span>

                <span className="text-[13px] font-medium text-gray-700 group-hover:text-white transition-all duration-300">
                  WhatsApp
                </span>
              </div>

              <span className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="flex-1 bg-white rounded-[14px] p-5 sm:p-6 md:p-7 border border-gray-200">
          <div className="mb-6">
            <p className="text-[18px] sm:text-[19px] font-semibold text-gray-900">
              Tell me about your project
            </p>

            <p className="text-[13px] sm:text-[14px] text-gray-500 mt-1.5 leading-6">
              A few details are enough to get the conversation started.
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="text-[12px] sm:text-[13px] font-medium text-gray-600">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-[7px] px-3.5 py-2.5 text-[13px] outline-none focus:bg-white focus:border-gray-400 transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-[12px] sm:text-[13px] font-medium text-gray-600">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-[7px] px-3.5 py-2.5 text-[13px] outline-none focus:bg-white focus:border-gray-400 transition-all duration-300"
                />
              </div>
            </div>

            <div>
              <label className="text-[12px] sm:text-[13px] font-medium text-gray-600">
                What do you need?
              </label>

              <div className="flex flex-wrap gap-2 mt-2">
                <button
                  type="button"
                  className="px-3.5 py-2 rounded-full border border-gray-200 text-[12px] sm:text-[13px] text-gray-600 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Website
                </button>

                <button
                  type="button"
                  className="px-3.5 py-2 rounded-full border border-gray-200 text-[12px] sm:text-[13px] text-gray-600 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  UI/UX Design
                </button>

                <button
                  type="button"
                  className="px-3.5 py-2 rounded-full border border-gray-200 text-[12px] sm:text-[13px] text-gray-600 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Landing Page
                </button>

                <button
                  type="button"
                  className="px-3.5 py-2 rounded-full border border-gray-200 text-[12px] sm:text-[13px] text-gray-600 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  Other
                </button>
              </div>
            </div>

            <div>
              <label className="text-[12px] sm:text-[13px] font-medium text-gray-600">
                Project details
              </label>

              <textarea
                rows="4"
                placeholder="Tell me briefly what you're looking to build..."
                className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-[7px] px-3.5 py-3 text-[13px] outline-none resize-none focus:bg-white focus:border-gray-400 transition-all duration-300"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
              <p className="text-[11px] sm:text-[12px] text-gray-400">
                Usually reply within 24–48 hours.
              </p>
              <button className="group relative overflow-hidden cursor-pointer rounded-lg bg-blue-400 px-[16px] py-[8px] text-[14px] font-medium text-white transition-all duration-200 hover:bg-zinc-800">
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <span className="text-[15px] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPort;
