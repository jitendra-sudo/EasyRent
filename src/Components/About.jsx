import React from 'react'
import profile from './profile.png'
function About() {
  return (
    <>
        <section id="about" className="aboutSec">
        <div className="aboutcss">
        <h1>About Me</h1>
        <div id='aboutSection'>
        <img src={profile} alt='profile'/>
        <p>Hello, I am <strong>Jitendra Saini</strong> and I belong to <strong>Bansur, Alwar, Rajasthan</strong>. Currently, I am pursuing a <strong>B.Sc.</strong> at Matsya College in Bansur. Alongside my studies, I am also enrolled in <strong>Full Stack Web Development</strong> at <strong>Masai School, Bangalore</strong>, where I am working to become a Job-Ready Developer.</p>
        </div>
        </div>
        </section>
    </>
  )
}

export default About
