import * as React from 'react';
import { Box } from '@mui/material';
import Footer from '../components/Footer';
import Conversation from '../components/Conversation';
import ControlButtons from '../components/ControlButtons';

export default function Connect() {
  return (
    <Box sx={{
      display: 'grid',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    }}>
      {/* <Header /> */}
      <Conversation />
      <ControlButtons />
      <Footer />
    </Box>
  );
}
