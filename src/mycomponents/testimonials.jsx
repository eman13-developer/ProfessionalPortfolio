import React from 'react'

function ReviewsSection() {
  return (
    <div className="bg-black overflow-hidden relative min-h-screen py-10">

      <section className="body-font">

        <div className="container mx-auto px-9 flex py-20 flex-col [@media(min-width:1123px)]:flex-row items-start gap-16">

          {/* IMAGE (Full width on mobile) */}
          <div className="w-screen -mx-9 [@media(min-width:1123px)]:w-1/2 [@media(min-width:1123px)]:mx-0 flex justify-center">

            <img
              src="clientpic.png"
              alt="client"
              className="w-full h-auto object-cover 
              rounded-none
              [@media(min-width:1123px)]:rounded-2xl
              [@media(min-width:1123px)]:w-[600px]
              [@media(min-width:1123px)]:h-[520px]"
            />

          </div>

          {/* CONTENT */}
          <div className="lg:flex-grow w-full [@media(min-width:1123px)]:w-1/2 flex flex-col gap-6 text-left items-start">

            {/* Reviews Button */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-sm">
              
              <span className="w-2 h-2 rounded-full border border-white flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </span>

              Reviews
            </button>

            {/* HEADING */}
            <h1 className="title-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-tight">
              Reviews <br /> Section
            </h1>

            {/* TEXT */}
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              Real feedback from clients who trusted my design expertise to elevate their brands successfully.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-4">

              <button className="px-5 sm:px-6 py-2.5 sm:py-3 text-white text-sm sm:text-base font-medium 
              bg-transparent rounded-xl border border-white/30
              backdrop-blur-md
              shadow-[0_0_20px_rgba(255,255,255,0.25)]
              hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]
              transition duration-300">
                Book a Free Call
              </button>

              <button className="px-5 sm:px-6 py-2.5 sm:py-3 text-white text-sm sm:text-base font-medium 
              bg-transparent rounded-xl border border-white/30
              backdrop-blur-md
              shadow-[0_0_20px_rgba(255,255,255,0.2)]
              hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]
              transition duration-300">
                See Services
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default ReviewsSection