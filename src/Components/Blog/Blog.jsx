import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';
import Readmore from '../Readmore';
import Readmore1 from '../Readmore1';
import Readmore2 from '../Readmore2';
const Blog = () => {
  return (
    <div className="blog">
      <h1 className="blog-header">Blog</h1>
      <div className="image-grid">
        
        <div className="image-container">
          <img src="https://www.appliancerepair512.com/wp-content/uploads/2023/03/iStock-1151620512-400x307.jpg" alt="Install Microwave" />
          <h1>How To Install An Over The Range Microwave</h1>
          <p className="blog-1">814 words
          4.1 min read</p>
          <p className="blog-2">If you’re looking to upgrade your kitchen, an over-the-range microwave is a great addition. It not only saves counter space but also adds to the overall aesthetic of your kitchen. However, installing an over the range microwave is often a daunting task for many homeowners. The good news is that […]</p>
          <Link to="/readmore1" className="read-more">Read More</Link>
        </div>
        <div className="image-container">
          <img src="https://www.appliancerepair512.com/wp-content/uploads/2022/12/iStock-1355251759-400x300.jpg" alt="Dishwasher Repair" />
          <h1>Is Your Washer’s Spin Cycle Broken?</h1>
          <p className="blog-1">776 words
          3.9 min read</p>
          <p className="blog-2">When they work properly, washing machines are one of the most useful household appliances. But when your washing machine isn’t working it can be pretty inconvenient. One of the most common problems with washing machines is the spin cycle. And if the washer can’t spin, the clothes stay wet.  Is […]</p>
          <Link to="/readmore1" className="read-more">Read More</Link>
        </div>
        <div className="image-container">
          <img src="https://www.appliancerepair512.com/wp-content/uploads/2023/03/iStock-1424529047-400x267.jpg" alt="Garbage Disposal Repair" />
          <h1>5 Reasons You Should Repair Your Garbage Disposal</h1>
          <p className="blog-1">664 words
          3.3 min read</p>
          <p className="blog-2">Garbage disposals can be very convenient. You rinse food scraps right off the plate or cutting board and run the disposal until they disappear down the drain. It keeps smelly food out of your trash and prevents your drain from clogging. However, this is only the case if your disposal […]</p>
          <Link to="/readmore2" className="read-more">Read More</Link>
        </div>
        <div className="image-container">
          <img src="https://www.appliancerepair512.com/wp-content/uploads/2023/02/iStock-1398133058-400x272.jpg" alt="Garbage Disposal Repair 2" />
          <h1>Is Your Washer’s Timer Broken?</h1>
          <p className="blog-1">628 words
          3.1 min read</p>
          <p className="blog-2">Washing machines have various cycles, all of which are controlled by a timer. The timer’s job is to tell the washing machine how long to stay on each part of the wash cycle and when to advance to the next step in the cycle. When the timer is broken, the […]</p>
          <Link to="/readmore1" className="read-more">Read More</Link>
        </div>
        <div className="image-container">
          <img src="https://www.appliancerepair512.com/wp-content/uploads/2023/01/iStock-1399160717-400x286.jpg" alt="Refrigerator Maintenance" />
          <h1>How Long Does The Average Refrigerator Last?</h1>
          <p className="blog-1">791 words
          4 min read</p>
          <p className="blog-2">One of the most important appliances in your kitchen is the refrigerator. It keeps your food cold or frozen so that it doesn’t spoil. It makes ice and provides cold beverages. Refrigerators have a variety of features that make life more convenient.  Is your refrigerator working right? If not, you […]</p>
          <Link to="/readmore1" className="read-more">Read More</Link>
        </div>
        <div className="image-container">
          <img src="https://www.appliancerepair512.com/wp-content/uploads/2022/12/iStock-1216122354-400x267.jpg" alt="Oven Repair" />
          <h1>Your Guide to Properly Cleaning Your Garbage Disposal</h1>
          <p className="blog-1">612 words
          3.1 min read</p>
          <p className="blog-2">If you have a garbage disposal, you know they don’t always smell fresh. Sometimes the odor coming from your disposal can be downright disgusting. But there are ways to freshen it up so you can eliminate the terrible smell and stop it from spreading throughout your kitchen.  There are plenty […]</p>
          <Link to="/readmore1" className="read-more">Read More</Link>
        </div>
        
        <div className="image-container">
          <img src="https://www.appliancerepair512.com/wp-content/uploads/2022/09/iStock-1175495774-400x267.jpg" alt="Microwave Tips" />
          <h1>How Often Should You Clean Your Dryer Vent?</h1>
          <p className="blog-1">478 words
          2.4 min read</p>
          <p className="blog-2">Washing machines and dryers are fantastic appliances that have made washing linen at home easy. But these systems don’t stay in good condition without routine maintenance. When it comes to the dryer specifically, maintenance is necessary, as, without this, you could be putting yourself and your family in harm’s way. […]</p>
          <Link to="/readmore1" className="read-more">Read More</Link>
        </div>
        <div className="image-container">
          <img src="https://www.appliancerepair512.com/wp-content/uploads/2022/09/iStock-1314435125-400x266.jpg" alt="Laundry Machine Care" />
          <h1>Why Is Water Leaking From The Bottom Of My Washing Machine?</h1>
          <p className="blog-1">754 words
          3.8 min read</p>
          <p className="blog-2">There’s a lot of water involved with washing laundry. So, while laundry machines are built to last, even the best made machine may leak water from the bottom from time to time. These leaks can cause puddles to form, and even flood your laundry room if your machine is left […]</p>
          <Link to="/readmore1" className="read-more">Read More</Link>
        </div>
        <div className="image-container">
          <img src="https://www.appliancerepair512.com/wp-content/uploads/2023/05/iStock-1392897495-1-400x222.jpg" alt="Fridge Heights" />
          <h1>What Are The Different Fridge Heights?</h1>
          <p className="blog-1">734 words 3.7 min read</p>
          <p className="blog-2">Refrigerators come in a variety of sizes and configurations. If you’re in the market for a new fridge, you may be wondering what size is right for your kitchen. There are a few different things to consider when it comes to choosing a refrigerator that is the appropriate size for […]</p>
          <Link to="/readmore" className="read-more">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;