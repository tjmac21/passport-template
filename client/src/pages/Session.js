import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import Loading from '../components/Loading';
import { useAuth } from '../hooks/useAuth';

const Session = () => {
  const { id } = useParams();
  const [session, setSession] = useState(null);
  const { user, bookSession } = useAuth();

  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch(`/api/sessions/${id}`);
      setSession(response.data);
    };

    fetchSession();
  }, [id]);

  const handleBooking = async () => {
    try {
      await bookSession(session.id);
      alert('Session booked successfully!');
    } catch (error) {
      console.error('Failed to book session:', error);
      alert('Failed to book session. Please try again.');
    }
  };

  if (!session) {
    return <Loading text="Loading session..." />;
  }

  return (
    <div>
      <h1>{session.name}</h1>
      <p>{session.description}</p>
      <p>Date: {session.date}</p>
      <p>Price: {session.price}</p>
      <Button onClick={handleBooking} disabled={!user}>
        {user ? 'Book Now' : 'Login to Book'}
      </Button>
    </div>
  );
};

export default Session;
