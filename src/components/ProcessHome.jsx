import React from "react";

const ProcessHome = () => {
  return (
    <section className="w-full min-h-[calc(100vh-180px)] px-5 sm:px-8 md:px-12 lg:px-10 xl:px-20 py-12">
      <div className="w-full">
        <div>
          <p className="uppercase text-[13px] font-medium mb-2">03 Process</p>
          <div className="leading-none">
            <h1 className="text-[35px] font-bold">Simple process. Serious</h1>
            <h1 className="text-[35px] font-bold">results.</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-16 border-t border-gray-300">
          <div className="md:border-r border-gray-300 pt-4 pl-2">
            <p className="text-blue-500 text-[13px] mb-5">01</p>
            <h1 className="font-semibold text-[17px] mb-3">Discover</h1>
            <p className="text-gray-500 text-[13px]">
              We understand your business, audience and exact website goals.
            </p>
          </div>

          <div className="md:border-r border-gray-300 pt-4 pl-2">
            <p className="text-blue-500 text-[13px] mb-5">02</p>
            <h1 className="font-semibold text-[17px] mb-3">Structure</h1>
            <p className="text-gray-500 text-[13px]">
              Content, layout and user flow are organized before development.
            </p>
          </div>

          <div className="md:border-r border-gray-300 pt-4 pl-2">
            <p className="text-blue-500 text-[13px] mb-5">03</p>
            <h1 className="font-semibold text-[17px] mb-3">Build</h1>
            <p className="text-gray-500 text-[13px]">
              The design becomes a responsive, functional and polished website.
            </p>
          </div>

          <div className="pt-4 pl-2">
            <p className="text-blue-500 text-[13px] mb-5">04</p>
            <h1 className="font-semibold text-[17px] mb-3">Launch</h1>
            <p className="text-gray-500 text-[13px]">
              We test the experience and prepare the website for launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHome;
