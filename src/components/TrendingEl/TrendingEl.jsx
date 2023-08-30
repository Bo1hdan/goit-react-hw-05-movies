import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// export const TrendingEl = ({ movie }) => {
//   const { id, title } = movie;
//   return (
//     <Link to={'/movies/:movieId'}>
//       <li key={id}>{title}</li>
//     </Link>
//   );
// };

export const TrendingEl = ({ movie }) => {
  const { id, title } = movie;
  return (
    <Link to={`/movies/${id}`}>
      <li key={id}>{title}</li>
    </Link>
  );
};

TrendingEl.propTypes = {
  movie: PropTypes.object.isRequired,
};
