import { useContext } from 'react';
import Button from '../buttons/Button';
import { UserContext } from '../sections/Content';
import playlist from '../data/playlist.json';
import Tracklist from '../playlist/Tracklist';
import { TracklistProps } from '../utils/playlist';

interface PlaylistProps {
	onNext: () => void;
}

function Playlist({ onNext }: PlaylistProps) {
	const { userName } = useContext(UserContext);

	return (
		<>
			<h2>Welcome, {userName}!</h2>
            <div className="App">
                <h1>My Spotify Playlist</h1>
                {/* Pass playlistData to the Playlist component */}
                <Tracklist playlist={playlist} />
            </div>
            <Button
                onClick={() => {onNext}}
                label="Save playlist"
                disabled={false}
                loading={false}
            />
			<Button
                onClick={() => {onNext}}
                label="Try again"
                disabled={false}
                loading={false}
            />
		</>
	)
}

export default Playlist;