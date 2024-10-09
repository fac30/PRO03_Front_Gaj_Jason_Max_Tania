import React, { useState } from 'react';
import Label from '../text/Label';
import genresData from '../data/genres.json';

export default function Genre() {
   // Static array of genres
  const [selectedGenre, setSelectedGenre] = useState(''); // Store the selected genre

  // Handle genre change
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <div className='m-4 flex-auto space-x-2'>
      <Label htmlFor="musicGenre" text="Select a music genre:" />
       
      <select
        name="musicGenre"
        id="musicGenre"
        value={selectedGenre}
        onChange={handleGenreChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
      >
        <option value="">Select a music genre</option>
        {genresData.categories.map((genre: string, index: number) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}
