import React, { useState } from "react";
import Logo from "../assets/Logo-wbg.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HireMe from "./HireMe";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="flex m-4 sticky top-[10px] h-[70px] rounded-[20px] bg-white shadow-[0_0_25px_rgba(0,0,0,0.10)] items-center justify-between px-3 sm:px-6 lg:px-1 relative z-50">
      <Link to="/BilalDevs-Website/" onClick={closeMenu}>
        <img
          className="w-[130px] sm:w-[150px] lg:w-[180px]"
          src={Logo}
          alt="Logo"
        />
      </Link>

      <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm xl:text-base font-medium">
        <Link to="/BilalDevs-Website/">Home</Link>

        <a href="/BilalDevs-Website/#services">Services</a>

        <Link to="/BilalDevs-Website/portfolio">Portfolio</Link>

        <a href="/BilalDevs-Website/#pricing">Pricing & Calculator</a>

        <a href="/BilalDevs-Website/#about">About</a>

        <a href="/BilalDevs-Website/#contact">Contact</a>
      </nav>

      <div className="hidden lg:block pr-3">
        <HireMe />
      </div>

      <button
        onClick={() => setMenuOpen(true)}
        className="lg:hidden p-2"
      >
        <Menu size={28} />
      </button>

      <div
        className={`fixed inset-0 bg-black/40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      ></div>

      <aside
        className={`fixed left-0 top-0 h-screen w-[280px] sm:w-[320px] bg-white z-[60] p-5 shadow-2xl transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <Link to="/" onClick={closeMenu}>
            <img className="w-[140px]" src={Logo} alt="Logo" />
          </Link>

          <button onClick={closeMenu} className="p-2">
            <X size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-base font-medium">
          <Link to="/BilalDevs-Website/" onClick={closeMenu}>
            Home
          </Link>

          <a href="/BilalDevs-Website/#services" onClick={closeMenu}>
            Services
          </a>

          <Link to="/BilalDevs-Website/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>

          <a href="/BilalDevs-Website/#pricing" onClick={closeMenu}>
            Pricing & Calculator
          </a>

          <a href="/BilalDevs-Website/#about" onClick={closeMenu}>
            About
          </a>

          <a href="/BilalDevs-Website/#contact" onClick={closeMenu}>
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