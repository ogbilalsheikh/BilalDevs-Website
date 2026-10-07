import React, { useState } from "react";

const HomeCalculator = () => {
  const [websiteType, setWebsiteType] = useState(150);
  const [design, setDesign] = useState(0);
  const [features, setFeatures] = useState([
    {
      name: "Responsive Design",
      price: 0,
      label: "All devices",
      checked: true,
      disabled: true,
    },
  ]);

  const websiteOptions = [
    {
      name: "One Page Website",
      price: 150,
    },
    {
      name: "Business Website",
      price: 300,
    },
    {
      name: "Landing Page",
      price: 120,
    },
    {
      name: "E-commerce Website",
      price: 500,
    },
  ];

  const designOptions = [
    {
      name: "Standard",
      description: "Included",
      price: 0,
    },
    {
      name: "Premium",
      description: "+$100",
      price: 100,
    },
    {
      name: "Custom",
      description: "+$200",
      price: 200,
    },
  ];

  const featureOptions = [
    {
      name: "Responsive Design",
      description: "All devices",
      price: 0,
      disabled: true,
    },
    {
      name: "Contact Form",
      description: "+$30",
      price: 30,
    },
    {
      name: "Animations",
      description: "+$60",
      price: 60,
    },
    {
      name: "WhatsApp",
      description: "+$25",
      price: 25,
    },
    {
      name: "Basic SEO",
      description: "+$60",
      price: 60,
    },
    {
      name: "Dark Mode",
      description: "+$50",
      price: 50,
    },
  ];

  const handleFeatureChange = (feature) => {
    if (feature.disabled) return;

    const exists = features.some((item) => item.name === feature.name);

    if (exists) {
      setFeatures(features.filter((item) => item.name !== feature.name));
    } else {
      setFeatures([...features, feature]);
    }
  };

  const totalPrice =
    Number(websiteType) +
    Number(design) +
    features.reduce((total, feature) => total + feature.price, 0);

  return (
    <section
      id="pricing"
      className="py-20 sm:py-24 lg:py-28 bg-slate-50 scroll-mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 lg:px-10 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="uppercase text-[13px] font-medium">02 Pricing</p>

            <h2 className="text-2xl sm:text-3xl mb-4 md:text-4xl font-semibold tracking-[-0.04em] sm:tracking-[-0.045em] mt-1  leading-[1.08]">
              Know what your website might cost.
            </h2>
            <h3 className="text-gray-500 text-[16px] font-medium">
              Build your requirements below. The calculator gives you an instant
              starting estimate before we discuss the exact project.
            </h3>
            <div className="mt-8 sm:mt-10 border-t border-slate-200 pt-6 sm:pt-7 max-w-sm">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-slate-400">
                Starting from
              </p>

              <div className="flex items-end gap-1 mt-2">
                <span className="text-xl sm:text-2xl text-slate-700">$</span>

                <span className="text-4xl sm:text-5xl font-semibold text-slate-900">
                  150
                </span>
              </div>

              <p className="text-xs text-slate-400 mt-1">One page website</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
            <div className="flex items-start justify-between gap-5 pb-6 border-b border-slate-100">
              <div>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.15em]">
                  Project estimator
                </p>

                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mt-1.5">
                  Build your website
                </h3>
              </div>

              <div className="hidden sm:flex w-9 h-9 rounded-full bg-blue-50 text-blue-600 items-center justify-center text-sm">
                ↗
              </div>
            </div>

            <div className="mt-7">
              <label className="text-sm font-medium text-slate-800">
                What are you looking to build?
              </label>

              <select
                value={websiteType}
                onChange={(e) => setWebsiteType(Number(e.target.value))}
                className="mt-3 w-full border border-slate-200 bg-slate-50 text-slate-800 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition"
              >
                {websiteOptions.map((option) => (
                  <option key={option.name} value={option.price}>
                    {option.name} — ${option.price}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-7">
              <label className="text-sm font-medium text-slate-800">
                How much customization?
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                {designOptions.map((option) => (
                  <label key={option.name} className="cursor-pointer">
                    <input
                      type="radio"
                      name="design"
                      value={option.price}
                      checked={design === option.price}
                      onChange={() => setDesign(option.price)}
                      className="sr-only peer"
                    />

                    <div className="border border-slate-200 bg-white rounded-xl p-4 peer-checked:border-blue-500 peer-checked:bg-blue-50/50 hover:border-slate-400 transition">
                      <p className="text-sm font-medium text-slate-800">
                        {option.name}
                      </p>

                      <p className="text-xs text-slate-400 mt-1">
                        {option.description}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <label className="text-sm font-medium text-slate-800">
                Additional features
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {featureOptions.map((feature) => {
                  const isSelected = features.some(
                    (item) => item.name === feature.name,
                  );

                  return (
                    <label
                      key={feature.name}
                      className={`flex items-center justify-between border rounded-xl px-4 py-3.5 transition ${
                        feature.disabled
                          ? "border-blue-100 bg-blue-50/40 cursor-default"
                          : isSelected
                            ? "border-blue-500 bg-blue-50/50 cursor-pointer"
                            : "border-slate-200 bg-white hover:border-slate-400 cursor-pointer"
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          {feature.name}
                        </p>

                        <p className="text-xs text-slate-400 mt-1">
                          {feature.description}
                        </p>
                      </div>

                      <input
                        type="checkbox"
                        checked={isSelected}
                        disabled={feature.disabled}
                        onChange={() => handleFeatureChange(feature)}
                        className="accent-blue-600 w-4 h-4 shrink-0"
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 bg-slate-900 text-white rounded-2xl p-5 sm:p-6">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-slate-400">
                    Estimated investment
                  </p>

                  <div className="flex items-end gap-1 mt-1.5">
                    <span className="text-lg sm:text-xl">$</span>

                    <span className="text-4xl sm:text-5xl font-semibold tracking-tight">
                      {totalPrice}
                    </span>
                  </div>
                </div>

                <span className="text-blue-400 text-xl sm:text-2xl">↗</span>
              </div>

              <div className="border-t border-slate-700 mt-5 pt-5">
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.15em]">
                  Selected
                </p>

                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-300">
                  <li className="flex justify-between gap-4">
                    <span>
                      {
                        websiteOptions.find(
                          (item) => item.price === Number(websiteType),
                        )?.name
                      }
                    </span>

                    <span>${websiteType}</span>
                  </li>

                  <li className="flex justify-between gap-4">
                    <span>
                      {
                        designOptions.find(
                          (item) => item.price === Number(design),
                        )?.name
                      }
                    </span>

                    <span>{design === 0 ? "Included" : `+$${design}`}</span>
                  </li>

                  {features
                    .filter((feature) => feature.price > 0)
                    .map((feature) => (
                      <li
                        key={feature.name}
                        className="flex justify-between gap-4"
                      >
                        <span>{feature.name}</span>
                        <span>+${feature.price}</span>
                      </li>
                    ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="block text-center bg-blue-400 text-white rounded-xl py-3.5 mt-6 text-sm font-medium hover:bg-blue-500 transition"
              >
                Request This Website ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCalculator;
