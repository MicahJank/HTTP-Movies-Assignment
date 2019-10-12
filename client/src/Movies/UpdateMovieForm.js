import React, { useState } from 'react';


const UpdateMovieForm = ({ movie, editing }) => {

    const [state, setState] = useState(movie);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

    }


    return (
        <form className={`movie-form ${editing ? 'editing' : ''}`}>
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
        </form>
    )
}

export default UpdateMovieForm;