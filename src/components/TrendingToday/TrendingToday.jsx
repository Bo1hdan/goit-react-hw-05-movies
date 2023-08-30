import React, { useState, useEffect } from 'react';
import { searchTrendingMovies } from 'api';
import { TrendingEl } from 'components/TrendingEl/TrendingEl';

function TrendingToday() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const response = await searchTrendingMovies();
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {movies.map(movie => (
          <TrendingEl key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default TrendingToday;
