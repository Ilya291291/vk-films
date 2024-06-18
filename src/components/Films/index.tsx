import React from 'react';
import './index.css';
import SingleFilm from './components/SingleFilm';

export default function Films({ films }) {
  return (
    <div className='films-wrapper'>
      {films && films.length > 0 && films.map((film) => {
        return (
          <SingleFilm
            key={film.id}
            film={film}
          />
        )
      })
    }    
    </div>
  )
}
