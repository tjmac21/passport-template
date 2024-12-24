import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const SessionBrief = ({ session }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          <Link to={`/session/${session.id}`}>{session.name}</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {session.description.substring(0, 100)}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: {session.date} - {session.time}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {session.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/session/${session.id}`}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default SessionBrief;
