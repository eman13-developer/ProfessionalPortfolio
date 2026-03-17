import React from 'react'
import Aboutme from '../mycomponents/uicomponents/aboutme'
import Recentprojects from '../mycomponents/recentprojects'

function About() {
  return (
    <div className='bg-black min-h[300vh]'>
        <Aboutme/>
        <Recentprojects/>
    </div>
  )
}

export default About