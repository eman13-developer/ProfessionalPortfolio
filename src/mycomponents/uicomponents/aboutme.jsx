import React from 'react'

function Aboutme() {
  return (
    <div>
<div className="bg-black overflow-hidden relative min-h-screen py-20">

<section className="text-gray-400 body-font">

<div className="container mx-auto px-6 flex py-24 md:flex-row flex-col-reverse gap-16 items-center">

{/* Left Content */}
<div className="lg:flex-grow md:w-1/2 flex flex-col gap-8 md:text-left text-center">

<h1 className="text-6xl font-semibold text-white">
Meet Eman
</h1>

<p className="leading-relaxed text-white/70 max-w-xl">
I'm Eman, a passionate Frontend Developer focused on building modern,
responsive, and interactive web interfaces. I specialize in HTML,
CSS, JavaScript, React, and Tailwind CSS. I enjoy transforming ideas
into clean digital experiences that are both functional and visually
appealing.
</p>

{/* Skills / Tools */}
<div className="max-w-xl">

<div className="flex flex-wrap gap-4">

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
HTML
</span>

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
CSS
</span>

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
JavaScript
</span>

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
React
</span>

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
Tailwind CSS
</span>

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
Git
</span>

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
GitHub
</span>

<span className="bg-[#111] border border-white/5 px-6 py-3 rounded-xl text-sm text-white/80 hover:bg-white/10 transition">
Figma
</span>

</div>

</div>
<div className="border-t border-white/10 pt-8">

<div className="grid grid-cols-3 text-white/70 gap-9 text-sm">

<p>Frontend Development</p>
<p>React Applications</p>
<p>Currently</p>

<p>Responsive Websites</p>
<p>Modern UI Design</p>
<p>2025-2026</p>

<p>Portfolio Projects</p>
<p>Personal Learning</p>
<p>2025-2026</p>

</div>

</div>

</div>

<div className="md:w-1/2 flex justify-center">

<img
className="h-[520px] w-[500px] object-cover rounded-lg"
alt="hero"
src="mine pic.png"
/>

</div>

</div>

</section>

</div>
   
    </div>
  )
}

export default Aboutme












