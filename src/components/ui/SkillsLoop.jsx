// import React from "react";

// function SkillsLoop() {
//   const skills = [
//     "Problem Solving",
//     "React",
//     "JavaScript",
//     "HTML",
//     "CSS",
//     "Tailwind CSS",
//     "Responsive Design",
//     "UI Development",
//     "Git & GitHub",
//   ];

//   return (
//     <div className="overflow-hidden w-full py-10 bg-black">
//       <div className="flex gap-16 whitespace-nowrap animate-[marquee_20s_linear_infinite]">
//         {skills.map((skill, i) => (
//           <span key={i} className="text-gray-400 text-2xl font-semibold">
//             {skill}
//           </span>
//         ))}

//         {/* duplicate for smooth loop */}
//         {skills.map((skill, i) => (
//           <span key={"copy-" + i} className="text-gray-400 text-2xl font-semibold">
//             {skill}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SkillsLoop;












import React from "react";

function SkillLoop() {

const skills = [
"Problem Solving",
"React",
"JavaScript",
"HTML",
"CSS",
"Tailwind CSS",
"Responsive Design",
"UI Development",
"Git & GitHub"
];

return (
<div className="overflow-hidden w-full bg-black py-10">

<div className="flex gap-16 whitespace-nowrap animate-[marquee_20s_linear_infinite]">

{skills.map((skill, i) => (
<span key={i} className="text-gray-400 text-2xl font-semibold">
{skill}
</span>
))}

{/* duplicate for smooth loop */}

{skills.map((skill, i) => (
<span key={"copy-"+i} className="text-gray-400 text-2xl font-semibold">
{skill}
</span>
))}

</div>

</div>
);
}

export default SkillLoop;