import Button from '../buttons/Button';
import playlist from '../data/playlist.json';
import Tracklist from '../playlist/Tracklist';
import { TracklistProps } from '../utils/playlist';

interface PlaylistProps {
	onNext: () => void;
}

function Playlist({ onNext }: PlaylistProps) {
  return (
    // render background image that fills the whole component
		<>
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