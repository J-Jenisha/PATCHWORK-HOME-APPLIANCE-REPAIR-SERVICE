import React, { useState, useRef } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserShield, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import logo from '../Images/image.png';

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();
    const navRef = useRef();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Mock function to handle login (replace with real logic)
    const handleLogin = async () => {
        // Simulate login and then redirect to home
        setLoggedIn(true);
        setUserEmail('user@example.com'); // Replace with actual user email
        navigate('/'); // Navigate to home after login
        // Here you should handle the actual login logic and redirect
    };

    // Mock function to handle logout
    const handleLogout = () => {
        setLoggedIn(false);
        setUserEmail('');
        setDropdownOpen(false); // Close dropdown after logout
        navigate('/'); // Navigate to home after logout
        // Perform any other logout-related actions here, like clearing tokens
    };

    return (
        <header>
            <img src={logo} className='logo' alt="Logo" />
            <nav ref={navRef}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About us</Link>
                <Link to='/service'>Services</Link>
                <Link to='/contact'>Book a Service</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/payment'>Payment</Link>
            </nav>
            <div className="admin-icon">
                <Link to='/dashboard'>
                    <FontAwesomeIcon icon={faUserShield} size="lg" />
                </Link>
            </div>
            <div className="profile-menu">
                <FontAwesomeIcon 
                    icon={faUserCircle} 
                    size="2x" 
                    className="profile-icon" 
                    onClick={toggleDropdown} 
                    aria-label="User Menu"
                />
                {dropdownOpen && (
                    <div className="dropdown-menu">
                        {loggedIn ? (
                            <>
                                <div className="user-email">
                                    {userEmail}
                                </div>
                                <NavLink 
                                    to="/" 
                                    className="dropdown-item" 
                                    activeClassName="active" 
                                    onClick={handleLogout}>
                                    Logout
                                </NavLink>
                            </>
                        ) : (
                            <NavLink 
                                to="/login" 
                                className="dropdown-item" 
                                activeClassName="active" 
                                onClick={() => {
                                    // Navigate to login page
                                    navigate('/login');
                                    // Optionally, set the dropdown state here if needed
                                }}>
                                Login / Signup
                            </NavLink>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
