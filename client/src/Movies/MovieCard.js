import React from 'react';

import UpdateMovieForm from './UpdateMovieForm.js';

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  if(props.state) {
    return (
      <div className="movie-card">
        <UpdateMovieForm routeProps={props.props} movieState={props.state} toggleEdit={props.toggleEdit} editing={props.editing} movie={props.movie} />
      </div>
    );
  } else {
    return (
      <div className='movie-card'>
          <h2>{title}</h2>

          <div className={`movie-director`}>
            Director: <em>{director}</em>
            </div>

            <div className={`movie-metascore`}>
            Metascore: <strong>{metascore}</strong>
            </div>

          <h3>Actors</h3>

          {stars.map(star => {
            return <div>{star}</div>
          })}
      </div>
    )
  }
};

export default MovieCard;
