import React from 'react'
import { card } from './arrayobjedata/servicescarddata';
import ServicesSkill from '../../components/ui/servicesloop'
import Servicesforwardloop from '../../components/ui/servicesloop'
function Servicescard() {
  return (
    <div>

    <div className="w-full sm:max-w-6xl sm:mx-auto px-0 sm:px-6 py-2">

      <div className="grid lg:grid-cols-2 w-full sm:grid-cols-1 gap-8">

        {
          card.map((meracard) => {
            return (
              <div className='flex'>
                
                <div className="bg-[rgb(13,13,13)] 
                rounded-[20px] 
                shadow-[16px_24px_20px_8px_rgba(0,0,0,0.4)] 
                will-change-transform 
                w-full h-[220px] p-6 
                flex flex-col justify-between">

                  <div>
                    <div className='flex items-center gap-4 mb-4'>
                      <i className="text-2xl text-white">{meracard.icon}</i>

                      <h2 className="text-[22px] font-semibold text-white">
                        {meracard.heading}
                      </h2>
                    </div>
                    <div className="border-b border-white/20 mb-4"></div>
                    <p className="text-[15px] text-gray-400 leading-relaxed">
                      {meracard.paragraph}
                    </p>
                  </div>

                </div>

              </div>
            )
          })
        }

      </div>
    </div>
   

    <div className="py-5">

  <div className="w-full flex xl:justify-center">
    <div className="w-full xl:max-w-[1400px]">
      <ServicesSkill />
    </div>
  </div>

  <div className="w-full flex xl:justify-center mt-6">
    <div className="w-full xl:max-w-[1400px]">
      <Servicesforwardloop/>
    </div>
  </div>

</div>
                </div>
  )
}

export default Servicescard;