import { Box } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Meeting from '../components/Meeting';

export default function Home() {
  return (
    <Box sx={{
      display: 'grid',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    }}>
      <Header />
      <Meeting />
      <Footer />
    </Box>
  );
}
