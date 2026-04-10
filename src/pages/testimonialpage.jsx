import React from 'react'
import ReviewsSection from '../mycomponents/testimonials'
import TestimonialCards from '../mycomponents/uicomponents/crousel'
import Counter from '../mycomponents/uicomponents/counter'
function Testimonialspage() {
  return (
    <div className='bg-black relative z-20 -mt-32 rounded-t-3xl shadow-[0_-20px_60px_rgba(0,0,0,0.8)] sticky'>
        <ReviewsSection/>
         <TestimonialCards/>
          <Counter/>
    </div>

  )
}

export default Testimonialspage