import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { BsStars } from 'react-icons/bs';
function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 py-24 flex flex-col items-center justify-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full top-[-100px] right-[-100px] flex flex-col justify-center items-center"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">

        {/* Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm mb-6">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          Available For Work
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug mb-8">
          Curious about what we can create together? <br />
          Let’s bring something extraordinary to life!
        </h1>

        {/* Button */}
    <div className='w-50 flex! items-center justify-center mx-auto'>

        <RouterLink
          to="/contact" target="blank"
          className="flex items-center gap-2 text-white/70 rounded-full py-2 px-6 border border-white/20 bg-white/10 hover:text-white transition-all duration-300 cursor-pointer"
          >
          <BsStars />
          Contact me
        </RouterLink>
            </div>
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mt-10 text-xl text-white/70">

          <a href="https://www.facebook.com/share/1GW51zW2Yp/" target="_blank">
            <FaFacebookF className="hover:text-white transition" />
          </a>

          <a href="https://www.linkedin.com/in/eman-fatima-muhammad-arif-ali-03317a3b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <FaLinkedinIn className="hover:text-white transition" />
          </a>

          <a href="https://www.instagram.com/emanf_atima57?igsh=MW5waXgzaHoxM2hkYw==" target="_blank">
            <FaInstagram className="hover:text-white transition" />
          </a>

        </div>

      </div>

    </footer>




    
  )
}

export default Footer