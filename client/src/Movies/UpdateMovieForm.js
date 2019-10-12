import React, { useState } from 'react';

import axios from 'axios';


const UpdateMovieForm = ({ movie, editing, toggleEdit, movieState, routeProps }) => {

    const [state, setState] = useState(movie);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${movie.id}`, state)
            .then(res => {
               routeProps.history.push('/');
            })
    }


    return (
        <form onSubmit={submitHandler} className={`movie-form ${editing ? 'editing' : ''}`}>
            <h2 className={!editing ? 'active' : 'hidden'}>{movie.title}</h2>
            <input className={`movie-name ${editing ? 'active' : 'hidden'}`}
                type='text'
                name='title'
                value={state.title || ''}
                onChange={handleChange}
            />
            <div className={`movie-director ${!editing ? 'active' : 'hidden'}`}>
            Director: <em>{movie.director}</em>
            </div>
            <input className={`director-input ${editing ? 'active' : 'hidden'}`}
                type='text'
                name='director'
                value={state.director || ''}
                onChange={handleChange}
            />
             <div className={`movie-metascore ${!editing ? 'active' : 'hidden'}`}>
            Metascore: <strong>{movie.metascore}</strong>
            </div>
            <input className={editing ? 'active' : 'hidden'}
                type='text'
                name='metascore'
                value={state.metascore || ''}
                onChange={handleChange}
            />
            <h3 className={!editing ? 'active' : 'hidden'}>Actors</h3>
            <label className={!editing ? 'active' : 'hidden'}>{movie.stars[0]}</label>
            <input className={editing ? 'active' : 'hidden'}
                type='text'
                name='0'
                value={state.stars[0] || ''}
                onChange={handleChange}
            />
            <label className={!editing ? 'active' : 'hidden'}>{movie.stars[1]}</label>
            <input className={editing ? 'active' : 'hidden'}
                type='text'
                name='1'
                value={state.stars[1] || ''}
                onChange={handleChange}
            />
            <label className={!editing ? 'active' : 'hidden'}>{movie.stars[2]}</label>
            <input className={editing ? 'active' : 'hidden'}
                type='text'
                name='2'
                value={state.stars[2] || ''}
                onChange={handleChange}
            />
        <button className={`submit-button ${!movieState.editing ? 'hidden' : ''}`} onClick={toggleEdit}>
          Submit
        </button>
        </form>
    )
}

export default UpdateMovieForm;