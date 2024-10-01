import Button from '../buttons/Button';
import NameInput from '../inputs/NameInput';

function NameForm() {
	return (
		<form>
			<NameInput />
			<Button
				onClick={() => {
					console.log('Landing Button Clicked');
				}}
				label="Let's Make a Playlist"
			/>
		</form>
	)
}

export default NameForm;