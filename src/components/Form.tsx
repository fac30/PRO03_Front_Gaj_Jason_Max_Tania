import React, { useState } from 'react';
import Button from '../buttons/Button';

const PinkForm: React.FC = () => {
	// Static genres data, no need to fetch or use useEffect
	const genres = ['Pop', 'Rock', 'Jazz', 'Hip-Hop']; // Static array of genres
	const [selectedGenre, setSelectedGenre] = useState(''); // Store the selected genre

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault(); // Prevent the form from refreshing the page
		console.log('Form submitted with genre:', selectedGenre); // Log the selected genre
	};

	// Handle genre selection change
	const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedGenre(e.target.value); // Update the selected genre when the user picks one
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{/* Input for the day */}
				<label htmlFor='day'>What Day was it?</label>
				<input type='text' id='day' name='day' />

				{/* Input for how the user felt */}
				<label htmlFor='question-two'>How did you feel then?</label>
				<textarea id='question-two' name='question-two'></textarea>

				{/* Dropdown for selecting a genre */}
				<label htmlFor='genre'>Choose a genre</label>
				<select
					name='genre'
					id='genre'
					value={selectedGenre}
					onChange={handleGenreChange}
				>
					<option value=''>--Please choose an option--</option>
					{genres.map((genre, index) => (
						<option key={index} value={genre}>
							{genre}
						</option>
					))}
				</select>

				{/* Submit button */}
				 <Button />
			</form>
		</div>
	);
};

export default PinkForm;
