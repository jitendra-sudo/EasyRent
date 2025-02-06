import React, { useState, useEffect, useRef } from 'react';
import { FaComments, FaChartLine, FaTools, FaFileContract } from 'react-icons/fa';
import './services.css';

const Services = () => {
  
    
    return (
        <>
        <div className="services-section" id="services" >
           
                <div className="section-header">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">Streamlining property management through innovative solutions</p>
                </div>
                
                <div className='services-grid'>
                  
                  {/* card */}
                 <div className="service-card" >

                     <div className="card-icon"> <FaComments /></div>
                     <h3 className="card-title">Instant Messaging</h3>
                    <p className="card-subtitle">Real-time communication between tenants and landlords</p>
                     <p className="card-description">Our encrypted messaging platform enables seamless communication with message history tracking, file sharing capabilities, and read receipts.</p>
                </div>
                
                 <div className="service-card" >

                     <div className="card-icon"> <FaChartLine /></div>
                     <h3 className="card-title">Rent Tracking</h3>
                    <p className="card-subtitle">Automated rent payment tracking and reminders</p>
                     <p className="card-description">Maintain financial clarity with our smart payment dashboard featuring automatic due date alerts and secure online transactions.</p>
                </div>

                 <div className="service-card" >
                     <div className="card-icon"> <FaTools /></div>
                     <h3 className="card-title">Maintenance Requests</h3>
                    <p className="card-subtitle">Easy submission and tracking of maintenance issues</p>
                     <p className="card-description">Streamlined workflow for reporting and resolving property issues with priority levels and repair status tracking.</p>
                </div>

                 <div className="service-card" >
                     <div className="card-icon"><FaFileContract /></div>
                     <h3 className="card-title">Document Storage</h3>
                    <p className="card-subtitle">Secure storage for rental agreements and documents</p>
                     <p className="card-description">Military-grade encrypted cloud storage with version control and expiration reminders for all rental documentation.</p>
                </div>
               
            </div>
            </div>
       
        </>
    );
};

export default Services;