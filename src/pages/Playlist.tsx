import { useContext } from 'react';
import Button from '../buttons/Button';
import { UserContext } from '../sections/Content';

interface PlaylistProps {
	onNext: () => void;
}

function Playlist({ onNext }: PlaylistProps) {
	const { userName } = useContext(UserContext);

	return (
		<>
			<h2>Welcome, {userName}!</h2>
			<Button
				onClick={onNext}
				label="Go again"
				disabled={false}
				loading={false}
			/>
		</>
	)
}

export default Playlist;