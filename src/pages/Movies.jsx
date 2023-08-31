// import React, { useState, useEffect } from 'react';
// import { searchMoviesByName } from 'api';

// export const Movies = () => {
//   useEffect(() => {
//     if (keyWord && page) {
//       setIsLoading(true);
//       searchImages(keyWord, page)
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           return Promise.reject(new Error(`Nothing found for ${keyWord}`));
//         })
//         .then(data => {
//           if (!data.hits.length) {
//             alert('Nothing found');
//           } else {
//             setImages(prevImages => [...prevImages, ...data.hits]);
//             setTotalImages(data.totalHits);
//           }
//         })
//         .catch(error => {
//           console.log(errorState);
//           setErrorState(error);
//         })
//         .finally(() => {
//           setIsLoading(false);
//         });
//     }
//   }, [keyWord, page, errorState]);

//   const onSubmit = e => {
//     e.preventDefault();
//     const query = e.target.elements.searchWord.value.trim().toLowerCase();
//     if (!query.length) {
//       alert('Please, write a search word');
//       return;
//     }

//     setKeyWord(query);
//     setImages([]);
//     setPage(1);

//     e.target.reset();
//   };

//   return <></>;
// };
// export default Movies;

import React from 'react';

const Movies = () => {
  return <div>Hello</div>;
};
export default Movies;
