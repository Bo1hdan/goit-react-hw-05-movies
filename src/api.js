const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '19f1e67b0e41f6f3f05a2a0c27971254';

export const searchTrendingMovies = () => {
  return fetch(
    `${BASE_URL}3/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
};

export const fetchMovieDetails = movieId => {
  return fetch(
    `${BASE_URL}3/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
};

export const getMovieCredits = async movieId => {
  return fetch(`${BASE_URL}3/movie/${movieId}/credits?api_key=${API_KEY}`);
};

export const getMovieReviews = async movieId => {
  return fetch(`${BASE_URL}3/movie/${movieId}/reviews?api_key=${API_KEY}`);
};

// export const searchMoviesByName = searchWord => {
//   return fetch(
//     `${BASE_URL}3/movie/query=${searchWord}/reviews?api_key=${API_KEY}`
//   );
// };
