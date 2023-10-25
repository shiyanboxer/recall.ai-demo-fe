import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Header() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to the Recall.ai Demo
      </Typography>
      <Typography variant="body1" component="h1" gutterBottom>
        {'This is a web application that connects to the '}
        <MuiLink color="inherit" href="https://recall.ai/">
          Recall.ai API
        </MuiLink>{' '}
        {' and lets you transcribe meetings in seconds!'}
      </Typography>
    </>
  );
}
