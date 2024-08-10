import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import blub from '../Images/blub.jpg';
import before from '../Images/before.jpg';
import company2 from '../Images/comapny2.png';
import company1 from '../Images/company1.png';
import company10 from '../Images/company10.png';
import company11 from '../Images/company11.png';
import company12 from '../Images/company12.png';
import company13 from '../Images/company13.png';
import company3 from '../Images/company3.png';
import company4 from '../Images/company4.png';
import company5 from '../Images/company5.png';
import company6 from '../Images/company6.png';
import company7 from '../Images/company7.png';
import company8 from '../Images/company8.png';
import company9 from '../Images/company9.png';
import password_icon from '../Images/img1.jpg';
import password_icon1 from '../Images/img2.jpg';
import home1 from '../Images/home1.webp';
import home2 from '../Images/home2.webp';
import home3 from '../Images/home3.webp';
import man from '../Images/Man.jpg';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://your-backend-api-url/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Booking successful! A technician will contact you shortly.');
                setFormData({ name: '', phone: '', service: '' });
            } else {
                alert('Booking failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Booking failed. Please try again.');
        }
    };

    const handleBookNowClick = () => {
        navigate('/bookingcalendar');
    };

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
    };

    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const testimonials = [
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situations by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too. You all deserve the best.',
          author: 'Vaishnavi',
          location: 'Oven Technician',
          avatar: 'https://servizman.com/assets/icons/girl-avatar.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Rajkumar',
          location: 'AC Technician',
          avatar: 'https://servizman.com/assets/images/veera-review.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Muniasami',
          location: 'Refrigerator Technician',
          avatar: 'https://servizman.com/assets/images/veera-review.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Vinoth',
          location: 'Plumber',
          avatar: 'https://servizman.com/assets/images/veera-review.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Kupusaamy',
          location: 'Fan Technician',
          avatar: 'https://servizman.com/assets/images/veera-review.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Ashwin',
          location: 'Washing Machine Technician',
          avatar: 'https://servizman.com/assets/images/veera-review.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Srinithi',
          location: 'Ice Cooler Technician',
          avatar: 'https://servizman.com/assets/icons/girl-avatar.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Pooja',
          location: 'Ice Cooler Technician',
          avatar: 'https://servizman.com/assets/icons/girl-avatar.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Kaalimuthu',
          location: 'AC Technician',
          avatar: 'https://servizman.com/assets/images/veera-review.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Mahesh',
          location: 'Washing Machine Technician',
          avatar: 'https://servizman.com/assets/images/veera-review.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'PraveenKumar',
          location: 'Garbage Disposal Technician',
          avatar: 'https://servizman.com/assets/images/veera-review.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Paneerselvam',
          location: 'HVAC Technician',
          avatar: 'https://servizman.com/assets/images/veera-review.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Paneerselvam',
          location: 'HVAC Technician',
          avatar: 'https://servizman.com/assets/images/veera-review.png',
        },
        {
          rating: '⭐⭐⭐⭐⭐',
          text: 'PatchWork professionals were prompt & efficient in completing the job. They resolved persistent & potentially hazardous situation by relocating and replacing my very old & obsolete electrical panel & added a whole house surge protection too the all as you deserve the best.',
          author: 'Rakshan',
          location: 'Iron Technician',
          avatar: 'https://servizman.com/assets/images/veera-review.png',
        },
    ];
      

    return (
        <div className="home-container">
            <div className="home-first">
              
                    <div className="body-div">
                        <img 
                            className="hotel" 
                            src={blub}
                            alt="Home Service Banner" 
                        />
                        {/* <div className="transparent-layer"></div>   */}
                        <div className="form-overlay"> 
                            <form>
                                <div className="form-row">  
                                
                                    <div className="form-group"> 
                                    <button type="button" id="booknow" onClick={handleBookNowClick}>Book Now</button>
                                    </div> 
                                </div> 
                            </form>
                        </div> 

                        
                        <div className="text-overlay-home"> 
                            <h1><b>Best Home Appliances Repair Service</b></h1>
                            <p>Lowest Inspection charge <span className="charge">- Rs.99</span></p>
                        </div> 
                    </div>
                
            </div>

            <div className="home-second">
                <div className="row">
                    <div className="columns">
                        <img
                            src={man}
                            alt="About Us"
                        />
                    </div>
                    <div className="column">
                        <h2>WELCOME TO PATCHWORK!<br /></h2><br />
                        <h1>We Build For Your Comfort</h1>
                        <p>At PatchWork we know that you worked hard in order to make your life easier with the help of different appliances. And it’s our job to keep them running. You don’t have to throw appliances away simply because they are not working as they usually do. There is no repair job, even the toughest one, our professional repairman cannot handle. Whenever you face a broken appliance, you are just one phone call away from getting it fixed and running smoothly as new again!</p>
                    </div>
                </div>
                <div className="specific_list">
                    <ul>
                        <li>Inspection Charge @ 99</li>
                        <li>
                            <img width="36" height="36" src="https://servizman.com/assets/icons/calender.svg" alt="180 Days Service Warranty"/>
                            180 Days Warranty
                        </li>
                        <li>
                            <img width="36" height="36" src="https://servizman.com/assets/icons/trust-white.svg" alt="Trusted Technicians"/>
                            Expert Technicians
                        </li>
                    </ul>
                </div>
                <div className="home-third">
                    <div className="service-row">
                        <h1 className="serve">Schedule appliance repair services</h1>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/7uM6IZGVwRCPOFIMZguNYl/50e991d2434d4e30626048f191d4ed28/normal_u214.svg" alt="Refrigerator" />
                                    <h4>REFRIGERATOR</h4>
                                </center>
                            </div>
                        </div>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/7M313CMpwzgSMd4ZVe9K2W/4b3fd6ef3b2e572b1f0a2020050a4b78/normal_u218.svg" alt="Washer" />
                                    <h4>WASHER</h4>
                                </center>
                            </div>
                        </div>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/3k8XCvfBN2GK5hrZ0nMFtd/9e7cdbca2d6cdd308b30e1cc2bc9e7c9/normal_u222.svg" alt="Dryer" />
                                    <h4>DRYER</h4>
                                </center>
                            </div>
                        </div>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/Zo8n2ccK3biibhlxxnefo/695e8e92af07509d72b990e811a4255b/normal_u226.svg" alt="Dishwasher" />
                                    <h4>DISHWASHER</h4>
                                </center>
                            </div>
                        </div>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/5URYrWfz6i84aAfz30GI0m/727c97fd26926b72c8cb5c8e12b0f8da/normal_u230.svg" alt="Range" />
                                    <h4>RANGE</h4>
                                </center>
                            </div>
                        </div>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/d0oBrTvN2kGYEGl143kXL/e22bf898ae3153d5dc7f25b7c137c190/normal_u234.svg" alt="Oven" />
                                    <h4>OVEN</h4>
                                </center>
                            </div>
                        </div>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/4uFr9tjKsCNuRGxXFMVYKx/6e2c1dd52d4e93a9dca9fa687c826487/normal_u238.svg" alt="All HVAC" />
                                    <h4>ALL HVAC</h4>
                                </center>
                            </div>
                        </div>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/56mrHMukZqJKGAXiKgmWkP/21f6167c077839d1438614eb90e95ab1/normal_u242.svg" alt="Freezer" />
                                    <h4>FREEZER</h4>
                                </center>
                            </div>
                        </div>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/6ZjhSLnZXq32mkSVLBHI7H/83e891b3041be4b994c804736df94b64/normal_u246.svg" alt="Water Heater" />
                                    <h4>WATER HEATER</h4>
                                </center>
                            </div>
                        </div>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src="https://images.ctfassets.net/e0821f6q5nel/1jLiyh0casrK8fgv4r5tGH/7103f56c143d54109417ef8b1ca80fd6/normal_u230.svg" alt="Cooktop" />
                                    <h4>COOKTOP</h4>
                                </center>
                            </div>
                        </div>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src={password_icon} alt="Ceiling Fan" height="30" width="30" />
                                    <h4>PIPES</h4>
                                </center>
                            </div>
                        </div>
                        <div className="service-column">
                            <div className="product-item">
                                <center>
                                    <img src={password_icon1} alt="Pipes" height="30" width="30" />
                                    <h4>CEILING FAN</h4>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
               
               
<div className="home-fourth">
        <center>
        <h1>Appliance Brands We Repair</h1>
        <div className="sliders-partner">
        <Slider {...sliderSettings}>
          <div className="slide"><Link to="https://www.whirlpool.com/repair-or-replace/service.html"><img src={company1} alt="partner logo" /></Link></div>
          <div className="slide"><Link to="https://www.subzero-wolf.com/international-landing?countryCode=IN&requestedUrl=%2fassistance"><img src={company2} alt="partner logo" /></Link></div>
          <div className="slide"><Link to="https://www.maytag.com/repair-or-replace/service.html"><img src={company3} alt="partner logo" /></Link></div>
          <div className="slide"><Link to="https://www.wonderchef.com/products/chef-magic?utm_source=Google&utm_medium=CPC&utm_campaign=HM_search_Chefmagic&gad_source=1&gclid=Cj0KCQjw8MG1BhCoARIsAHxSiQlSJ6s9J76yAXS2syuFuUf2k8ZO9Kc0aTF2sv0OlKNtyxmmoPXd7AUaAiDqEALw_wcB"><img src={company4} alt="partner logo" /></Link></div>
          <div className="slide"><Link to="https://www.kitchenaid.in/service-and-support.html"><img src={company5} alt="partner logo" /></Link></div>
          <div className="slide"><Link to="https://www.lg.com/in/support/contact-us/?utm_source=google&utm_medium=cpc&utm_campaign=IN_Corporate_Service_Center_DX_SA_BRAND_Exact_01102023_01312023&utm_source=google&utm_medium=cpc&utm_campaign={campaign.id}&utm_adgroup={adgroup.id}&utm_ad={creative.id}&utm_placement=&utm_device=c&utm_matchtype=e&utm_adposition=&utm_network=g&gad_source=1&gclid=Cj0KCQjw8MG1BhCoARIsAHxSiQnXhig9LbMBbsT_D_g08ssTPmkWCP4eszN299d24Ep9KdAcmW8hm7IaAoYQEALw_wcB"><img src={company6} alt="partner logo" /></Link></div>
          <div className="slide"><Link to="https://www.kenmore.com/customer-care/"><img src={company7} alt="partner logo" /></Link></div>
          <div className="slide"><Link to="https://producthelp.jennair.com/Cooking/Wall_Ovens_and_Ranges/Commercial_Range/Connected_Appliance/JennAir/Mobile_App_Features/Service_and_Support"><img src={company8} alt="partner logo" /></Link></div>
          <div className="slide"><Link to="https://insinkerator.emerson.com/en-us/support/find-service-agency"><img src={company9} alt="partner logo" /></Link></div>
          <div className="slide"><Link to="https://www.geappliances.com/ge/service-and-support/service.htm"><img src={company10} alt="partner logo" /></Link></div>
          <div className="slide"><Link to="https://support.frigidaire.com/Owner-Center/Service--Repair/"><img src={company11} alt="partner logo" /></Link></div>
          
          <div className="slide"><Link to="https://www.amana.com/"><img src={company12} alt="partner logo" /></Link></div>
          
          <div className="slide"><Link to="https://www.searshomeservices.com/repair/magic-chef"><img src={company13} alt="partner logo" /></Link></div>
          
          
        </Slider>
        </div>
        </center>
      </div>
                <div className="latest-resources">
                    <div className="resources">
                        <h1>Latest Resources</h1>
                    </div>
                </div>
                <div class="card-container">
  <div class="card">
    <img src={home1} alt="Card Image 1"></img>
    <h2>How to Remove Sediment from a Water Heater</h2>
    <p>Learn how to remove sediment from your water heater effectively with our detailed guide and expert tips from
    </p><br></br>
    <h6 className="continue"> <Link to="/continue" className="more">
      <img src={before} alt="partner logo" /> Continue Reading
    </Link> </h6>
  </div>
  <div class="card">
    <img src={home2} alt="Card Image 2"></img>
    <h2>How to Prevent Dryer Fires: The Ultimate Guide</h2>
    <p>Learn how to prevent dryer fires and keep your home safe with our expert tips!</p>
    <br></br>
    <h6 className="continue"> <Link to="/continue1" className="more">
      <img src={before} alt="partner logo" /> Continue Reading
    </Link> </h6>
  </div>
  <div class="card">
    <img src={home3} alt="Card Image 3"></img>
    <h2>How to Fix an OE Error Code on an LG Washer</h2>
    <p>Troubleshoot the OE error code on your LG washer with our expert tips. Learn how to quickly and easily fix th</p><br></br>
    <h6 className="continue"> <Link to="/continue2" className="more">
      <img src={before} alt="partner logo" /> Continue Reading
    </Link> </h6>
  </div>
</div>
<div class="container-scroll">
    <div class="allcard-container">
        
        <div class="testimonial-card">
            <Slider {...testimonialSettings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index}>
                        <div className="rating">{testimonial.rating}</div>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <div className="testimonial-author">
                            <img src={testimonial.avatar} alt="Avatar" className="avatar" />
                            <div>
                                <h3>{testimonial.author}</h3>
                                <p>{testimonial.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            
        
            <div className="contactt-info">
                <p>Need a service & ready to book? Call us</p>
                <h2>72000 47856</h2>
            </div>
        </div>
    </div>
    <div class="booking-form">
        <h2>Book a Service</h2>
        <p>
            Like what you’ve seen so far? What you’ve seen on our website is only the tip! To know more, kindly drop us a request.
        </p>
        <form action="/contact" method="get">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="tel" name="phone" placeholder="Phone Number" required />
  <input type="text" name="serviceType" placeholder="Enter the Service" required />
  
  <button type="submit">Book Now</button>
</form>


    </div>
</div>





                    
                </div>
            </div>
            
        
    );
};

export default Home;