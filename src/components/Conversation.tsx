import { Box, Typography } from '@mui/material';

export default function Conversation() {
    return (
        <Box >
            <Typography variant="h4" component="h1" gutterBottom>
                You are connected to
            </Typography>
            <Box
                sx={{
                    backgroundColor: '#eee',
                    borderRadius: 2,
                }}>
                {/* Content of the dialog goes here */}
                <Typography variant="h4" component="h1" color={'black'} gutterBottom>
                    dialog does here
                </Typography>
            </Box>
        </Box >
    );
}
