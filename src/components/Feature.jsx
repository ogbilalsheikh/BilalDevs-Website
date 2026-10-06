import React from "react";
import CapWeb from "../assets/cap-web.png";
import Broadway from "../assets/Broadway-web.png";
import Client from "../assets/client-porfolio.png";
import Coahing from "../assets/coahing-web.png";
const Feature = () => {
  const projects = [
    {
      id: 1,
      title: "Agency.ai",
      category: "Creative Intelligence",
      technologies: ["React", "Tailwind CSS"],
      description:
        "Futuristic AI creative studio landing page with dark navy aesthetics and crisp modern typography.",
      image: "/images/agency.png",
      liveDemo: "#",
      github: "https://github.com/ogbilalsheikh/agency-website.git",
    },
    {
      id: 2,
      title: "Cap Website",
      category: "Fashion & Lifestyle",
      technologies: ["HTML/CSS", "JS"],
      description:
        "Contemporary e-commerce fashion editorial website featuring clean product grids and responsive catalog.",
      image: CapWeb,
      liveDemo: "https://ogbilalsheikh.github.io/cap-brand-website/",
      github: "https://github.com/ogbilalsheikh/cap-brand-website.git",
    },
    {
      id: 3,
      title: "Broadway Pizza",
      category: "Food & Restaurant",
      technologies: ["React", "Props"],
      description:
        "Artisanal gourmet pizza ordering web application with modular component architecture and interactive cart.",
      image: Broadway,
      liveDemo: "https://ogbilalsheikh.github.io/broadway-pizza/",
      github: "https://github.com/ogbilalsheikh/broadway-pizza.git",
    },
    {
      id: 4,
      title: "Coaching Website",
      category: "Mentorship Platform",
      technologies: ["HTML/CSS", "JS"],
      description:
        "Professional executive mentoring platform with structured program offerings and scheduling flows.",
      image: Coahing,
      liveDemo: "https://ogbilalsheikh.github.io/coaching-website/",
      github: "https://github.com/ogbilalsheikh/coaching-website.git",
    },
    {
      id: 5,
      title: "Netflix Replica",
      category: "Streaming Interface",
      technologies: ["HTML/CSS", "JS"],
      description:
        "Responsive streaming media browse interface recreating dynamic home banners and categorized horizontal carousels.",
      image: "/images/netflix.png",
      liveDemo: "#",
      github: "https://github.com/ogbilalsheikh/netflix-clone.git",
    },
    {
      id: 6,
      title: "Client Portfolio",
      category: "Personal Brand",
      technologies: ["React", "Tailwind"],
      description:
        "High-conversion personal brand website built with modular sections and seamless mobile responsiveness.",
      image: Client,
      liveDemo: "https://ogbilalsheikh.github.io/portfolio-website/",
      github: "https://github.com/ogbilalsheikh/portfolio-website.git",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 ">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="w-full h-full overflow-hidden rounded-xl border border-gray-200 bg-white flex flex-col transition-all duration-300 hover:border-gray-300 hover:shadow-lg"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-[200px] object-cover"
              />

              <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-center gap-3 min-h-[40px] mb-3">
                  <h2 className="text-lg font-semibold shrink-0">
                    {proj.title}
                  </h2>

                  <div className="flex flex-wrap justify-end gap-1">
                    {proj.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-6 mb-5">
                  {proj.description}
                </p>

                <div className="flex gap-3 mt-auto pt-1">
                  <a
                    href={proj.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-100 text-gray-900 text-sm px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
