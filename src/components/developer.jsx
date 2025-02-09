import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaMobileAlt } from 'react-icons/fa';
import './developer.css';
import jitendra from './jitendra.png'
import sharvali from './sharvali.jpeg'
import anamika from './anamika.jpeg'
import Avatar from '@mui/material/Avatar';


const Developers = () => {
 

  return (
    <div id="developers" className="dev-section">
      <div className="dev-container">
        <h2 className="sect-title">Our Team</h2>

        <div className="dev-grid">
         
            <div  className="dev-card">
              <div className="card-image">
              <div className='profile-img'>
                 <Avatar  src= 'k' style={{width:'120px' , height:'120px'}} alt= 'krishan' />
              </div>
                <div className="social-links">
                  <a href="#"><FaGithub /></a>
                  <a href="#"><FaLinkedin /></a>
                </div>
              </div>

              <div className="card-body">
                <h3>KrishanDev K</h3>
                <p className="role">Backend Developer</p>
                <p className="bio">Expert in Node.js and database architecture</p>
                <div className="skills"><span ><FaCode /></span></div>
              </div>
            </div>


            <div  className="dev-card">

              <div className="card-image">
              <div className='profile-img'>
                 <img  src= {sharvali} alt= 'Sharvali'  />
              </div>
                <div className="social-links">
                  <a href="#"><FaGithub /></a>
                  <a href="#"><FaLinkedin /></a>
                </div>
              </div>

              <div className="card-body">
                <h3>Sharvari Patil</h3>
                <p className="role">Frontend Developer</p>
                <p className="bio">Specializes in React and UI/UX design</p>
                <div className="skills"><span ><FaCode /></span></div>
              </div>
            </div>

            <div  className="dev-card">

              <div className="card-image">
              <div className='profile-img'>
                 <img  src= {anamika} alt= 'anamika'  />
              </div>
                <div className="social-links">
                  <a href="#"><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/anamika-dutta-0a2291302/"><FaLinkedin /></a>
                </div>
              </div>

              <div className="card-body">
                <h3>Anamika Dutta</h3>
                <p className="role">Frontend Developer</p>
                <p className="bio">Specializes in React and UI/UX design</p>
                <div className="skills"><span ><FaCode /></span></div>
              </div>
            </div>


            <div  className="dev-card">

              <div className="card-image">
              <div className='profile-img'>
                 <img  src= {jitendra} alt= 'name'  />
              </div>
             
                <div className="social-links">
                  <a href="https://github.com/jitendra-sudo" target='_blank'><FaGithub /></a>
                  <a href="https://www.linkedin.com/in/jitendra2705/"><FaLinkedin /></a>
                </div>
              </div>

              <div className="card-body">
                <h3>Jitendra Saini</h3>
                <p className="role">Frontend Developer</p>
                <p className="bio">Specializes in React and UI/UX design</p>
                <div className="skills"><span ><FaCode /></span></div>
              </div>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Developers;