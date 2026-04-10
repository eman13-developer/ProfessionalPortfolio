// "use client"
// import { testimonialsdata } from "./arrayobjedata/sliderdata"
// import React, { useEffect,useRef,useState} from "react"
// export default function TestimonialCards() {

//  const sliderRef = useRef(null)

//   const data = [...testimonialsdata, ...testimonialsdata]

//  useEffect(() => {
//   let raf
//   let position = 0
//   let lastTime = 0

//   const SPEED = 140 // adjust if needed

//   const track = sliderRef.current
//   if (!track) return

//   // 🔥 EXACT width of ONE card (including gap)
//   const firstCard = track.children[0]
//   const secondCard = track.children[1]

//   const cardWidth = firstCard.offsetWidth
//   const gap =
//     secondCard.offsetLeft - firstCard.offsetLeft - firstCard.offsetWidth

//   const STEP = cardWidth + gap

//   // 🔥 EXACT loop width (first set only)
//   const LOOP = STEP * testimonialsdata.length

//   const animate = (time) => {
//     if (!lastTime) lastTime = time
//     const delta = time - lastTime
//     lastTime = time

//     position += (SPEED * delta) / 1000

//     // ✅ PERFECT RESET (no delay ever)
//     if (position >= LOOP) {
//       position -= LOOP
//     }

//     track.style.transform = `translateX(-${position}px)`
//     raf = requestAnimationFrame(animate)
//   }

//   raf = requestAnimationFrame(animate)
//   return () => cancelAnimationFrame(raf)
// }, [])

//   return (
//     <div className="w-full overflow-hidden py-10 flex justify-center">

//       <div ref={sliderRef} className="flex gap-4 items-stretch will-change-transform translate-x-0">

//         {data.map((item, index) => (
//           <div
//             key={index}
//             className="min-w-[450px] max-w-[450px] flex-shrink-0 flex"
//           >
//             {/* CARD */}
//             <div className="flex flex-col justify-between h-full min-h-[320px] w-full text-white p-6 shadow-xl bg-gradient-to-b from-[#0d0d0d] to-transparent ">

//               {/* TOP CONTENT */}
//               <div>
//                 <div className="flex flex-col gap-4">
//                   <div className="w-20 h-20 rounded-full overflow-hidden">
//                     <img
//                       src={item.image}
//                       className={`w-full h-full object-cover ${
//                         item.id === 2 ? "" : "object-top"
//                       }`}
//                     />
//                   </div>

//                   <div>
//                     <h1 className="text-3xl font-semibold">{item.name}</h1>
//                     <p className="text-white/70 text-xl">{item.role}</p>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-800 my-4"></div>

//                 <p className="text-white/70 text-lg leading-relaxed">
//                   {item.text}
//                 </p>
//               </div>

//               {/* BOTTOM (rating always aligned) */}
//               <div className="flex items-center gap-2 mt-4">
//                 <span className="text-lg font-semibold">{item.rating}</span>
//                 <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
//               </div>

//             </div>
//           </div>
//         ))}

//       </div>
//     </div>

















//   )
// }








// "use client"
// import React from "react"
// import { testimonialsdata } from "./arrayobjedata/sliderdata"

// export default function TestimonialSlider() {
//   const data = [...testimonialsdata, ...testimonialsdata] // duplicate

//   return (
//     <div className="slider">

//       <div className="slide-track">

//         {data.map((item, index) => (
//           <div key={index} className="slide">

//             {/* CARD */}
//             <div className="card">

//               <div className="flex flex-col gap-4">
//                 <div className="w-20 h-20 rounded-full overflow-hidden">
//                   <img
//                     src={item.image}
//                     className={`w-full h-full object-cover ${
//                       item.id === 2 ? "" : "object-top"
//                     }`}
//                   />
//                 </div>

//                 <div>
//                   <h1 className="text-3xl font-semibold">{item.name}</h1>
//                   <p className="text-white/70 text-xl">{item.role}</p>
//                 </div>
//               </div>

