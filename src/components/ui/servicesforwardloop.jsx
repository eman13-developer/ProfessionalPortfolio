import React from "react";

function Servicesforwardloop() {

  const services = [
    {  name: "Frontend Development" },
    {  name: "React Development" },
    { name: "UI/UX Design" },
    { name: "Responsive Design" },
    { name: "Website Design" },
    {  name: "Performance Optimization" },
    {  name: "Component Based UI" },
    {  name: "API Integration" },
  ];

  return (
    <div className="overflow-hidden w-full bg-black">

      <div className="flex gap-6 whitespace-nowrap animate-[marquee-reverse_20s_linear_infinite]">

        {
          services.map((item) => {
            return (
              <div className="flex items-center gap-3 px-6 py-3 
              bg-[rgb(13,13,13)] 
              rounded-full 
              border border-white/10
              text-gray-300 text-lg font-medium">

                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>

              </div>
            )
          })
        }
        {
          services.map((item) => {
            return (
              <div className="flex items-center gap-3 px-6 py-3 
              bg-[rgb(13,13,13)] 
              rounded-full 
              border border-white/10
              text-gray-300 text-lg font-medium">

                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>

              </div>
            )
          })
        }

      </div>

    </div>
  );
}

export default Servicesforwardloop;









