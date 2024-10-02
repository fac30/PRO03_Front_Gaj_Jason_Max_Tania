import React, { useState } from 'react';
import Label from './Label';
import { LabelProps } from '../utils/typeBucket';

export default function Genre() {
  const genres = ['Pop', 'Rock', 'Jazz', 'Hip-Hop']; // Static array of genres
  const [selectedGenre, setSelectedGenre] = useState(''); // Store the selected genre

  // Handle genre change
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <>
      <Label htmlFor="genre" name="genre">
        Select Genre:
      </Label>
      <select
        name="genre"
        id="genre"
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        <option value="">--Please choose an option--</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </>
  );
}
