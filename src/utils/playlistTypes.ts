export interface UserInputs {
    date: string,
    eventDescription: string,
    musicGenre: string,
    playlistCount: number
};

export interface TrackProps {
    id: string,
    title: string,
    artist: string,
    album: string,
    releaseDate: string,
    duration: number
};

export type TracklistProps = TrackProps[];
