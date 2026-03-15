
// import React from "react";
// import { BsStars } from "react-icons/bs";
// import { HiMenuAlt4 } from "react-icons/hi";
// import Navbar2 from "./navbar2";

// function Navbar() {

//   return (
//     <div>

//     <header className="bg-black text-white">
//       <div className="container mx-auto flex items-center justify-between px-6 py-4">

//         {/* Logo */}
//         <h1 className="text-4xl font-semibold text-white/80">
//           EMAN
//         </h1>

//         {/* Links + Button (Desktop Only) */}
//         <div className="hidden md:flex items-center gap-10">

//           <nav className="flex items-center gap-8 text-white/70 capitalize">
//             <a className="hover:text-white transition">Services</a>
//             <a className="hover:text-white transition">Projects</a>
//             <a className="hover:text-white transition">Testimonials</a>
//             <a className="hover:text-white transition">Contact</a>
//           </nav>

//           <button className="flex items-center gap-2 rounded-full py-2 px-6 border border-white/20 bg-white/10 hover:bg-white hover:text-black transition">
//             <BsStars />
//             Get Template
//           </button>

//         </div>

//         {/* Menu Icon (Mobile Only) */}
//         <div className="text-3xl md:hidden cursor-pointer" onClick={() => setMenuOpen(true)}>
//           <HiMenuAlt4 />
//         </div>

//       </div>
//     </header>
//     </div>
//   );
// }

// export default Navbar;














// import React, { useState } from "react";
// import { BsStars } from "react-icons/bs";
// import { HiMenuAlt4 } from "react-icons/hi";
// import Navbar2 from "./navbar2";

// function Navbar() {

//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <header className="bg-black text-white">
//         <div className="container mx-auto flex items-center justify-between px-6 py-4">

//           <h1 className="text-3xl text-white/80">
//             EMAN
//           </h1>

//           {/* Desktop Links */}
//           <nav className="hidden md:flex gap-8 text-white/70 capitalize">
//             <a>Services</a>
//             <a>Projects</a>
//             <a>Testimonials</a>
//             <a>Contact</a>
//           </nav>

//           {/* Button */}
//           <button className="hidden md:flex items-center gap-2 rounded-full py-2 px-6 border border-white/20 bg-white/10">
//             <BsStars />
//             Get Template
//           </button>

//           {/* Mobile Menu Icon */}
//           <div
//             className="text-3xl md:hidden cursor-pointer"
//             onClick={() => setMenuOpen(true)}
//           >
//             <HiMenuAlt4 />
//           </div>

//         </div>
//       </header>

//       {/* Mobile Menu */}
//       {menuOpen && <Navbar2 closeMenu={() => setMenuOpen(false)} />}
//     </>
//   );
// }

// export default Navbar;

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