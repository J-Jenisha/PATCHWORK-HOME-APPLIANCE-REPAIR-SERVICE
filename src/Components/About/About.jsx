import React from 'react';
 // requires a loader
 import patch from '../Images/aboutimg.gif';
import react3 from '../Images/react3.jpg';
import './About.css';

const About = () => {
  return (
    <div className="body-container">
      <div className="home-first">
        <div className="body-div">
           <img 
                            className="hotel" 
                            src={react3}
                            alt="Home Service Banner" 
                         />
            <div className="transparent-layer"></div>
            <div className="text-overlay">
              <h1><b>Quick Fixes! Happy Homes! </b></h1>
              <p>Providing reliable Electrical services and low rate guarantee’s.<br></br></p>
            </div>
            <div className="form-overlay">
              <div className="form-row">
                
              </div>
            </div>
          </div>
        
      </div>

      <div className="contact-container">
        <div className="contact-item">
          <div className="contact-description">Office</div>
          <div className="contact-number">72000 47856</div>
        </div>
        <div className="contact-item">
          <div className="contact-description">Cell</div>
          <div className="contact-number">90255 90255</div>
        </div>
        <div className="contact-item">
          <div className="contact-description">Cell</div>
          <div className="contact-number">90505 90222</div>
        </div>
      </div>

      <div className="service-container">
        <div className="service-intro">
          <h3>Patch Work Home Appliances Services in India</h3>
          <p>Patch Work Electric is a full service electrical company in Los Angeles. Patch Work Electric certified electricians provide commercial and residential electrical services for home and office. Patch Work Electrics’ on call emergency electricians bring the utmost and current electrical fixed for even the newest high tech electrical wiring and circuit breakers. Patch Work Electric is a certified and bonded Los Angeles electrician. Patch Work Electric not only bring a certified electrician to home or office but also a fully stocked electrical van, a necessity for every electrician. With Electrics’ fully equipped electrician vans we guarantee on time electricians in Los Angeles.</p>
        </div>
        <div className="service-items">
          <div className="service-item">
            <div className="service-title">Quality Guarantee</div>
            <div className="service-description">Reliable electric service is what every home or office gets when they have an Patch Work Electrician handling their electrical problem.</div>
          </div>
          <div className="service-itemss">
            <div className="service-titles">24/7 Service</div>
            <div className="service-descriptions">Call Patch Work Electrician today for all of your electrical services.Count on a Patch Work Electrician to be on time and bring guaranteed electrical resolutions.</div>
          </div>
          <div className="service-item">
            <div className="service-title">Insured, Bonded, Licensed </div>
            <div className="service-description">Licensed electritians in fully-equipped vans to handle your residential, commercial and industrial needs.</div>
          </div>
        </div>
      </div>

      <div className='home-second'>
        <div className='row'>
          <div className='column'>
            <img className = "about-img"
              src={patch}
              alt="About Us"
            />
          </div>
          <div className='column'>
            <h1>We Build For Your Comfort</h1>
            <div className="point-list">
              <div className="point-item">
                <div className="point-icon">✔</div>
                <div className="point-text">Reliable repair services for all types of appliances.</div>
              </div>
              <div className="point-item">
                <div className="point-icon">✔</div>
                <div className="point-text">Experienced technicians capable of handling tough repairs.</div>
              </div>
              <div className="point-item">
                <div className="point-icon">✔</div>
                <div className="point-text">Fast and efficient service to get your appliances running smoothly.</div>
              </div>
              <div className="point-item">
                <div className="point-icon">✔</div>
                <div className="point-text">Affordable rates with high-quality workmanship.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
