import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-7">
          <div>
            <Link
              to="/BilalDevs-Website/"
              className="text-xl font-semibold tracking-[-0.04em]"
            >
              Vexsora<span className="text-blue-500">Devs</span>
            </Link>

            <p className="text-xs text-slate-500 mt-2">
              Digital experiences for modern businesses.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500">
            <Link
              to="/BilalDevs-Website/"
              className="hover:text-white transition"
            >
              Home
            </Link>

            <a href="#services" className="hover:text-white transition">
              Services
            </a>

            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          <p className="text-xs text-slate-600">© 2026 VexsoraDevs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
