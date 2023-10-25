import { Box, Button } from '@mui/material';

export default function ControlButtons() {

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 10,
            marginTop: 60,
        }}>
            <Button variant="contained" >Pause</Button>
            <Button variant="contained">Resume</Button>
            <Button variant="contained">Disconnect</Button>
        </Box>
    );
}
