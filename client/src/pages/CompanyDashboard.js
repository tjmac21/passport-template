import { Link } from 'react-router-dom';
import { Typography, Button, Grid } from '@mui/material';
import { useCompany } from '../hooks/useCompany';
import SessionBrief from '../components/SessionBrief';

const CompanyDashboard = () => {
  const { sessions } = useCompany();

  return (
    <div>
      <Typography variant="h4">Company Dashboard</Typography>
      <Button component={Link} to="/company/sessions/new" variant="contained">
        Create New Session
      </Button>
      <Typography variant="h5">Sessions</Typography>
      <Grid container spacing={4}>
        {sessions.map(session => (
          <Grid item xs={12} sm={6} md={4} key={session.id}>
            <SessionBrief session={session} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CompanyDashboard; 