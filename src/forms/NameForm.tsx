import React from 'react';
import Button from '../buttons/Button';
import NameInput from '../inputs/NameInput';

interface NameFormProps {
	onSubmit: () => void;
}

function NameForm({ onSubmit }: NameFormProps) {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit();
	};
	
	return (
		<form onSubmit={handleSubmit}>
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