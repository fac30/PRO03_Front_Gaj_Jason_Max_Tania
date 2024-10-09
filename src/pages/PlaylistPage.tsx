// Playlist.tsx
import { useContext } from 'react';
import Button from '../buttons/Button';
import { UserContext } from '../sections/Content';
import playlist from '../data/playlist.json';
import Tracklist from '../playlist/Tracklist';
import { TracklistProps } from '../utils/playlist';

interface PlaylistProps {
  onNext: () => void;
}

function PlaylistPage({ onNext }: PlaylistProps) {
  const { userName } = useContext(UserContext);

  return (
    <section id="playlist" className="bg-gradient-to-r from-[var(--lightgreen)] to-[var(--purple)] flex flex-col justify-center items-center">
      <h1>{userName}, this is your</h1>
      <h1 className="text-white">TOP 5</h1>
      <div className="flex flex-col items-center w-3/4 h-96 overflow-y-auto shadow-xl shadow-[var(--purple-shadow)] bg-[var(--pink)] rounded-lg p-2">
        {/* Correctly pass playlist data */}
        <Tracklist playlist={playlist as TracklistProps} />
      </div>
      <div className="flex justify-center space-x-4 mt-4">
      <Button
        onClick={onNext}  // Correct invocation
        label="Save playlist"
        disabled={false}
        loading={false}
      />
      <Button
        onClick={onNext}  // Correct invocation
        label="Try again"
        disabled={false}
        loading={false}
      />
      </div>
    </section>
  );
}

export default PlaylistPage;