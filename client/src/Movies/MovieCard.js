import React from 'react';

import UpdateMovieForm from './UpdateMovieForm.js';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div className="movie-card">
       <UpdateMovieForm editing={props.editing} movie={props.movie} />
    </div>
  );
};

export default MovieCard;
