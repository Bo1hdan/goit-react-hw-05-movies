import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await getMovieReviews(movieId);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    }

    fetchReviews();
  }, [movieId]);

  if (!reviews) {
    return <div>Loading...</div>;
  }
  const reviewResult = reviews.results;
  return (
    <div>
      {reviewResult.length > 0 ? (
        reviewResult.map(({ author, content }) => (
          <ul key={author}>
            <li>
              <h2>Author:{author}</h2>
              <p> {content}</p>
            </li>
          </ul>
        ))
      ) : (
        <p>Reviews not found.</p>
      )}
    </div>
  );
};
export default Reviews;
