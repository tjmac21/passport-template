import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useAuth } from '../hooks/useAuth';
import PaymentForm from '../components/PaymentForm';
import Loading from '../components/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const Session = () => {
  const { id } = useParams();
  const { user, bookSession, getPaymentMethod } = useAuth();
  const [session, setSession] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch(`/api/sessions/${id}`);
      const data = await response.json();
      setSession(data);
    };

    fetchSession();
  }, [id]);

  useEffect(() => {
    if (user) {
      getPaymentMethod().then(setPaymentMethod);
    }
  }, [user, getPaymentMethod]);

  const handlePaymentSuccess = async (paymentMethodId) => {
    await bookSession(id, paymentMethodId);
    // Redirect to success page
  };

  const handleSavedCardBooking = async () => {
    await bookSession(id, paymentMethod.id);
    // Redirect to success page
  };

  if (!session) {
    return <Loading text="Loading session..." />;
  }

  return (
    <div>
      <h1>{session.name}</h1>
      <p>{session.description}</p>
      <p>Price: ${session.price}</p>
      {paymentMethod ? (
        <button onClick={handleSavedCardBooking}>
          Book with {paymentMethod.card.brand} ending in {paymentMethod.card.last4}
        </button>
      ) : (
        <Elements stripe={stripePromise}>
          <PaymentForm price={session.price} onSuccess={handlePaymentSuccess} />
        </Elements>
      )}
    </div>
  );
};

export default Session;
