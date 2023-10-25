import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface MeetingIdContextProps {
    meetingId: string;
    setMeetingId: (id: string) => void;
}

export const MeetingIdContext = createContext<MeetingIdContextProps | undefined>({
    meetingId: '',
    setMeetingId: () => { },
});

export const MeetingIdProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [meetingId, setMeetingId] = useState<string>('');

    const contextValue: MeetingIdContextProps = {
        meetingId,
        setMeetingId,
    };

    return (
        <MeetingIdContext.Provider value={contextValue}>
            {children}
        </MeetingIdContext.Provider>
    );
}
