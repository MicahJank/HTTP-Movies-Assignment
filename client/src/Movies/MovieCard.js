import React from 'react';

import axios from 'axios';

import UpdateMovieForm from './UpdateMovieForm.js';

const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;

  const deleteMovie = () => {
    axios.delete(`http://localhost:5000/api/movies/${id}`)
      .then(res =>  props.props.history.push('/'))
      .catch(err => console.log(err));

  }

  if(props.state) {
    return (
      <div className="movie-card">
        <UpdateMovieForm routeProps={props.props} movieState={props.state} toggleEdit={props.toggleEdit} editing={props.editing} movie={props.movie} />
        <button onClick={deleteMovie} className='delete-button'>Delete</button>
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
