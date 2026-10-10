import React, { useState } from "react";
import Logo from "../assets/Logo-wbg.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HireMe from "./HireMe";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const base = import.meta.env.BASE_URL;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative z-50 m-4 flex h-[70px] items-center justify-between rounded-[20px] bg-white px-3 shadow-[0_0_25px_rgba(0,0,0,0.10)] sm:px-6 lg:px-1">
      <Link to="/" onClick={closeMenu}>
        <img
          className="w-[130px] sm:w-[150px] lg:w-[180px]"
          src={Logo}
          alt="VexsoraDevs Logo"
        />
      </Link>

      <nav className="hidden items-center gap-5 text-sm font-medium lg:flex xl:gap-7 xl:text-base">
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <a href={`${base}#services`} onClick={closeMenu}>
          Services
        </a>

        <Link to="/portfolio" onClick={closeMenu}>
          Portfolio
        </Link>

        <a href={`${base}#pricing`} onClick={closeMenu}>
          Pricing & Calculator
        </a>

        <a href={`${base}#about`} onClick={closeMenu}>
          About
        </a>

        <a href={`${base}#contact`} onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <div className="hidden pr-3 lg:block">
        <HireMe />
      </div>

      <button
        type="button"
        onClick={() => setMenuOpen(true)}
        className="p-2 lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={28} />
      </button>

      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeMenu}
      />

      <aside
        className={`fixed left-0 top-0 z-[60] h-screen w-[280px] bg-white p-5 shadow-2xl transition-transform duration-300 ease-in-out sm:w-[320px] ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <Link to="/" onClick={closeMenu}>
            <img
              className="w-[140px]"
              src={Logo}
              alt="VexsoraDevs Logo"
            />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            className="p-2"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-base font-medium">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <a href={`${base}#services`} onClick={closeMenu}>
            Services
          </a>

          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>

          <a href={`${base}#pricing`} onClick={closeMenu}>
            Pricing & Calculator
          </a>

          <a href={`${base}#about`} onClick={closeMenu}>
            About
          </a>

          <a href={`${base}#contact`} onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="mt-10">
          <HireMe />
        </div>
      </aside>
    </header>
  );
};

export default Header;