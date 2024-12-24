import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Typography, Box, Card, CardContent } from '@mui/material';
import SessionBrief from '../components/SessionBrief';
import Loading from '../components/Loading';

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`/api/profile/${user.id}`);
      setProfile(response.data);
    };

    fetchProfile();
  }, [user.id]);

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
    </Box>
  );
};

export default Profile;
