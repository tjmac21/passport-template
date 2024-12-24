import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import { useCompany } from '../hooks/useCompany';
import Loading from '../components/Loading';

const CompanySession = () => {
  const { fetchSession, updateSession, deleteSession } = useCompany();
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const data = await fetchSession(sessionId);
      setSession(data);
    };

    getSession();
  }, [fetchSession, sessionId]);

  const handleUpdate = async (updates) => {
    const updatedSession = await updateSession(sessionId, updates);
    setSession(updatedSession);
  };

  const handleDelete = async () => {
    await deleteSession(sessionId);
    navigate('/company');
  };

  if (!session) {
    return <Loading text="Loading session..." />;
  }

  return (
    <div>
      <Typography variant="h4">{session.name}</Typography>
      <Typography>{session.description}</Typography>
      <Typography>Date: {session.date}</Typography>
      <Typography>Price: {session.price}</Typography>
      <Button onClick={() => handleUpdate({ name: 'Updated Session Name' })}>
        Update
      </Button>
      <Button onClick={handleDelete} color="error">
        Delete
      </Button>
    </div>
  );
};

export default CompanySession; 