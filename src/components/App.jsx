import { lazy, Suspense } from 'react';
import css from 'pages/MovieDetailsPage.module.css';

import { Routes, Route } from 'react-router-dom';
import { StyledNavLink } from './App.styled';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <div>
      <header>
        <nav className={css.navigation}>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </header>
      <main className={css.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
