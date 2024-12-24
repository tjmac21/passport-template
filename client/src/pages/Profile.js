import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useAuth } from '../hooks/useAuth';
import { Typography, Box, Card, CardContent } from '@mui/material';
import SessionBrief from '../components/SessionBrief';
import Loading from '../components/Loading';

const Profile = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user, getPaymentMethod, savePaymentMethod } = useAuth();
  const [profile, setProfile] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`/api/profile/${user.id}`);
      setProfile(response.data);
    };

    fetchProfile();
  }, [user.id]);

  useEffect(() => {
    getPaymentMethod().then(setPaymentMethod);
  }, [getPaymentMethod]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      await savePaymentMethod(paymentMethod.id);
      setPaymentMethod(paymentMethod);
    }
  };

  if (!profile) {
    return <Loading text="Loading profile..." />;
  }

  return (
    <Box>
      <Typography variant="h4">Profile</Typography>
      <Typography>Name: {user.name}</Typography>
      <Typography>Email: {user.email}</Typography>
      <Typography variant="h5">Booked Sessions:</Typography>
      {profile.bookedSessions.map(session => (
        <Card key={session.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <SessionBrief session={session} />
          </CardContent>
        </Card>
      ))}
      <Typography variant="h5">Payment Details</Typography>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit">Save Card</button>
      </form>
      {paymentMethod && (
        <div>
          <p>Saved card:</p>
          <p>{paymentMethod.card.brand} ending in {paymentMethod.card.last4}</p>
        </div>
      )}
    </Box>
  );
};

export default Profile;
