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

	const validateName = (input: string): boolean => {
		if (input.trim() === '') {
			setError('Please enter your name');
			return false;
		}
		
		if (filter.isProfane(input)) {
			setError('Please enter a respectful name');
			return false;
		}
		
		setError(null);
		return true;
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (validateName(name)) {
			onSubmit(name);
		}
	};
	
	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 w-full max-w-md">
			<div className="w-full">
				<NameInput 
					value={name} 
					onChange={setName} 
				/>
			</div>
			
			{error && <p className="text-red-500 text-sm">{error}</p>}

			<Button
				onClick={() => {}}
				label="Let's Make a Playlist"
			/>
		</form>
	);
}

export default NameForm;