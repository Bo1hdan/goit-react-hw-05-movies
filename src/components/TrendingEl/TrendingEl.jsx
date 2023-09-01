import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const TrendingEl = ({ movie }) => {
  const location = useLocation();
  const { id, title } = movie;

  // const state = location.state || {};
  return (
    <Link state={{ from: location }} to={`/movies/${id}`}>
      <li key={id}>{title}</li>
    </Link>
  );
};

TrendingEl.propTypes = {
  movie: PropTypes.object.isRequired,
};
