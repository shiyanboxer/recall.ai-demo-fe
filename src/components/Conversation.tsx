import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { MeetingIdContext } from '../context/MeetingIdContext';

export default function Conversation() {
    const context = useContext(MeetingIdContext);
    if (!context) {
        throw new Error('MeetingIdContext is undefined, please verify the Provider');
    }
    const { meetingId } = context;

    return (
        <Box >
            <Typography variant="h4" gutterBottom>
                You are connected to meeting id: {meetingId}
            </Typography>
            <Box
                sx={{
                    backgroundColor: '#eee',
                    borderRadius: 2,
                    marginTop: 5,
                    padding: 2,
                    width: "100%",
                    maxHeight: '800px',
                    overflowY: 'auto',
                }}>
                {/* Content of the dialog goes here */}
                <Typography variant="body1" color={"black"} gutterBottom>
                    Your meeting transcript will appear here.
                </Typography>
            </Box>
        </Box >
    );
}
