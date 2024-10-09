import Track from './Track';
import { TrackProps, TracklistProps } from '../utils/playlistTypes';

function Tracklist({ playlist }: { playlist: TracklistProps }) {
  return (
    <>
      {playlist.map((item: TrackProps) => (
          <Track {...item} />
      ))}
    </>
  );
}

export default Tracklist;