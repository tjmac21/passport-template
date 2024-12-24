import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import { useCompany } from '../hooks/useCompany';

const CreateSession = () => {
  const navigate = useNavigate();
  const { createSession } = useCompany();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSession = { name, description, date, price };
    await createSession(newSession);
    navigate('/company');
  };

  return (
    <div>
      <Typography variant="h4">Create New Session</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextField
          label="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <Button type="submit">Create Session</Button>
      </form>
    </div>
  );
};

export default CreateSession; 