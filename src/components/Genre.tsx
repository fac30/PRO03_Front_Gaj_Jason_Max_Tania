import React, { useState } from 'react';
import Label from './Label';
import genresData from './genres.json';

export default function Genre() {
	// Static array of genres
	const [selectedGenre, setSelectedGenre] = useState(''); // Store the selected genre

	// Handle genre change
	const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedGenre(e.target.value);
	};

	return (
		<div className='w-full'>
			<Label htmlFor='genre' text='Select Genre:' />

			<select
				name='genre'
				id='genre'
				value={selectedGenre}
				onChange={handleGenreChange}
				className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
			>
				<option value=''>--Please choose an option--</option>
				{genresData.categories.map((genre, index) => (
					<option key={index} value={genre}>
						{genre}
					</option>
				))}
			</select>
		</div>
	);
}
