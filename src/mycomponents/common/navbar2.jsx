
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { BsStars } from "react-icons/bs";

function Navbar2({ closeMenu }) {
  return (
     <div className="fixed inset-0 bg-black text-white z-[9999]">

      <div className="container mx-auto p-6 relative">
        <div className="flex justify-between items-center absolute left-0 right-0 top-0 px-6 py-4">

          <h1 className="text-4xl text-white/80 font-semibold">
            EMAN
          </h1>

          <button
            onClick={closeMenu}
            className="text-3xl"
          >
            <RxCross1 />
          </button>

        </div>

        <div className="pt-20 transition-all duration-1000! ease-in-out max-h-[400px] cursor-pointer">

          <nav className="flex flex-col gap-8 text-white/70 capitalize">

            <a className="hover:text-white">Services</a>
            <a className="hover:text-white">Projects</a>
            <a className="hover:text-white">Testimonials</a>
            <a className="hover:text-white">Contact</a>

          </nav>

          <button className="flex items-center gap-2 mt-10 text-white/70! rounded-full py-2 px-6 border border-white/20! bg-white/10 hover:text-white! transition all ease-in-out duration-300 cursor-pointer ">

            <BsStars />

            Get Template

          </button>

        </div>

      </div>

    </div>
  );
}

export default Navbar2;