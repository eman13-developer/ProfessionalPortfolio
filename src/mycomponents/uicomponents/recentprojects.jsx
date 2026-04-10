import React from "react";
import { Projects } from "./arrayobjedata/projectsdata";

function Recentprojects() {
  return (
<div className="max-w-7xl mx-auto px-6 py-10">

  {/* Heading */}
  <h1 className="text-4xl text-white/70 mb-6">Recent Works</h1>

  {/* Line under heading */}
 <div className="py-10">
  <div className="w-full h-[1px] bg-white/10"></div>
</div>

  {/* Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {Projects.slice(0, 4).map((project) => (

      <a
        key={project.id}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block rounded-xl overflow-hidden aspect-[3/4]"
      >

        {/* Image */}
        <img
          src={project.img}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-300"></div>

        {/* Button */}
        <div className="absolute inset-0 flex items-end justify-center pb-6">
          <span className="px-6 py-2 bg-[#6363634d] text-white rounded-full border border-[#d6d6d6] shadow-[rgba(92,92,92,0.3)_0px_0px_20px_4px]">
            View My Projects →
          </span>
        </div>

      </a>

    ))}

  </div>

  {/* Line under cards */}
  <div className="w-full h-[1px] bg-white/10 mt-27"></div>

</div>
  );
}

export default Recentprojects;