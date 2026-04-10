import React from 'react'

function Services() {
  return (
     <div>
<div className="bg-black overflow-hidden relative min-h-screen py-10">

<section className="text-gray-400 body-font">

<div className="container mx-auto px-9 flex py-20 flex-col-reverse [@media(min-width:1123px)]:flex-row gap-16">
<div className="lg:flex-grow w-full [@media(min-width:1123px)]:w-1/2 flex flex-col gap-8 md:text-left text-center">
<button className="inline-flex items-center gap-2 
px-4 sm:px-5 py-2 
w-fit max-w-full
text-white text-sm sm:text-base 
bg-black/80 rounded-full border border-white/10 
shadow-[0_0_25px_rgba(255,255,255,0.15)] backdrop-blur-md">

  <span className="w-3 h-3 rounded-full border border-white flex items-center justify-center">
    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
  </span>

  Devlopment

  <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-white/30 blur-xl rounded-full"></span>
</button>
<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-semibold text-white ">
Services
</h1>

<p className="leading-relaxed text-white/70 max-w-xl">
Helping businesses standout with brand identity packaging that captivates and converts effectively
</p>
<div className="max-w-xl">

<div className="flex flex-wrap gap-4">

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
Modern Web Developmeny
</span>

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
Responsive & Mobile-First Design
</span>

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
Performance Optimization
</span>

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
React.js Applications
</span>

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
UI/UX Development
</span>
</div>

</div>
<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-6">

  {/* Button 1 */}
  <button className="px-6 py-3 text-white text-lg font-medium 
  bg-black rounded-[11.5px] 
  border border-white/40
  shadow-[0_0_12px_rgba(255,255,255,0.25)]">
    
    Book a Free Call
  </button>
  <button className="px-6 py-3 text-white text-lg font-medium 
  bg-black rounded-[11.5px] 
  border border-white/40
  shadow-[0_0_12px_rgba(255,255,255,0.25)]">
    
    See Projects
  </button>

</div>
</div>
<div className="w-screen -mx-9 [@media(min-width:1123px)]:w-1/2 [@media(min-width:1123px)]:mx-0 flex justify-center">

  <img
    className="w-full h-auto object-cover 
    rounded-none
    [@media(min-width:1123px)]:rounded-lg
    [@media(min-width:1123px)]:w-[600px]
    [@media(min-width:1123px)]:h-[520px]"
    alt="hero"
    src="developerpicture.png"
  />

</div>
</div>

</section>

</div>
   
    </div>
  )
}

export default Services