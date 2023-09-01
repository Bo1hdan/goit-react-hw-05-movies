import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieByKeywords } from 'api';
import { TrendingEl } from 'components/TrendingEl/TrendingEl';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.get('query');

  useEffect(() => {
    if (!queryString) return;

    async function fetchSearchedMovies() {
      try {
        const response = await searchMovieByKeywords(queryString);
        const data = await response.json();
        setSearchedMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchSearchedMovies();
  }, [queryString]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchValue.value;
    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchValue"
          defaultValue={queryString ?? ''}
        />
        <button type="submit">Search</button>
      </form>
      {searchedMovies && searchedMovies.length > 0 && (
        <ul>
          {searchedMovies.map(movie => (
            <TrendingEl key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
