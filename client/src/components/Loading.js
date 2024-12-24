import { CircularProgress, Box } from '@mui/material';

const Loading = ({ text }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress />
      {text && <Box ml={2}>{text}</Box>}
    </Box>
  );
};

export default Loading;
