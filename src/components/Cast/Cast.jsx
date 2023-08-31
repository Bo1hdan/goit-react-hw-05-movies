import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'api';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await getMovieCredits(movieId);
        const data = await response.json(); // Парсимо JSON
        setActors(data);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    }

    fetchCast();
  }, [movieId]);

  const renderProfileImage = profilePath => {
    if (profilePath) {
      return `https://image.tmdb.org/t/p/w200${profilePath}`;
    } else {
      return './images/person.png';
    }
  };

  if (!actors) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {actors.cast.length > 0 &&
        actors.cast.map(({ name, character, profile_path }) => (
          <div key={name}>
            <img
              src={renderProfileImage(profile_path)}
              alt={`poster of ${name}`}
            />
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </div>
        ))}
    </div>
  );
};
export default Cast;
