import React, { useState } from 'react';
import Button from '../buttons/Button';
import NameInput from '../inputs/NameInput';
import { Filter } from 'bad-words';

interface NameFormProps {
  onSubmit: (name: string) => void;
}

function NameForm({ onSubmit }: NameFormProps) {
	const [name, setName] = useState('');
	const [error, setError] = useState<string | null>(null);
	const filter = new Filter();
	const warn = 'Please complete the form';
	const scold = 'Don\'t be a tit'

	const validateName = (input: string): boolean => {
		if (input.trim() === '') {
			setError(warn);
			return false;
		} else if (filter.isProfane(input) || input.trim().includes('<')) {
			setError(scold);
			return false;
		} else {
			setError(null);
			return true;
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (validateName(name)) {
			onSubmit(name);
		}
	};
	
	return (
		<form onSubmit={handleSubmit}>
			<NameInput value={name} onChange={setName} />
			{error && <p className="error">{error}</p>}
			<Button
				onClick={() => {}} // Add an empty onClick handler
				label="Let's Make a Playlist"
			/>
		</form>
	);
}

export default NameForm;