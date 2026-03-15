// // import React from 'react'
// // import { BsStars } from "react-icons/bs";
// // import { RxCross1 } from "react-icons/rx";
// // function Navbar2() {
    
// //   return (
// //   <header className="text-white bg-black body-font">
// //       <div className="container mx-auto p-6">

      
// //         <div className="flex justify-between items-start">

// //           <div className="flex flex-col gap-6">

// //             <h1 className="text-3xl text-white/80 font-medium">
// //               EMAN
// //             </h1>
// //             <nav className="flex flex-col gap-8 capitalize text-white/70 text-lg">

// //               <a className="hover:text-white transition duration-300 cursor-pointer">
// //                 Services
// //               </a>

// //               <a className="hover:text-white transition duration-300 cursor-pointer">
// //                 Projects
// //               </a>

// //               <a className="hover:text-white transition duration-300 cursor-pointer">
// //                 Testimonials
// //               </a>

// //               <a className="hover:text-white transition duration-300 cursor-pointer">
// //                 Contact
// //               </a>

// //             </nav>

// //             <button className="flex items-center gap-2 rounded-full py-2 px-6 border border-white/30 bg-white/10 text-white/80 hover:bg-white hover:text-black transition duration-300 w-fit"
// //             >

// //               <BsStars />

// //               View Template

// //             </button>

// //           </div>

          
// //           <button className="text-2xl text-white hover:rotate-90 transition duration-300">
// //             <RxCross1 />
// //           </button>

// //         </div>

// //       </div>
// //     </header>
// //   )
// // }

// // export default Navbar2







// import React from "react";
// import { RxCross1 } from "react-icons/rx";
// import { BsStars } from "react-icons/bs";

// function Navbar2({ closeMenu }) {
//   return (
//     <div className="fixed inset-0 bg-black text-white">

//       <div className="container mx-auto p-6">

//         {/* Top bar */}
//         <div className="flex justify-between items-center mb-10">

//           <h1 className="text-4xl text-white/80">
//             EMAN
//           </h1>

//           <button
//             onClick={closeMenu}
//             className="text-3xl"
//           >
//             <RxCross1 />
//           </button>

//         </div>

//         {/* Menu Links */}
//         <nav className="flex flex-col gap-8 text-2xl text-white/70 capitalize animate-slideDown">

//           <a className="hover:text-white">Services</a>
//           <a className="hover:text-white">Projects</a>
//           <a className="hover:text-white">Testimonials</a>
//           <a className="hover:text-white">Contact</a>

//         </nav>

//         {/* Button */}
//         <button className="flex items-center gap-2 mt-10 rounded-full py-2 px-6 border border-white/20 bg-white/10 hover:bg-white hover:text-black transition">

//           <BsStars />

//           Get Template

//         </button>

//       </div>

//     </div>
//   );
// }

// export default Navbar2;



// import React from "react";
// import { RxCross1 } from "react-icons/rx";
// import { BsStars } from "react-icons/bs";

// function Navbar2({ closeMenu }) {
//   return (
//     <div className="fixed inset-0 bg-black text-white">

//       <div className="container mx-auto p-6">

//         {/* Top bar */}
//         <div className="flex justify-between items-center mb-6">

//           <h1 className="text-4xl text-white/80">
//             EMAN
//           </h1>

//           <button
//             onClick={closeMenu}
//             className="text-3xl"
//           >
//             <RxCross1 />
//           </button>

//         </div>

//         {/* Smooth Expand Section */}
//         <div className="overflow-hidden transition-all duration-30 ease-in-out max-h-[400px]">

//   <nav className="flex flex-col gap-8 text-2xl text-white/70 capitalize mt-8">

//     <a className="hover:text-white">Services</a>
//     <a className="hover:text-white">Projects</a>
//     <a className="hover:text-white">Testimonials</a>
//     <a className="hover:text-white">Contact</a>

//   </nav>

//   <button className="flex items-center gap-2 mt-10 rounded-full py-2 px-6 border border-white/20 bg-white/10 hover:bg-white hover:text-black transition">
//     <BsStars />
//     Get Template
//   </button>

// </div>

//       </div>

//     </div>
//   );
// }

// export default Navbar2;








import React from "react";
import { RxCross1 } from "react-icons/rx";
import { BsStars } from "react-icons/bs";

function Navbar2({ closeMenu }) {
  return (
    <div className="fixed inset-0 bg-black text-white z-9999! sticky top-0">

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