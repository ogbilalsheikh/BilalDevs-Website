
import React, { useState } from "react";

const ContactHome = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="w-full bg-white py-16 sm:py-20 md:py-24 lg:py-28 scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">

          <div>
            <p className="uppercase text-[13px] font-medium mb-2">
              05 Contact
            </p>

            <h2 className="text-[30px] sm:text-[25px] md:text-[30px] lg:text-[35px] leading-[1.15] font-bold tracking-[-0.03em]">
              Let's build something useful.
            </h2>

            <p className="mt-3 text-[14px] sm:text-[15px] md:text-[16px] leading-7 text-slate-500 max-w-md">
              Have a website idea, redesign project or business that needs
              a better digital presence? Tell me a little about it and
              let's discuss how I can help.
            </p>

            <div className="mt-10 space-y-5">

              <div className="border-t border-slate-200 pt-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Available for
                </p>
                <p className="text-sm font-medium text-slate-800 mt-1">
                  Freelance Projects & Junior Roles
                </p>
              </div>

              <div className="border-t border-slate-200 pt-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Services
                </p>
                <p className="text-sm font-medium text-slate-800 mt-1">
                  Web Development · UI/UX · Redesign
                </p>
              </div>

            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-slate-200 rounded-2xl p-5 sm:p-7 md:p-8 lg:p-10"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-sm outline-none focus:border-blue-500 focus:bg-white transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-sm outline-none focus:border-blue-500 focus:bg-white transition"
                  required
                />
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-2">
                  What do you need?
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-600 outline-none focus:border-blue-500 focus:bg-white transition"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="business-website">
                    Business Website
                  </option>
                  <option value="landing-page">
                    Landing Page
                  </option>
                  <option value="ui-ux">
                    UI / UX Design
                  </option>
                  <option value="website-redesign">
                    Website Redesign
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-2">
                  Estimated Budget
                </label>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-600 outline-none focus:border-blue-500 focus:bg-white transition"
                >
                  <option value="">Select budget</option>
                  <option value="150-300">$150 – $300</option>
                  <option value="300-500">$300 – $500</option>
                  <option value="500-1000">$500 – $1,000</option>
                  <option value="1000+">$1,000+</option>
                </select>
              </div>

            </div>

            <div className="mt-5">
              <label className="block text-xs font-medium text-slate-700 mb-2">
                Tell me about your project
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me what you want to build..."
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm resize-none outline-none focus:border-blue-500 focus:bg-white transition"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 w-full sm:w-auto px-7 py-3 rounded-lg bg-slate-950 text-white text-sm font-medium hover:bg-blue-600 transition duration-300"
            >
              Send Project Inquiry →
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactHome;
