import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = ({ movie }) => {
  const { title, overview, backdrop_path, genres, vote_average, release_date } =
    movie;

  return (
    <div>
      <h2>
        {title}({release_date.substring(0, 4)})
      </h2>
      <p>User score {vote_average.toFixed(1) * 10}%</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
      />
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <div>
        {genres.map(genre => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieDetails;
