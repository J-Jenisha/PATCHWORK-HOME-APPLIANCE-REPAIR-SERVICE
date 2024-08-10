import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Technician.css';
import { useParams } from 'react-router-dom';

const Technician = () => {
  const { id } = useParams();
  const [technician, setTechnician] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  useEffect(() => {
    const fetchTechnician = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/technicians/${id}`);
        setTechnician(response.data);
        setIsAvailable(response.data.isAvailable);
      } catch (error) {
        console.error("Error fetching technician details", error);
      }
    };

    fetchTechnician();
  }, [id]);

  const handleBook = async () => {
    setIsBooking(true);
    try {
      await axios.post('http://localhost:8080/api/bookings', { technicianId: technician.id });
      alert('Booking request sent!');
    } catch (error) {
      console.error("Error sending booking request", error);
      alert('Failed to send booking request');
    } finally {
      setIsBooking(false);
    }
  };

  if (isBooking) return <p className="loading">Processing your request...</p>;

  return (
    <div className="technician-details">
      {technician ? (
        <div>
          <h2>{technician.name}</h2>
          <p>{technician.details}</p>
          <p className="status">Status: {isAvailable ? 'Available' : 'Not Available'}</p>
          {isAvailable && <button onClick={handleBook}>Book Technician</button>}
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default Technician;
