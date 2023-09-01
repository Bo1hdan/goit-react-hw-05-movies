import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import MovieDetails from 'components/MoviePage/MoviePage';
import { Routes, Route, NavLink } from 'react-router-dom';
import Movies from 'pages/Movies';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {/* Use Link for each movie */}
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          {/* Define a dynamic route for movieId */}
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};
