import React, { useEffect, useState } from 'react';
import { getPaymentRecords } from '../../services/api'; 

import './PaymentRecords.css'; // Import the CSS file

const PaymentRecords = ({ serviceRequestId }) => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            const response = await getPaymentRecords(serviceRequestId);
            setPayments(response.data);
        };

        fetchPayments();
    }, [serviceRequestId]);

    return (
        <div className="payment-records-container">
            <h2>Payment Records</h2>
            <ul>
                {payments.map((payment) => (
                    <li key={payment.id}>
                        <span className="amount">Amount: ${payment.amount}</span>
                        <span className="method">Method: {payment.paymentMethod}</span>
                        <span className="date">Date: {new Date(payment.paymentDate).toLocaleString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentRecords;
