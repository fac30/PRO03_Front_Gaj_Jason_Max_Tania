interface TrackProps {
	trackId: string;
}

function Track ({ trackId }: TrackProps) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${trackId}`}
      width="300"
      height="380"
      allow="encrypted-media"
      title={`Spotify Track ${trackId}`}
    ></iframe>
  );
};

export default Track;