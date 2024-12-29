'use client';

import { useEffect, useState } from 'react';
import Loading from '../components/Loading.jsx'
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
    return <Loading/>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background">
      <ul className="w-full max-w-4xl px-4">
        {movies.map((movie, index) => (
          <li key={index} className="mb-6 border-b pb-4 border-secondary">
            {/* Movie Title */}
            <h2 className="text-3xl font-bold text-primary text-center">{movie.title}</h2>

            {/* Movie Image */}
            <div className="flex justify-center mt-4">
              <Image
                src={movie.image_url}
                alt={movie.title}
                width={128}
                height={128}
                className="object-cover rounded shadow-lg"
              />
            </div>


            {/* Rating System (Dynamic Stars) */}
            <div className="rating justify-center mt-4 flex items-center">
              {/* Dynamically render filled stars based on rating */}
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name={`rating-${movie.title}`}
                  className={`mask mask-star-2 ${star <= movie.rating ? 'bg-secondary' : 'bg-gray-400'}`}
                  disabled // Disable input to make it read-only
                  checked={star <= movie.rating} // Dynamically check the appropriate number of stars
                />
              ))}
            </div>

            {/* Review */}
            <p className="mt-2 text-gray-700 text-center">{movie.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}