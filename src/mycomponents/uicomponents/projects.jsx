
import { Projects } from "./arrayobjedata/projectsdata";
// function ProjectSection() {
//   return (
//     <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

//       {Projects.map((project) => (

//         <a
//           key={project.id}
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`relative rounded-2xl overflow-hidden group block ${project.height}`}
//         >

//           {/* Image */}
//           <img
//             src={project.img}
//             className={`w-full h-full object-cover transition duration-500 
//             ${project.special ? "brightness-100 group-hover:brightness-40" : ""}`}
//           />

//           {/* Overlay Button */}
//           <div className={`absolute inset-0 flex items-end justify-center pb-6 
//             ${project.special ? "opacity-0 group-hover:opacity-100 transition" : ""}`}>

//             <span
//               className="px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full border border-white/30 hover:bg-white hover:text-black transition"
//             >
//               View Case Study →
//             </span>

//           </div>

//         </a>

//       ))}

//     </div>
//   );
// }

// export default ProjectSection;









// function ProjectSection() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

//       {Projects.map((project) => (

//         <a
//           key={project.id}
//           href={project.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`relative rounded-2xl overflow-hidden group block ${project.height}`}
//         >

//           {/* Image */}
//           <img
//             src={project.img}
//             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
//           />

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-[#00000038] group-hover:bg-transparent transition-all duration-300"></div>

//           {/* Button */}
//           <div
//             className={`absolute inset-0 flex items-end justify-center pb-6 transition-all duration-1000
//             ${project.special ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
//           >

//             <span className="px-6 py-3 bg-[#6363634d]; text-white rounded-full border border-[#d6d6d6] shadow-[rgba(92,92,92,0.3)_0px_0px_20px_4px]">
//               View Case Study →
//             </span>

//           </div>

//         </a>

//       ))}

//     </div>
//   );
// }

// export default ProjectSection;






function ProjectSection() {
  return (
    <div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

      {Projects.map((project) => (
        
        <a
          key={project.id}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative rounded-2xl overflow-hidden group block ${project.height}`}
          >

          {/* Image */}
          <img
            src={project.img}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#00000038] group-hover:bg-transparent transition-all duration-300"></div>

          {/* Button */}
          <div
            className={`absolute inset-0 flex items-end justify-center pb-6 transition-all duration-1000
            ${project.special ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
          >

            <span className="px-6 py-3 bg-[#6363634d] text-white rounded-full border border-[#d6d6d6] shadow-[rgba(92,92,92,0.3)_0px_0px_20px_4px]">
              View My Projects →
            </span>

          </div>

        </a>

      ))}

    </div>
<div>
  <h1 className="underline text-2xl flex justify-center pt-10">All Projects</h1>
</div>
</div>
  );
}

export default ProjectSection;