import React from 'react';

const MovieDetails = ({ movie }) => {
  const { title, overview, backdrop_path } = movie;

  return (
    <div>
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
      />
      <p>{overview}</p>
    </div>
  );
};

export default MovieDetails;
