import React, { useState, useEffect, useRef } from 'react';
import { FaBullseye, FaRocket, FaHandshake } from 'react-icons/fa';
import aboutPng from './pngegg.png';
import './about.css';

function About() {
    const [isAnimated, setIsAnimated] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsAnimated(entry.isIntersecting),
            { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
        );

        if (aboutRef.current) observer.observe(aboutRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-section" id="about" >
            <div className="about-container">
                <header className="about-header">
                    <h1 className="about-title">Revolutionizing <span>Property Management</span></h1>
                    <p className="about-subtitle">Modern solutions for seamless landlord-tenant relationships</p>
                </header>

                <div className='about-content'>
                    <div className="about-image-wrapper">
                        <img src={aboutPng} alt="Platform interface" className="about-image" />
                    </div>

                    <div className="about-info">
                        <div className="about-mission">
                            <FaBullseye className="mission-icon" />
                            <h3>Core Mission</h3>
                            <p>Transform rental experiences through transparent communication and digital innovation</p>
                        </div>

                        <div className="about-features">
                            <div className="feature-card">
                                <FaRocket className="feature-icon" />
                                <h4>Instant Setup</h4>
                                <p>Get started in minutes with intuitive onboarding</p>
                            </div>
                            <div className="feature-card">
                                <FaHandshake className="feature-icon" />
                                <h4>Trust Network</h4>
                                <p>Verified users and secure transactions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;