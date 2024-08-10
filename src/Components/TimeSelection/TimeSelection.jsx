import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TimeSelection.css';

const TimeSelection = ({ selectedDate }) => {
    const [selectedTime, setSelectedTime] = useState('');
    const [availableTimes, setAvailableTimes] = useState([
        '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
    ]);
    const navigate = useNavigate(); // Hook for navigation

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        // Navigate to the contact page with the selected time and date as query parameters
        navigate(`/contact?date=${encodeURIComponent(selectedDate)}&time=${encodeURIComponent(time)}`);
    };

    const handleGoBack = () => {
        // Navigate back to the booking calendar page
        navigate('/');
    };

    return (
        <div className="time-selection-wrapper">
            <button className="back-button" onClick={handleGoBack}>
                &larr; Go Back
            </button>
            <h3>Select a time on {selectedDate}:</h3>
            <div className="time-buttons-container">
                {availableTimes.map((time, index) => (
                    <button
                        key={index}
                        onClick={() => handleTimeSelect(time)}
                        className={`time-button ${selectedTime === time ? 'selected' : ''}`}
                    >
                        {time}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TimeSelection;
