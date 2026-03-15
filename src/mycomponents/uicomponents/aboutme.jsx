import React from 'react'

function Aboutme() {
  return (
    <div>

    {/* <div className='bg-black overflow-hidden relative  min-h[200vh] py-20!'>
<section class="text-gray-600 body-font">
  <div class="container mx-auto! px-15 flex  py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-6!">
      <h1 class="title-font sm:text-4xl text-7xl! mb-4 font-medium text-[#ffffff]">Eman Fatima
      </h1>
      <p class="mb-8 leading-relaxed text-white/70!">I am a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. I enjoy turning ideas into responsive and interactive web interfaces. During my learning journey, I have built several practical projects that strengthened my problem-solving skills and understanding of modern frontend development. I am always eager to improve my skills and create clean, user-focused web experiences</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="mine pic.png"/>
    </div>
  </div>
</section>

    </div> */}


    <div className='bg-black overflow-hidden relative min-h-[200vh] py-20'>
<section className="text-gray-600 body-font">
  <div className="container mx-auto px-15 flex py-24 md:flex-row flex-col items-center">

    {/* Left Content */}
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-6">

      <h1 className="title-font sm:text-4xl text-7xl! mb-4 font-medium text-white">
        Eman Fatima
      </h1>

      <p className="mb-4 leading-relaxed text-white/70">
        I am a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. I enjoy turning ideas into responsive and interactive web interfaces. During my learning journey, I have built several practical projects that strengthened my problem-solving skills and understanding of modern frontend development. I am always eager to improve my skills and create clean, user-focused web experiences.
      </p>

      {/* Education */}
      <div className="text-white text-left">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p className="text-white/70">
          BS Computer Science — National univeristy of modern languages
        </p>
      </div>

      {/* Tools */}
      <div className="text-white text-left gap-3">
        <h2 className="text-2xl font-semibold mb-2">Tools</h2>
        <div className="flex flex-wrap gap-3">
          <span className="bg-white/10 px-4 py-1 rounded-full text-sm">VS Code</span>
          <span className="bg-white/10 px-4 py-1 rounded-full text-sm">Git</span>
          <span className="bg-white/10 px-4 py-1 rounded-full text-sm">GitHub</span>
          <span className="bg-white/10 px-4 py-1 rounded-full text-sm">Figma</span>
          <span className="bg-white/10 px-4 py-1 rounded-full text-sm">Chrome DevTools</span>
        </div>
      </div>

    </div>

    {/* Image */}
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="mine pic.png"/>
    </div>

  </div>
</section>
</div>
    </div>
  )
}

export default Aboutme













// {/* <div className='bg-black overflow-hidden relative  min-h[200vh] py-20!'>
// <section class="text-gray-600 body-font">
//   <div class="container mx-auto! px-15 flex  py-24 md:flex-row flex-col items-center">
//     <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-6!">
//       <h1 class="title-font sm:text-4xl text-7xl! mb-4 font-medium text-[#ffffff]">Eman Fatima
//         {/* <br class="hidden lg:inline-block"/> */}
//       </h1>
//       <p class="mb-8 leading-relaxed text-white/70!">I am a passionate Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. I enjoy turning ideas into responsive and interactive web interfaces. During my learning journey, I have built several practical projects that strengthened my problem-solving skills and understanding of modern frontend development. I am always eager to improve my skills and create clean, user-focused web experiences</p>
//       <div class="flex justify-center">
//         <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//         <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
//       </div>
//     </div>
//     <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//       <img class="object-cover object-center rounded" alt="hero" src="mine pic.png"/>
//     </div>
//   </div>
// </section>

//     </div> */}