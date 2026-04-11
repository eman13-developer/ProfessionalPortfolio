import Threads from "../../components/Threads";
// import SkillsLoop from "../../components/ui/skillsloop";
import SkillsLoop from "../../components/ui/SkillsLoop";
import ProjectSection from "./projects";
import TextType from "../../components/TextType";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div>

  <div className="bg-black overflow-hidden relative  min-h-[200vh]">
    <div className="w-full h-[600px] relative">

      <div className="absolute inset-0">
        
      </div>


      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <div className="max-w-xl text-white">

    
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="text-sm text-gray-300">
              Creative Frontend Developer
            </span>
          </div>

      
          {/* <h1 className="text-5xl md:text-6xl font-bold leading-tight whitespace-pre-line">
  <TextType
    text={[
      "Hi, I'm Eman Fatima\nFrontend Developer"
    ]}
    typingSpeed={90}       
    deletingSpeed={80}      
    pauseDuration={1800}    
    showCursor={true}
    cursorCharacter="|"
    variableSpeedEnabled={true}
    cursorBlinkDuration={0.8}
  />
</h1> */}

<h1 className="text-5xl sm:text-5xl md:text-6xl font-bold leading-tight 
whitespace-pre-line h-[120px] sm:h-[140px] md:h-[170px] overflow-hidden">

  <TextType
    text={[
      "Hi, I'm Eman Fatima\nFrontend Developer"
    ]}
    typingSpeed={90}
    deletingSpeed={80}
    pauseDuration={1800}
    showCursor={true}
    cursorCharacter="|"
    variableSpeedEnabled={true}
    cursorBlinkDuration={0.8}
  />

</h1>
          {/* Description */}
          <p className="py-6 text-gray-300 max-w-lg mx-auto">
            I build modern, responsive, and user-friendly websites using
            React, Tailwind CSS, and modern web technologies. Passionate
            about creating clean UI and smooth user experiences.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            
            <Link to="about" smooth={true} duration={500}>
            
  <button className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
    About me
  </button>
</Link>
          </div>

          {/* Skills */}
          <p className="mt-6 text-sm text-gray-400">
            React • Tailwind CSS • JavaScript • Responsive Design
          </p>

        </div>
      </div>

    </div>
    {/* <div className="w-full ">
      <SkillsLoop />
    </div> */}
<div className="w-full flex xl:justify-center">
  <div className="w-full xl:max-w-[1400px]">
    <SkillsLoop />
  </div>
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













