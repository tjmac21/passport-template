import { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import SessionBrief from '../components/SessionBrief';
import Loading from '../components/Loading';

const Explore = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessions = async () => {
      const response = await fetch('/api/sessions');
      setSessions(response.data);
      setLoading(false);
    };

    fetchSessions();
  }, []);

  if (loading) {
    return <Loading text="Loading sessions..." />;
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Explore Sessions
      </Typography>
      <Grid container spacing={4}>
        {sessions.map(session => (
          <Grid item xs={12} sm={6} md={4} key={session.id}>
            <SessionBrief session={session} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Explore;
