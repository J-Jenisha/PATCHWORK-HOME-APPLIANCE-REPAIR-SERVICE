import React, { useEffect, useState } from 'react';
import './BookingCalendar.css';
import TimeSelection from '../TimeSelection/TimeSelection'; // Import the TimeSelection component

const BookingCalendar = () => {
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [monthName, setMonthName] = useState('');
  const [currentMonth, setCurrentMonth] = useState(7); // August (0-based index)
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    // Get the number of days in the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    setDays(daysArray);

    // Get the month name
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    setMonthName(monthNames[currentMonth]);
  }, [currentMonth, currentYear]);

  const handleDayClick = (day) => {
    setSelectedDay(day); // Set the selected day
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendarRows = () => {
    const rows = [];
    let cells = [];

    days.forEach((day, index) => {
      cells.push(
        <td key={day} onClick={() => handleDayClick(day)}>
          {day}
        </td>
      );

      if ((index + 1) % 7 === 0 || index === days.length - 1) {
        rows.push(<tr key={index}>{cells}</tr>);
        cells = [];
      }
    });

    return rows;
  };

  return (
    <div>
      {selectedDay ? (
        <TimeSelection selectedDate={`${monthName} ${selectedDay}, ${currentYear}`} />
      ) : (
        <div id="calendar">
          <div className="calendar-header">
            <span className="arrow" onClick={handlePreviousMonth}>&#9664;</span> {/* Left Arrow */}
            <h2>{monthName} {currentYear}</h2>
            <span className="arrow" onClick={handleNextMonth}>&#9654;</span> {/* Right Arrow */}
          </div>
          <table>
            <thead>
              <tr>
                <th>MO</th>
                <th>TU</th>
                <th>WE</th>
                <th>TH</th>
                <th>FR</th>
                <th>SA</th>
                <th>SU</th>
              </tr>
            </thead>
            <tbody>{renderCalendarRows()}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingCalendar;
