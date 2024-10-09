import { UserInputs, TracklistProps } from './playlistTypes';

export async function fetchPlaylist(userResponse: UserInputs): Promise<TracklistProps> {
    if (userResponse) {
        try {
            const response = await fetch(
                `http://3.10.22.166:3000/api/run/?musicGenre=${encodeURIComponent(
                    userResponse.musicGenre
                )}&eventDescription=${encodeURIComponent(
                    userResponse.eventDescription
                )}&date=${encodeURIComponent(
                    userResponse.date
                )}T00:00:00.000Z&playlistCount=${encodeURIComponent(
                    userResponse.playlistCount
                )}`,
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