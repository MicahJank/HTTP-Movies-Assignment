import React, { useState } from 'react';

import axios from 'axios';


const AddMovieForm = (props) => {

    const [actors, setActors] = useState({});
    const [formState, setFormState] = useState({
        id: '',
        title: '',
        director: '',
        metascore: '',
        actor: '',        
        stars: []
    });


    const handleAddActor = e => {
        e.preventDefault();
        e.stopPropagation();
        formState.stars.push(formState.actor);
        setFormState({
            ...formState,
            actor: ''
        })
    }

    const handleChanges = e => {
        e.preventDefault();
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleAddMovie = e => {
        e.preventDefault();
        e.stopPropagation();
        const { stars, title, metascore, director } = formState;
        const newMovie = { stars, title, metascore, director };

        axios.post('http://localhost:5000/api/movies', newMovie)
            .then(res => props.history.push('/'))
            .catch(err => console.log(err));
    }
    
    return (
        <form className='add-movie-form'>
            <div className='title-form'>
                <label>Title</label>
                <input className='add-movie-input'
                name='title'
                value={formState.title}
                onChange={handleChanges}
                type='text'

                />
            </div>

            <div className='director-form'>
                <label>Director</label>
                <input className='add-movie-input' 
                name='director'
                value={formState.director}
                onChange={handleChanges}
                type='text'

                />
            </div>

            <div className='metascore-form'>                
                <label>MetaScore</label>
                <input className='add-movie-input' 
                name='metascore'
                value={formState.metascore}
                onChange={handleChanges}
                type='text'

                />
            </div>

            <div className='stars-form'>
                <label>Stars</label>
                <input className='add-movie-input' 
                name='actor'
                value={formState.actor}
                onChange={handleChanges}
                type='text'

                />
                <button onClick={handleAddActor}>+</button>
            </div>
            <button onClick={handleAddMovie} className='add-movie-btn'>Add Movie</button>
        </form>
    )
}

export default AddMovieForm;