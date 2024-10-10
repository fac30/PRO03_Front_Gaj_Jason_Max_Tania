import { UserInputs, TracklistProps } from './playlistTypes';

export async function fetchPlaylist(userResponse: UserInputs): Promise<TracklistProps> {
    if (userResponse) {
        try {
            const moodTimeUrl = `http://35.178.184.58:3000/api/run/?date=${
                    userResponse.date
                }T00:00:00.000Z&eventDescription=${
                    userResponse.eventDescription
                }&musicGenre=${
                    userResponse.musicGenre
                }&playlistCount=${
                    userResponse.playlistCount
                }`;
            const response = await fetch(moodTimeUrl,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);

            if (Array.isArray(data)) {
                return data;
            } else {
                throw new Error('Unexpected response format: data is not an array');
            }
        } catch (error) {
            console.error('Error calling Mood Time API:', error);
            return [];
        }
    }
    return [];
}