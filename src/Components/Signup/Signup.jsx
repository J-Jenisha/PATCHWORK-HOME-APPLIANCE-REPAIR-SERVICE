import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Signup/Signup.css';
import axios from 'axios';

import user_icon from '../Images/person.png';
import email_icon from '../Images/Email.png';
import password_icon from '../Images/password.png';
import phone_icon from '../Images/phone1.jpeg';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      formIsValid = false;
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      formIsValid = false;
      errors.email = 'Please enter a valid email address';
    }

    // Other field validations
    if (!formData.name.trim()) {
      formIsValid = false;
      errors.name = 'Name is required';
    }
    if (!formData.password.trim()) {
      formIsValid = false;
      errors.password = 'Password is required';
    }
    if (!formData.confirmPassword.trim()) {
      formIsValid = false;
      errors.confirmPassword = 'Confirm Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      formIsValid = false;
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.mobile.trim()) {
      formIsValid = false;
      errors.mobile = 'Mobile number is required';
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:8080/api/register/save', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          number: formData.mobile,
        });

        console.log('Form submitted:', formData);
        alert('Registration successful!');
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          mobile: '',
        });
        navigate('/');
      } catch (error) {
        console.error('There was an error submitting the form:', error);
        alert('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="signup-page-background">
      <div className="signup-container">
        <div className="signup-header">
          <div className="signup-title"> SignUp </div>
          <div className="header-underline"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="signup-inputs">
            <div className="input-field">
              <img src={user_icon} alt="user" height="30" width="30" />
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <span className="error">{formErrors.name}</span>}
            </div>

            <div className="input-field">
              <img src={email_icon} alt="email" height="30" width="30" />
              <input
                type="email"
                placeholder="Email Id"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>

            <div className="input-field">
              <img src={phone_icon} alt="phone" height="30" width="30" />
              <input
                type="tel"
                placeholder="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {formErrors.mobile && <span className="error">{formErrors.mobile}</span>}
            </div>

            <div className="input-field">
              <img src={password_icon} alt="password" height="30" width="30" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {formErrors.password && <span className="error">{formErrors.password}</span>}
            </div>

            <div className="input-field">
              <img src={password_icon} alt="confirm password" height="30" width="30" />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}
            </div>
          </div>
          <div className="signup-submit-container">
            <button type="submit" className="signup-submit-button">SignUp</button>
          </div>
        </form>
      
        <p className="signup-already">
          Already have an account? <Link to="/login" className="signup-login">Login</Link>
        </p>
        <footer className="signup-footer">
          <Link to="/terms">Terms of Use</Link> 
          <span className="signup-footer-separator"> | </span>
          <Link to="/privacy">Privacy Policy</Link>
        </footer>
      </div>
      <div className="signup-image-container">
          {/* <img src={signupImage} alt="Signup" className="signup-image" /> */}
        </div>
    </div>
  );
};

export default Signup;
