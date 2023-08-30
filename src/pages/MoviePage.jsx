import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'api'; // You need to define a function to fetch movie details
import MovieDetails from 'components/MovieDetails/MovieDetails';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetchMovieDetails(movieId);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovie();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return <MovieDetails movie={movieDetails} />;
};

export default MoviePage;
