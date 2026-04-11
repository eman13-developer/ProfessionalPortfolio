
import { RxCross1 } from "react-icons/rx";
import { BsStars } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navbar2({ closeMenu }) {
  return (

    <div className="fixed inset-0 bg-[#0000009d] text-white z-[9999] flex flex-col overflow-y-auto">

      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-4xl text-white/80 font-semibold">EMAN</h1>

        <button onClick={closeMenu} className="text-3xl">
          <RxCross1 />
        </button>
      </div>

      {/* Slide Menu */}
      <div className="flex flex-col items-center justify-center gap-8 text-xl mt-20 animate-slideDown">

        <ScrollLink to="home" smooth duration={500} onClick={closeMenu}>
          Home
        </ScrollLink>

        <ScrollLink to="about" smooth duration={500} onClick={closeMenu}>
          About
        </ScrollLink>

        <ScrollLink to="services" smooth duration={500} onClick={closeMenu}>
          Services
        </ScrollLink>

        <ScrollLink to="review" smooth duration={500} onClick={closeMenu}>
          Testimonial
        </ScrollLink>

        <RouterLink target="blank"
          to="/contact"
          onClick={closeMenu}
          className="flex items-center gap-2 mt-6 px-6 py-3 border border-white/20 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        >
          <BsStars />
          Contact me
        </RouterLink>

      </div>

    </div>
  );
}

export default Navbar2;