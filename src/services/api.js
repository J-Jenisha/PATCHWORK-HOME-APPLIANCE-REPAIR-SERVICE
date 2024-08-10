import axios from 'axios';

// Option 1: Directly define API_URL
const API_URL = 'https://your-api-url.com';

// Option 2: Environment variable approach
// const API_URL = process.env.REACT_APP_API_URL;

export const addRequestComment = (comment) => axios.post(`${API_URL}/comments`, comment);
export const getRequestComments = (serviceRequestId) => axios.get(`${API_URL}/comments?serviceRequestId=${serviceRequestId}`);

export const addUserLocation = (location) => axios.post(`${API_URL}/locations`, location);
export const getUserLocations = (userId) => axios.get(`${API_URL}/locations?userId=${userId}`);

export const addTechnicianAvailability = (availability) => axios.post(`${API_URL}/availability`, availability);
export const getTechnicianAvailability = (technicianId) => axios.get(`${API_URL}/availability?technicianId=${technicianId}`);

export const getNotifications = (userId) => axios.get(`${API_URL}/notifications?userId=${userId}`);

export const getPaymentRecords = (serviceRequestId) => axios.get(`${API_URL}/payments?serviceRequestId=${serviceRequestId}`);
