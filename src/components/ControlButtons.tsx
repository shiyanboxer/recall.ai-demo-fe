import { useContext } from 'react';
import { Box, Button } from '@mui/material';
import axios from 'axios';
import { MeetingIdContext } from '../context/MeetingIdContext';

export default function ControlButtons() {
    const context = useContext(MeetingIdContext);

    if (!context) {
        throw new Error('MeetingIdContext is undefined, please verify the Provider');
    }

    const { meetingId } = context;

    // Function to make API calls
    const makeApiCall = async (url: string, action: string) => {
        try {
            const response = await axios.post(`http://127.0.0.1:5000/${url}`, {
                meetingId
            });
            const data = response.data;
            console.log(`${action} API response data:`, data);
        } catch (error) {
            console.error(`${action} API call error:`, error);
        }
    };

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 10,
                marginTop: 60,
            }}
        >
            <Button variant="contained" onClick={() => makeApiCall('pause', 'Pause')}>Pause</Button>
            <Button variant="contained" onClick={() => makeApiCall('resume', 'Resume')}>Resume</Button>
            <Button variant="contained" onClick={() => makeApiCall('disconnect', 'Disconnect')}>Disconnect</Button>
        </Box>
    );
}
