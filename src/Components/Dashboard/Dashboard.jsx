import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('users');
    const [technicians, setTechnicians] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [servicemen, setServicemen] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userSearchTerm, setUserSearchTerm] = useState('');
    const [servicemanSearchTerm, setServicemanSearchTerm] = useState('');
    const [bookingSearchTerm, setBookingSearchTerm] = useState('');
    const [editingServicemanId, setEditingServicemanId] = useState(null);
    const [editingServicemanData, setEditingServicemanData] = useState({ name: '', serviceType: '', status: '' });
    const [editingBookingId, setEditingBookingId] = useState(null);
    const [editingBookingData, setEditingBookingData] = useState({ service: '', status: '' });
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        address: ''
    });

    useEffect(() => {
        const dummyUsers = [
            { id: 1, name: 'Ashwin', email: 'ashwin@gmail.com', mobile: '9486499173'},
            { id: 2, name: 'PraveenKumar', email: 'praveenkumar@gmail.com', mobile: '9876278910' },
            { id: 3, name: 'Rajesh', email: 'rajesh@gmail.com', mobile: '9873424910' },
            { id: 4, name: 'Vaishnavi', email: 'vaishu@gmail.com', mobile: '9876274921' },
            { id: 5, name: 'Manoj', email: 'manoj@gmail.com', mobile: '9876274890' }
        ];
        const dummyServicemen = [
            { id: 1, name: 'Mike Johnson', serviceType: 'Electrician', status: 'Available' },
            { id: 2, name: 'Emily Davis', serviceType: 'Plumber', status: 'Busy' }
        ];

        const dummyBookings = [
            { id: 1, user: { name: 'John Doe' }, service: 'Electrical Repair', status: 'Pending', assignedServiceman: null },
            { id: 2, user: { name: 'Jane Smith' }, service: 'Plumbing Service', status: 'Pending', assignedServiceman: null }
        ];


        const handleSectionChange = (section) => (e) => {
            e.preventDefault();
            setActiveSection(section);
            setDropdownOpen(false); // Close dropdown on selection
        };
    
        const toggleDropdown = () => {
            setDropdownOpen(!dropdownOpen);
        };
        
        setTimeout(() => {
            setUsers(dummyUsers);
            setServicemen(dummyServicemen);
            setBookings(dummyBookings);
            setLoading(false);
        }, 1000); 
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersRes, servicemenRes, bookingsRes, techniciansRes] = await Promise.all([
                    fetch('/api/users'),
                    fetch('/api/servicemen'),
                    fetch('/api/bookings'),
                    fetch('/api/technicians')
                ]);

                if (usersRes.ok && servicemenRes.ok && bookingsRes.ok && techniciansRes.ok) {
                    const [usersData, servicemenData, bookingsData, techniciansData] = await Promise.all([
                        usersRes.json(),
                        servicemenRes.json(),
                        bookingsRes.json(),
                        techniciansRes.json()
                    ]);

                    setUsers(usersData);
                    setServicemen(servicemenData);
                    setBookings(bookingsData);
                    setTechnicians(techniciansData);
                    setLoading(false);
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/technicians', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to add technician');
            }

            const techniciansRes = await fetch('/api/technicians');
            if (techniciansRes.ok) {
                const techniciansData = await techniciansRes.json();
                setTechnicians(techniciansData);
            } else {
                throw new Error('Failed to fetch updated technicians');
            }

            const handleDeleteTechnician = async (id) => {
                try {
                    const response = await fetch(`/api/technicians/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    
            
                    if (response.ok) {
                        const message = await response.text(); // Get the response text
                        alert(message); // Display the success message
                        setTechnicians(technicians.filter(technician => technician.id !== id));
                    } else {
                        throw new Error('Failed to delete technician');
                    }
                } catch (error) {
                    console.error('Error deleting technician:', error);
                }
            };
            
            setFormData({
                name: '',
                phoneNumber: '',
                email: '',
                address: ''
            });
        } catch (error) {
            console.error('Error adding technician:', error);
        }
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleDeleteServiceman = (id) => {
        setServicemen(servicemen.filter(serviceman => serviceman.id !== id));
    };

    const handleDeleteTechnician = (id) => {
        setTechnicians(technicians.filter(technician => technician.id !== id));
    };

    const handleAssignServiceman = (bookingId, servicemanId) => {
        setBookings(bookings.map(booking =>
            booking.id === bookingId ? { ...booking, assignedServiceman: servicemanId } : booking
        ));
    };

    const handleEditServiceman = (id) => {
        const servicemanToEdit = servicemen.find(serviceman => serviceman.id === id);
        setEditingServicemanId(id);
        setEditingServicemanData({ ...servicemanToEdit });
    };

    const handleSaveServiceman = () => {
        setServicemen(servicemen.map(serviceman =>
            serviceman.id === editingServicemanId ? { ...editingServicemanData, id: editingServicemanId } : serviceman
        ));
        setEditingServicemanId(null);
        setEditingServicemanData({ name: '', serviceType: '', status: '' });
    };

    const handleEditBooking = (id) => {
        const bookingToEdit = bookings.find(booking => booking.id === id);
        setEditingBookingId(id);
        setEditingBookingData({ service: bookingToEdit.service, status: bookingToEdit.status });
    };

    const handleSaveBooking = () => {
        setBookings(bookings.map(booking =>
            booking.id === editingBookingId ? { ...booking, ...editingBookingData } : booking
        ));
        setEditingBookingId(null);
        setEditingBookingData({ service: '', status: '' });
    };

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(userSearchTerm.toLowerCase()));
    const filteredServicemen = servicemen.filter(serviceman => serviceman.name.toLowerCase().includes(servicemanSearchTerm.toLowerCase()));
    const filteredBookings = bookings.filter(booking => booking.user.name.toLowerCase().includes(bookingSearchTerm.toLowerCase()));

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="admin-dashboard">
            <div className="sidebars">
                <h2>Admin Dashboard</h2>
                <div className="dropdown">
                    <button className="dropbtn">Dashboard</button>
                    <div className="dropdown-content">
                        <a href="#" onClick={() => setActiveSection('users')}>User Details</a>
                        <a href="#" onClick={() => setActiveSection('userRecords')}>User Records</a>
                        <a href="#" onClick={() => setActiveSection('technicians')}>Technician Details</a>
                        <a href="#" onClick={() => setActiveSection('technicianRecords')}>Technician Records</a>
                        <a href="#" onClick={() => setActiveSection('bookings')}>Booking Requests</a>
                    </div>
                </div>
            </div>
            <div className="main-content">
                {activeSection === 'users' && (
                    <div>
                        <h2 className='h2'>User Service Records</h2>
                        <input
                            type="text"
                            placeholder="Search Users..."
                            value={userSearchTerm}
                            onChange={(e) => setUserSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.mobile}</td>
                                        <td>
                                            <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeSection === 'userRecords' && (
                    <div>
                        <h2 className='h2'>User Records</h2>
                        {/* Display user records here */}
                    </div>
                )}

                {activeSection === 'technicians' && (
                    <div>
                        <h2 className='h2'>Technician Details</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                            <button type="submit">Add Technician</button>
                        </form>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {technicians.map(technician => (
                                    <tr key={technician.id}>
                                        <td>{technician.id}</td>
                                        <td>{technician.name}</td>
                                        <td>{technician.phoneNumber}</td>
                                        <td>{technician.email}</td>
                                        <td>{technician.address}</td>
                                        <td>
                                            <button className="delete-button" onClick={() => handleDeleteTechnician(technician.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeSection === 'technicianRecords' && (
                    <div>
                        <h2 className='h2'>Technician Records</h2>
                        {/* Display technician records here */}
                    </div>
                )}

                {activeSection === 'servicemen' && (
                    <div>
                        <h2 className='h2'>Serviceman Details</h2>
                        <input
                            type="text"
                            placeholder="Search Servicemen..."
                            value={servicemanSearchTerm}
                            onChange={(e) => setServicemanSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Service Type</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredServicemen.map(serviceman => (
                                    <tr key={serviceman.id}>
                                        <td>{serviceman.id}</td>
                                        <td>{serviceman.name}</td>
                                        <td>{serviceman.serviceType}</td>
                                        <td>{serviceman.status}</td>
                                        <td>
                                            <button className="edit-button" onClick={() => handleEditServiceman(serviceman.id)}>Edit</button>
                                            <button className="delete-button" onClick={() => handleDeleteServiceman(serviceman.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {editingServicemanId && (
                            <div className="edit-form">
                                <h3>Edit Serviceman</h3>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={editingServicemanData.name}
                                    onChange={(e) => setEditingServicemanData({ ...editingServicemanData, name: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Service Type"
                                    name="serviceType"
                                    value={editingServicemanData.serviceType}
                                    onChange={(e) => setEditingServicemanData({ ...editingServicemanData, serviceType: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Status"
                                    name="status"
                                    value={editingServicemanData.status}
                                    onChange={(e) => setEditingServicemanData({ ...editingServicemanData, status: e.target.value })}
                                    required
                                />
                                <button onClick={handleSaveServiceman}>Save</button>
                                <button onClick={() => setEditingServicemanId(null)}>Cancel</button>
                            </div>
                        )}
                    </div>
                )}

                {activeSection === 'bookings' && (
                    <div>
                        <h2 className='h2'>Booking Requests</h2>
                        <input
                            type="text"
                            placeholder="Search Bookings..."
                            value={bookingSearchTerm}
                            onChange={(e) => setBookingSearchTerm(e.target.value)}
                            className="search-input"
                        />
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Service</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBookings.map(booking => (
                                    <tr key={booking.id}>
                                        <td>{booking.id}</td>
                                        <td>{booking.user.name}</td>
                                        <td>{booking.service}</td>
                                        <td>{booking.status}</td>
                                        <td>
                                            <button className="edit-button" onClick={() => handleEditBooking(booking.id)}>Edit</button>
                                            <button className="assign-button" onClick={() => handleAssignServiceman(booking.id, 1)}>Assign Serviceman</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {editingBookingId && (
                            <div className="edit-form">
                                <h3>Edit Booking</h3>
                                <input
                                    type="text"
                                    placeholder="Service"
                                    name="service"
                                    value={editingBookingData.service}
                                    onChange={(e) => setEditingBookingData({ ...editingBookingData, service: e.target.value })}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Status"
                                    name="status"
                                    value={editingBookingData.status}
                                    onChange={(e) => setEditingBookingData({ ...editingBookingData, status: e.target.value })}
                                    required
                                />
                                <button onClick={handleSaveBooking}>Save</button>
                                <button onClick={() => setEditingBookingId(null)}>Cancel</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;