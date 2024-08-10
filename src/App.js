import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Service/Service';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Continue from './Components/Continue';
import Payment from './Components/Payment/Payment';
import Readmore from './Components/Readmore';
import Readmore1 from './Components/Readmore1';
import Readmore2 from './Components/Readmore2';
import Technician from './Components/Technician/Technician';
import PaymentRecords from './Components/PaymentRecords/PaymentRecords';
import BookingCalendar from './Components/BookingCalendar/BookingCalendar';
import TimeSelection from './Components/TimeSelection/TimeSelection';
import './App.css';
import AdminDashboard from './Components/Dashboard/Dashboard';

const AppContent = () => {
  const location = useLocation();
  const shouldShowFooter = location.pathname !== '/login' && location.pathname !== '/signup';

  return (
    <div className="App">
      <Navbar />
      
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/continue' element={<Continue />} />
          <Route exact path='/payment' element={<Payment />} />
          <Route exact path='/readmore' element={<Readmore />} />
          <Route exact path='/readmore1' element={<Readmore1 />} />
          <Route exact path='/readmore2' element={<Readmore2 />} />
          <Route path="/technician" element={<Technician />} />
          <Route path="/paymentrecords" element={<PaymentRecords />} />
          <Route path="/bookingcalendar" element={<BookingCalendar />} />
          <Route path="/timeselection" element={<TimeSelection />} />
          <Route path='/dashboard' element={<AdminDashboard />} />
        </Routes>
        {shouldShowFooter && <Footer />} {/* Conditionally render the Footer */}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
