import Threads from "../../components/Threads";
import SkillsLoop from "../../components/ui/skillsloop";
import ProjectSection from "./projects";
function Hero() {
  return (
    <div>

  <div className="bg-black overflow-hidden relative  min-h-[200vh]">

    {/* Hero Section */}
    <div className="w-full h-[600px] relative">

      {/* Background Animation */}
      <div className="absolute inset-0">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction
        />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div className="max-w-xl text-white">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-sm text-gray-300">
              Creative Frontend Developer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-white">Eman Fatima</span>
            <br />
            Frontend Developer
          </h1>

          {/* Description */}
          <p className="py-6 text-gray-300 max-w-lg mx-auto">
            I build modern, responsive, and user-friendly websites using
            React, Tailwind CSS, and modern web technologies. Passionate
            about creating clean UI and smooth user experiences.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition all duration-300 cursor-pointer">
              View Projects
            </button>

            <button className="px-6 py-3 border border-white/40 rounded-xl hover:border-white transition">
              Contact Me
            </button>
          </div>

          {/* Skills */}
          <p className="mt-6 text-sm text-gray-400">
            React • Tailwind CSS • JavaScript • Responsive Design
          </p>

        </div>
      </div>

    </div>
    <div className="w-full ">
      <SkillsLoop />
    </div>

    {/* Skills loop */}
<div className="pt-10!">
<ProjectSection/>
</div>
  </div>
</div>
  );
}

export default Hero;













