import React from 'react';


const UpdateMovieForm = ({ movie, editing }) => {

    return (
        <form className='movie-form'>
            <h2 className={!editing ? 'active' : 'hidden'}>{movie.title}</h2>
            <input className={editing ? 'active' : 'hidden'}
                type='text'
                name='name'
                value=''
            />
            <div className={`movie-director ${!editing ? 'active' : 'hidden'}`}>
            Director: <em>{movie.director}</em>
            </div>
            <input className={editing ? 'active' : 'hidden'}
                type='text'
                name='director'
                value=''
            />
             <div className={`movie-metascore ${!editing ? 'active' : 'hidden'}`}>
            Metascore: <strong>{movie.metascore}</strong>
            </div>
            <input className={editing ? 'active' : 'hidden'}
                type='text'
                name='score'
                value=''
            />
            <h3 className={!editing ? 'active' : 'hidden'}>Actors</h3>
            <label className={!editing ? 'active' : 'hidden'}>{movie.stars[0]}</label>
            <input className={editing ? 'active' : 'hidden'}
                type='text'
                name='actor1'
                value=''
            />
            <label className={!editing ? 'active' : 'hidden'}>{movie.stars[1]}</label>
            <input className={editing ? 'active' : 'hidden'}
                type='text'
                name='actor2'
                value=''
            />
            <label className={!editing ? 'active' : 'hidden'}>{movie.stars[2]}</label>
            <input className={editing ? 'active' : 'hidden'}
                type='text'
                name='actor3'
                value=''
            />
        </form>
    )
}

export default UpdateMovieForm;