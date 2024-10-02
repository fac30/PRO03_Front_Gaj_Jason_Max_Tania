import React, { useState } from 'react';
import Button from '../buttons/Button';
import NameInput from '../inputs/NameInput';

interface NameFormProps {
  onSubmit: (name: string) => void;
}

function NameForm({ onSubmit }: NameFormProps) {
	const [name, setName] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit(name);
	};
	
	return (
		<form onSubmit={handleSubmit}>
			<NameInput value={name} onChange={setName} />
			<Button
				onClick={() => {}} // Add an empty onClick handler
				label="Let's Make a Playlist"
			/>
		</form>
	)
}

export default NameForm;