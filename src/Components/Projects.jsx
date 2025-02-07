import React from 'react'
import Project1 from './Project1.png'
import Project2 from './Project2.png'
import Project3 from './Project3.png'
import Project4 from './Project4.png'
import Project5 from './Project5.png'
import Project6 from './Project6.png'
import './Project.css'
function Projects() {
  return (
<>
  <div className="projects"   id='projected'>
  <div className="projectcss">
    <h1>Projects</h1>
    <div className="project">
    <div className='repoLink'>
    <h2>Project 1 : OwnField</h2>
    <div className='repo'>
    <a href="https://ownfield.netlify.app" target="_blank" ><img src='https://img.icons8.com/?size=100&id=B3YslypXlynV&format=png&color=000000' alt='Link'/></a>
    <a href="https://github.com/jitendra-sudo/OwnField" target="_blank" ><img src='https://img.icons8.com/?size=100&id=12599&format=png&color=000000' alt='Link'/></a>
    </div>
    </div>
    <div className='ProjectImg'>
      <img src={Project1} alt='Project shot'/>
      <img src={Project2} alt='Project shot'/>
      <img src={Project3} alt='Project shot'/>
    </div>
    <div className='descrip'>
    <h4 className='descSection'>Description:</h4>
    <p className='description'>OwnField is designed to bridge the gap between farmers and consumers by offering a direct, convenient way for consumers to purchase fresh produce straight from the fields  </p>
   </div>
    </div>


    <div className="project">
    <div className='repoLink'>
    <h2>Project 2 : CalorieScan : Food Calorie Scanner</h2>
    <div className='repo'>
    <a href="https://caloriescan.netlify.app/" target="_blank" ><img src='https://img.icons8.com/?size=100&id=B3YslypXlynV&format=png&color=000000' alt='Link'/></a>
    <a href="https://github.com/jitendra-sudo/CalorieScan/tree/main" target="_blank" ><img src='https://img.icons8.com/?size=100&id=12599&format=png&color=000000' alt='Link'/></a>
    </div>
    </div>
    <div className='ProjectImg'>
      <img src={Project4} alt='Project shot'/>
      <img src={Project5} alt='Project shot'/>
      <img src={Project6} alt='Project shot'/>
    </div>
   
    <div className='descrip'>
    <h4 className='descSection'>Description:</h4>
    <p className='description'>A web application that allows users to scan QR codes or select dishes from a list to view detailed information about the calories and nutrition of food items. </p>

     </div>
    </div>
    </div>
  </div>
</>     
  )
}

export default Projects