//               <div className="border-t border-gray-700 my-3"></div>

//               <p className="text-white/70 text-lg leading-relaxed">
//                 {item.text}
//               </p>

//               <div className="mt-3 flex gap-2">
//                 <span>{item.rating}</span>
//                 ⭐⭐⭐⭐⭐
//               </div>

//             </div>

//           </div>
//         ))}

//       </div>
//     </div>
//   )
// }











// "use client"
// import React from "react"
// import { Swiper, SwiperSlide } from "swiper/react"

// import "swiper/css"

// import { Autoplay } from "swiper/modules"
// import { testimonialsdata } from "./arrayobjedata/sliderdata"

// export default function TestimonialSlider() {
//   return (
//     <div className="w-full overflow-hidden py-10">

//       <Swiper
//         modules={[Autoplay]}

//         loop={true}

//         speed={6000} // 🔥 constant smooth speed
//         autoplay={{
//           delay: 0, // ❌ no stop
//           disableOnInteraction: false,
//         }}

//         allowTouchMove={false} // 🔥 smooth auto only

//         slidesPerView={"auto"} // 🔥 IMPORTANT (fixed width)
//         spaceBetween={16}

//         className="w-full"
//       >

//         {testimonialsdata.map((item) => (
//           <SwiperSlide
//             key={item.id}
//             style={{ width: "450px" }} // 🔥 FIXED WIDTH
//             className="flex"
//           >

//             {/* CARD */}
//             <div className="flex flex-col justify-between h-full min-h-[320px] w-full text-white p-6 shadow-xl bg-gradient-to-b from-[#0d0d0d] to-transparent border border-gray-800 rounded-[10px]">

//               <div>
//                 <div className="flex flex-col gap-4">
//                   <div className="w-20 h-20 rounded-full overflow-hidden">
//                     <img
//                       src={`/images/${item.image}`}
//                       className={`w-full h-full object-cover ${
//                         item.id === 2 ? "" : "object-top"
//                       }`}
//                     />
//                   </div>

//                   <div>
//                     <h1 className="text-3xl font-semibold">{item.name}</h1>
//                     <p className="text-white/70 text-xl">{item.role}</p>
//                   </div>
//                 </div>

//                 <div className="border-t border-gray-800 my-4"></div>

//                 <p className="text-white/70 text-lg leading-relaxed">
//                   {item.text}
//                 </p>
//               </div>

//               <div className="flex items-center gap-2 mt-4">
//                 <span className="text-lg font-semibold">{item.rating}</span>
//                 <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
//               </div>

//             </div>

//           </SwiperSlide>
//         ))}

//       </Swiper>
//     </div>
//   )
// }





"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { Autoplay } from "swiper/modules"
import { testimonialsdata } from "./arrayobjedata/sliderdata"

export default function TestimonialSlider() {
  return (
    <div className="w-full overflow-hidden py-10 flex xl:justify-center">

      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}

        slidesPerView={"auto"}
        spaceBetween={16}

        className="w-full xl:max-w-[1400px]"
      >

        {testimonialsdata.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ width: "450px" }}
            className="flex"
          >

            {/* CARD */}
            <div className="flex flex-col justify-between h-full min-h-[350px] w-full text-white p-6 shadow-xl bg-gradient-to-b from-[#0d0d0d] to-transparent">

              {/* TOP */}
              <div>
                <div className="flex flex-col gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={item.image}
                      className={`w-full h-full object-cover ${
                        item.id === 2 ? "" : "object-top"
                      }`}
                    />
                  </div>

                  <div>
                    <h1 className="text-3xl font-semibold">{item.name}</h1>
                    <p className="text-white/70 text-xl">{item.role}</p>
                  </div>
                </div>

                <div className="border-t border-gray-800 my-4"></div>

                <p className="text-white/70 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="flex items-center gap-2 mt-4">
                <span className="text-lg font-semibold">{item.rating}</span>
                <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  )
}