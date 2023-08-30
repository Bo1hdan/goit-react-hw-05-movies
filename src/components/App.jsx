import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import MoviePage from 'pages/MoviePage';
import { Routes, Route, NavLink } from 'react-router-dom';

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
          <Route path="/movies" element={<MoviePage />} />
          {/* Define a dynamic route for movieId */}
          <Route path="/movies/:movieId" element={<MoviePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

// export const App = () => {
//   return (
//     <div>
//       <header>
//         <nav>
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/movies">Movies</NavLink>
//         </nav>
//       </header>
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };
