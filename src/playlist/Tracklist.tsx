import Track from './Track';
import { TracklistProps } from '../utils/playlist';


function Playlist(playlist: TracklistProps) {
  return (
    <div>
      <h2>Playlist</h2>
      {playlist.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <Track trackId={item.id} />
        </div>
      ))}
    </div>
  );
};

export default Playlist;