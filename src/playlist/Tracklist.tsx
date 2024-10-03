// Tracklist.tsx
import Track from './Track';
import { TrackProps, TracklistProps } from '../utils/playlist';

function Tracklist({ playlist }: { playlist: TracklistProps }) {  // Fix prop structure
  return (
    <>
      {playlist.map((item: TrackProps) => (
          <Track {...item} />
      ))}
    </>
  );
}

export default Tracklist;