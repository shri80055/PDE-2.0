import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../Images/header-logo.png"
import Nic from "../Images/nic.png"
import { useNavigate } from "react-router-dom";
function NewHead() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header role="banner" className="w-full">
      
      {/* ===== Skip Links (GIGW Mandatory) ===== */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 bg-black text-white px-4 py-2 z-50"
      >
        Skip to main content
      </a>

      {/* ===== Top Utility Bar ===== */}
      <div className="bg-[#07303c] text-sm">
  <div className="w-full mx-auto px-4 py-2 flex justify-between items-center">
    
    {/* Hide on mobile */}
    <div className="hidden md:flex gap-4">
      <a href="#" className="text-white hover:underline">Skip to main content</a>
      <a href="#" className="text-white hover:underline">Sitemap</a>
      <a href="#" className="text-white hover:underline">Old Website</a>
    </div>

    <div className="flex items-center gap-3 ml-auto">
      <span className="text-white text-xs md:text-sm">
        📞 020-25679297
      </span>

      <button className="border text-white rounded px-2 py-0.5 text-xs">
        EN | म
      </button>

      <button className="border border-white rounded-full w-8 h-8 flex items-center justify-center">
        ♿
      </button>

      <Link
        to="/"
        className="bg-teal-600 text-white px-3 py-1 rounded text-xs"
      >
        Sign In
      </Link>
    </div>
  </div>
</div>


      {/* ===== Branding Bar ===== */}
      <div className="bg-[#0f4450] border-b">
  <div className="w-full mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:justify-between gap-3">
    
    {/* Left: Logo */}
    <div className="flex items-center gap-4">
      <img
        src={Logo}
        alt="Land Records Department Logo"
        className="h-20 md:h-20"
      />
    </div>

    {/* Desktop title */}
    <div className="hidden md:block text-center">
      <h1 className="text-lg font-semibold text-white">
        Public Data Entry System
      </h1>
      <p className="text-sm text-white">
        Land Records Department, Government of Maharashtra
      </p>
    </div>

    {/* Mobile title */}
    <div className="block md:hidden text-center">
      <h1 className="text-lg font-semibold text-white">
        Public Data Entry System
      </h1>
    </div>
  </div>
</div>


      {/* ===== Primary Navigation ===== */}
    {/* ===== Primary Navigation ===== */}
<nav
  role="navigation"
  aria-label="Primary Navigation"
  className="bg-[#258081]"
>
  <div className="max-w-7xl mx-auto px-4">

    {/* Mobile Toggle Button */}
    <div className="flex justify-between items-center md:hidden py-3">
      <span className="text-white font-semibold">Menu</span>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        className="text-white text-2xl focus:outline-none"
      >
        ☰
      </button>
    </div>

    {/* Navigation Links */}
    <ul
      className={`
        ${isOpen ? "block" : "hidden"}
        md:flex md:flex-wrap md:justify-center md:items-center
        gap-3 md:gap-10
        text-white text-sm font-medium
        pb-4 md:py-5
      `}
    >
      <li><Link to="/landing" onClick={() => setIsOpen(false)}>Home</Link></li>
      <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
      <li><a href="#" onClick={() => setIsOpen(false)}>Services</a></li>
      <li><Link to="/news" onClick={() => setIsOpen(false)}>News / Notices</Link></li>
      {/* <li><a href="#" onClick={() => setIsOpen(false)}>Gallery</a></li> */}
      <li><Link to="/faq" onClick={() => setIsOpen(false)}>FAQs</Link></li>
      <li><Link to="/" onClick={() => setIsOpen(false)}>Citizen Corner</Link></li>
      <li><Link to="/" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
    </ul>

  </div>
</nav>  



    </header>
  );
}

export default NewHead;
