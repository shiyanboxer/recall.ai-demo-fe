import MuiLink from '@mui/material/Link';
import { Box, Typography, } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{
      position: 'fixed',
      bottom: 20,
      left: 0,
      width: '100%',
    }}>
      <Typography variant="body1" color="text.secondary" align="center">
        {'This project was built by '}
        <MuiLink color="inherit" href="https://github.com/shiyanboxer">
          Shiyan Boxer.
        </MuiLink>{' '}
      </Typography>
      <Typography variant="body1" color="text.secondary" align="center">
        {'View this project on '}
        <MuiLink color="inherit" href="https://github.com/shiyanboxer/recall.ai-demo">
          GitHub.
        </MuiLink>{' '}
      </Typography>
    </Box >
  );
}