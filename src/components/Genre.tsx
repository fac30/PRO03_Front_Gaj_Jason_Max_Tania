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
    <div className='m-4 flex-auto space-x-2'>
      <Label htmlFor="genre" className="flex flex-col space-y-2 text-lg font-medium text-gray-700">
        Select Genre:
      </Label>
      <select
        name="genre"
        id="genre"
        value={selectedGenre}
        onChange={handleGenreChange}
        className="w-1/4 mx-auto p-4 border border-gray-300 rounded-md bg-white text-black placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">--Please choose an option--</option>
        {genresData.categories.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}
