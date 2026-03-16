
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import Navbar2 from "./navbar2";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-black text-white sticky! top-0! z-9999">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <h1 className="text-4xl text-white/80 font-semibold">
            EMAN
          </h1>

          {/* Links + Button (Desktop) */}
          <div className="hidden md:flex items-center gap-10 cursor-pointer">

            <nav className="flex gap-8 text-white/70 capitalize">
              <a className="hover:text-white">Services</a>
              <a className="hover:text-white">Projects</a>
              <a className="hover:text-white">Testimonials</a>
              <a className="hover:text-white">Contact</a>
            </nav>

            <button className="flex items-center gap-2 text-white/70 rounded-full py-2 px-6 border border-white/20 bg-white/10 hover:text-white! transition all ease-in-out duration-300 cursor-pointer">
              <BsStars />
              Get Template
            </button>

          </div>

          {/* Mobile Menu Icon */}
          <div
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <HiMenuAlt4 />
          </div>

        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && <Navbar2 closeMenu={() => setMenuOpen(false)} />}
    </>
  );
}

export default Navbar;