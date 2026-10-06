import React from "react";
import { Monitor, Code2, PenTool, Smartphone, Sparkles } from "lucide-react";

const ServicePort = () => {
  const services = [
    {
      icon: Monitor,
      title: "Website Development",
      description:
        "Modern responsive websites built using clean, standards-compliant HTML, CSS, JavaScript, and React.",
      category: "Engineering",
      className: "",
    },
    {
      icon: Code2,
      title: "React Development",
      description:
        "Interactive, dynamic single-page web interfaces powered by reusable React components and robust state handling.",
      category: "Component Architecture",
      className: "",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description:
        "Clean and user-friendly website interfaces designed with intuitive user journeys and a balanced visual experience.",
      category: "Visual Systems",
      className: "",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Carefully optimized layouts for seamless readability across mobile, tablet, laptop, and desktop screens.",
      category: "Cross-device UI",
      className: "",
    },
    {
      icon: Sparkles,
      title: "Website Animations",
      description:
        "Smooth and modern micro-interactions and scroll-driven animations using GSAP, ScrollTrigger, and optimized CSS transitions.",
      category: "Micro-interactions",
      className: "md:col-span-2",
    },
  ];

  return (
    <section className="w-full bg-gray-100 min-h-[calc(100vh-180px)] px-5 sm:px-8 md:px-12 lg:px-10 xl:px-20 py-12">
      <div className="w-full">
        <div>
          <p className="uppercase text-[13px] font-medium">What I DO </p>
          <h1 className="text-[35px] font-bold">Services & Capabilities</h1>
          <h3 className="text-gray-500 text-[16px] font-medium">
            Focused, high-utility frontend and visual offerings executed with
            precision.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`group flex flex-col min-h-[220px] bg-white border border-gray-200 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-lg ${service.className}`}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-800 mb-5 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                <h2 className="text-[16px] font-semibold text-gray-900 mb-2">
                  {service.title}
                </h2>

                <p className="text-[13px] leading-[1.7] text-gray-500">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-auto pt-6 flex items-center gap-2 text-[12px] font-medium text-gray-800 w-fit"
                >
                  {service.category}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ›
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePort;
