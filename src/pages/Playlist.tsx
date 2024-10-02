import Button from '../buttons/Button';

interface PlaylistProps {
	onNext: () => void;
}

function Playlist({ onNext }: PlaylistProps) {
  return (
    // render background image that fills the whole component
		<>
			<Button
                onClick={() => {onNext}}
                label="Go again"
                disabled={false}
                loading={false}
            />
		</>
  )
}

export default Playlist;