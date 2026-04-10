import React from 'react'

function Counter() {
  return (
    <div>
        <div className="w-full px-4 py-16 bg-black flex justify-center">
      
      <div className="w-full max-w-6xl bg-[#0b0b0b] rounded-2xl border border-white/10">

        <div className="grid grid-cols-1 md:grid-cols-3 text-center">

          {/* Item 1 */}
          <div className="py-12 px-6 border-b md:border-b-0 md:border-r border-white/10">
            <h1 className="text-5xl font-semibold text-white mb-3">
              180+
            </h1>
            <p className="text-white/50 text-lg">
              Design Projects Completed
            </p>
          </div>

          {/* Item 2 */}
          <div className="py-12 px-6 border-b md:border-b-0 md:border-r border-white/10">
            <h1 className="text-5xl font-semibold text-white mb-3">
              96%
            </h1>
            <p className="text-white/50 text-lg">
              Team Work
            </p>
          </div>

          {/* Item 3 */}
          <div className="py-12 px-6">
            <h1 className="text-5xl font-semibold text-white mb-3">
              15+
            </h1>
            <p className="text-white/50 text-lg">
              Problem Solving
            </p>
          </div>

        </div>

      </div>

    </div>
    </div>
  )
}

export default Counter