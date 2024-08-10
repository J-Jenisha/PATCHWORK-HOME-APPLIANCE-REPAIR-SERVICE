import React, { useState, useEffect } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate, useLocation } from 'react-router-dom';
import './Payment.css';

// Replace with your own public Stripe key
const stripePromise = loadStripe('your-publishable-key-here');

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [billDescription, setBillDescription] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card'); // Added state for payment method
  const [upiId, setUpiId] = useState(''); // Added state for UPI ID

  // Check if the form has unsaved changes
  const hasUnsavedChanges = billAmount !== '' || billDescription !== '' || upiId !== '';

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setError('');
    setSuccess('');

    if (paymentMethod === 'card') {
      if (!stripe || !elements) {
        return;
      }

      const { error: stripeError, paymentMethod: stripePaymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (stripeError) {
        setError(stripeError.message);
        setIsProcessing(false);
        return;
      }

      try {
        // Replace with your backend endpoint
        const response = await fetch('/api/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentMethodId: stripePaymentMethod.id,
            amount: parseInt(billAmount) * 100, // Amount in cents (convert INR to paise)
            description: billDescription,
          }),
        });

        const result = await response.json();

        if (result.error) {
          setError(result.error);
        } else {
          setSuccess('Payment successful!');
        }
      } catch (error) {
        setError('An error occurred. Please try again.');
      } finally {
        setIsProcessing(false);
      }
    } else if (paymentMethod === 'upi') {
      try {
        // Replace with your backend endpoint
        const response = await fetch('/api/payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            upiId: upiId,
            amount: parseInt(billAmount) * 100, // Amount in cents (convert INR to paise)
            description: billDescription,
          }),
        });

        const result = await response.json();

        if (result.error) {
          setError(result.error);
        } else {
          setSuccess('Payment successful!');
        }
      } catch (error) {
        setError('An error occurred. Please try again.');
      } finally {
        setIsProcessing(false);
      }
    }
  };

  // Prevent navigation if there are unsaved changes
  useEffect(() => {
    const handleWindowClose = (event) => {
      if (hasUnsavedChanges) {
        event.preventDefault();
        event.returnValue = ''; // For most browsers
      }
    };

    window.addEventListener('beforeunload', handleWindowClose);

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
    };
  }, [hasUnsavedChanges]);

  return (
    <div className="Background-payment">
      <div className='container-payment'>
        <form onSubmit={handleSubmit}>
          <h1 className='h1-payment'>Pay Your Bill</h1>
          <div className='division-payment'>
            <label htmlFor="billAmount" className='label-payment'>Bill Amount (INR)</label>
            <input
              id="billAmount"
              className='input-payment'
              type="number"
              value={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
              required
            />
          </div>
          <div className='division-payment'>
            <label htmlFor="billDescription" className='label-payment'>Description</label>
            <input
              id="billDescription"
              className='input-payment'
              type="text"
              value={billDescription}
              onChange={(e) => setBillDescription(e.target.value)}
              required
            />
          </div>
          <div className='division-payment'>
            <label className='payment-method-label'>Select Payment Method</label>
            <div className='payment-method-select'>
              <div
                className={`payment-method-option ${paymentMethod === 'card' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                Card
              </div>
              <div
                className={`payment-method-option ${paymentMethod === 'upi' ? 'selected' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                UPI
              </div>
            </div>
          </div>
          {paymentMethod === 'card' && (
            <div className='division-payment'>
              <CardElement className='input-payment' />
            </div>
          )}
          {paymentMethod === 'upi' && (
            <div className='division-payment'>
              <label htmlFor="upiId" className='label-payment'>UPI ID</label>
              <input
                id="upiId"
                className='input-payment'
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
              />
            </div>
          )}
          <button type="submit" className='button-payment' disabled={isProcessing}>
            {isProcessing ? 'Processing...' : 'Pay Now'}
          </button>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
        </form>
      </div>
    </div>
  );
};

const BillPaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
};

export default BillPaymentPage;
