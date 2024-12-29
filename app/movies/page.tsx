'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Movies() {
  const [movies, setMovies] = useState<any[]>([]); // State to store movies
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error

  // Fetch data on component mount
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch('/api/movies'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const res = await response.json();
        setMovies(res.data); // Set data to state
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    }

    fetchMovies(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs only once when the component is mounted

  // Render loading, error, or data based on state
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} className="mb-6 border-b pb-4">
            {/* Rendering individual properties of the movie */}
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <Image
                src={movie.image_url}
                alt={movie.title}
                width={128}  // Specify width
                height={128} // Specify height
                className="object-cover rounded"
            />
            <p className="text-sm text-gray-500">{movie.artistName}</p>
            <p className="text-sm text-gray-400">{movie.timestamp} - {movie.category}</p>
            <p className="mt-2 text-lg font-semibold">Rating: {movie.rating} / 5</p>
            <p className="mt-2 text-gray-700">{movie.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}