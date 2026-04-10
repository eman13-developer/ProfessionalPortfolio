import React from "react";

function ServicesSkill() {

  const services = [
    {  name: "Frontend Development" },
    {  name: "UI Design" },
    { name: "Responsive Design" },
    { name: "Web Apps" },
  ];

  return (
    <div className="overflow-hidden w-full bg-black py-10">

      <div className="flex gap-6 whitespace-nowrap animate-[marquee_20s_linear_infinite]">

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

        {/* duplicate for smooth loop */}
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

export default ServicesSkill;











