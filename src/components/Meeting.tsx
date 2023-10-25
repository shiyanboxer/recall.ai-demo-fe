import * as React from 'react';
import { Button, Input, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Home() {
    const [botName, setBotName] = React.useState('');
    const [meetingLink, setMeetingLink] = React.useState('');
    const [isLinkValid, setIsLinkValid] = React.useState(true);
    const router = useRouter();

    const connectToMeeting = async (botName: string, meetingLink: string) => {
        try {
            const payload = {
                meeting_url: meetingLink,
                bot_name: botName,
            };
            const response = await axios.post('http://127.0.0.1:5000/', payload, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = response.data;
            console.log('API response data:', data);
            router.push('/connect');
        } catch (error) {
            console.error('API call error:', error);
        }
    };

    const handleConnectClick = () => {
        if (validateURL(meetingLink)) {
            setIsLinkValid(true);
            connectToMeeting(botName, meetingLink);
        } else {
            setIsLinkValid(false);
        }
    };

    const validateURL = (url: string) => {
        const urlPattern = /^(http[s]?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-z]{2,})([/\w\.-]*)*\/?$/;
        return urlPattern.test(url);
    };

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 2, marginTop: 10 }}>
            <Input
                placeholder="Meeting bot name"
                value={botName}
                onChange={(e) => setBotName(e.target.value)}
                sx={{
                    '& input': {
                        padding: '10px 14px',
                        borderRadius: '4px',
                        border: '1px solid #2D60F5',
                    },
                }}
            />
            <Input
                placeholder="Meeting link"
                value={meetingLink}
                onChange={(e) => setMeetingLink(e.target.value)}
                error={!isLinkValid}
                sx={{
                    '& input': {
                        padding: '10px 14px',
                        borderRadius: '4px',
                        border: '1px solid #2D60F5',
                    },
                }}
            />
            {!isLinkValid && (
                <Typography variant="body2" color="error">
                    Invalid URL format. Please enter a valid URL.
                </Typography>
            )}
            <Button
                variant='contained'
                onClick={handleConnectClick}
            >
                Connect
            </Button>
        </Box >
    );
}
