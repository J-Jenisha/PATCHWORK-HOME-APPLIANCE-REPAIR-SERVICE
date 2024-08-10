import React , {useState} from 'react';
import './Service.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import background from '../Images/bg.jpg';
const offerings = [
  {
    image: 'http://themescare.com/demos/view-felona/assets/img/service-1.jpg',
    title: 'Washing Machine Repair',
  
  },
  {
    image: 'http://themescare.com/demos/view-felona/assets/img/service-2.jpg',
    title: 'Refrigerator Repair',
    
  },
  {
    image: 'http://themescare.com/demos/view-felona/assets/img/service-3.jpg',
    title: 'Dishwasher Repair',
   
  },
  {
    image: 'http://themescare.com/demos/view-felona/assets/img/service-4.jpg',
    title: 'Television Repair',
   
  },
  {
    image: 'http://themescare.com/demos/view-felona/assets/img/service-5.jpg',
    title: 'Coffee Maker Repair',
   
  },
  {
    image: 'http://themescare.com/demos/view-felona/assets/img/service-6.jpg',
    title: 'Pipe Repair',
   
  },
  {
    image: 'https://i.pinimg.com/564x/ba/1f/e1/ba1fe168089c48aed50c45fe498b77b9.jpg',
    title: 'Oven and Stove Repair',
   
  },
  {
    image: 'https://i.pinimg.com/736x/5d/57/90/5d57907922d173209a3352547abe72a3.jpg',
    title: 'Microwave Repair',
   
  },
  {
    image: 'https://i.pinimg.com/736x/b1/4c/98/b14c98e19940a3d23788b458afb617fd.jpg',
    title: 'Dryer Repair',
   
  },
  {
    image: 'https://i.pinimg.com/736x/c4/6f/cd/c46fcd16d5143f28b409ce3d4466de3b.jpg',
    title: 'Freezer Repair',
   
  },
  {
    image: 'https://i.pinimg.com/564x/b4/02/a5/b402a58cce5cc1a33c2fee511cf31fd9.jpg',
    title: 'Garbage Disposal Repair',
   
  },
  {
    image: 'https://i.pinimg.com/564x/d8/8e/cd/d88ecd5f74cd18678b36f8d88f8caab0.jpg',
    title: 'Air Conditioner Repair',
   
  },
  {
    image: 'https://i.pinimg.com/564x/c1/b2/15/c1b2153c21f572f02964d538b1c13b59.jpg',
    title: 'Heater Repair',
   
  },
  {
    image: 'https://i.pinimg.com/564x/e1/a1/74/e1a174ddf06f25c063aaa704801d29bd.jpg',
    title: 'Vacuum Cleaner Repair',
   
  },
  {
    image: 'https://i.ytimg.com/vi/8tQYIc7H-Is/maxresdefault.jpg',
    title: 'Blender Repair',
   
  },
  {
    image: 'https://www.shutterstock.com/image-photo/man-fixing-electric-toaster-rather-260nw-2061347129.jpg',
    title: 'Toaster Repair',
   
  },
  {
    image: 'https://content.jdmagicbox.com/comp/def_content/iron-repair-and-services/2-iron-repair-and-services-2-1nmh7.jpg',
    title: 'Iron Repair',
   
  },
  {
    image: 'https://i.pinimg.com/564x/04/ae/9f/04ae9ff0f27c1d9efed871b9a00a921e.jpg',
    title: 'Mixer Repair',
   
  },
  
  {
    image: 'https://i.pinimg.com/564x/95/88/03/9588034122ccbd7e75e235405a87e935.jpg',
    title: 'Home Theater System Repair',
   
  },
  
 
  
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_hiM7Z6_CZFhVGhTszaXq0avZtOIRE19YvPji_gCpUsylxrjCyzKwbHfufQLri3PIV4&usqp=CAU',
    title: 'Ice Maker Repair',
   
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0556/4792/8471/files/Sewing_Machine_Service_and_Repair.jpg?v=1646661666',
    title: 'Sewing Machine Repair',
   
  },
];



const Service = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOfferings = offerings.filter((offering) =>
    offering.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="body-container">
      <div className='home-first'>
        <div className="body-div">
          <img 
            className="hotel" 
            src={background} 
            alt="Home Service Banner" 
          />
          <div className="transparent-layers"></div>  
          <div className="text-overlay"> 
            <h1><b>Our Services</b></h1>
            <p>Providing reliable Electrical services and low rate guarantee’s.</p>
          </div>
          <div className="form-overlay"> 
            <div className="form-row">  
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="service-highlights">
        <div className="highlight">
          <img src="http://themescare.com/demos/view-felona/assets/img/support.png" alt="Support Icon" />
          <h3>24/7 Online Support</h3>
          <p>Always available to assist you with any issue.</p>
        </div>
        <div className="highlight">
          <img src="http://themescare.com/demos/view-felona/assets/img/target.png" alt="Experience Icon" />
          <h3>33 Years Of Experience</h3>
          <p>Providing top-notch services for decades.</p>
        </div>
        <div className="highlight">
          <img src="http://themescare.com/demos/view-felona/assets/img/staff.png" alt="Creative Staff Icon" />
          <h3>Creative Staff</h3>
          <p>Our team is innovative and solution-oriented.</p>
        </div>
      </div>

      <section className="stats-section">
      <div className="overlay"></div>
      <div className="container10">
        <h2>Best Home Appliance Repair Company</h2>
        <h3>We Completed 2500+ Projects Yearly</h3>
        <div className="stats-grid">
          <div className="stat">
          <span className="number">121</span>
          <span className="description">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="number">285</span>
            <span className="description">Experienced Workers</span>
          </div>
          <div className="stat">
            <span className="number">625</span>
            <span className="description">National Awards Won</span>
          </div>
          <div className="stat">
            <span className="number">217</span>
            <span className="description">Global Locations</span>
          </div>
        </div>
      </div>
    </section>
   
      <div className= "appliance-repair">
        <div className= "repair-services">
          <h4>WHAT WE DO?</h4>
          <h2>We’re provided best Appliance<br></br>
         <span className="repair1"> Repair services!</span></h2>
         <h3><b>Explore all services &rarr; </b>
         </h3>
         <input
            type="text"
            placeholder="Search for services..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="card-container">
        {filteredOfferings.map((offering, index) => (
          <div className="card" key={index}>
            <img src={offering.image} alt={`Card Image ${index + 1}`} />
            <h2>{offering.title}</h2>
            <p>{offering.description}</p>
            <button className="details-button">See Details</button>
          </div>
        ))}
      </div>
 
<div className="quote-container">
  <div className="quote-form">
    <h2>Free Consultation</h2>
    <h3>Get A Free Quote</h3>
    <form>
      <div className="quote-form-group">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
      </div>
      <div className="quote-form-group">
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Zip Code" />
      </div>
      <div className="quote-form-group">
        <select>
          <option>Select Service</option>
          {/* Add service options here */}
        </select>
      </div>
      <div className="quote-form-group">
        <textarea placeholder="Your Message"></textarea>
      </div>
      <button type="submit" className="quote-button">Get a Free Quote</button>
    </form>
  </div>
  <div className="quote-image">
    <img src="http://themescare.com/demos/view-felona/assets/img/get_quote_bg.png" alt="Worker pointing" />
  </div>
</div>

        </div>
    
  );
};

export default Service;