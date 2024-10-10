import { TrackProps } from '../utils/playlistTypes';


function Track({ id, title, album, releaseDate, duration }: TrackProps) {
  // Format the duration from milliseconds to minutes and seconds
  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  return (
    <>
      <div key={id} className="p-0 m-2">
          <iframe
          className="track h-20 border-none rounded-2xl shadow-lg shadow-[var(--purple)]"
          src={`https://open.spotify.com/embed/track/${id}`}
          allow="encrypted-media"
          title={title}
          ></iframe>
      </div>
      <div className="">
          <p className="font-thin text-xs m-0 text-black">{album} | {new Date(releaseDate).getFullYear()} | {formatDuration(duration)}</p>
      </div>
    </>
  );
};

export default Track;