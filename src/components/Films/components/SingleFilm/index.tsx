import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import routeFilmDetail from 'pages/FilmDetailPage/routeFilmDetail';

export default function SingleFilm({ film }) {
    return (
        // <NavLink to={routeFilmDetail(film.show.id)} className='film-wrapper'>
        <NavLink to={routeFilmDetail(film.id)} className='film-wrapper'>
          <div className='film-image-wrapper'>
            <img className='film-image'src={film.poster && film.poster.url}/>
          </div>
          <div className='film-content'>
            <h2 className='film-name'>{film.name}</h2>
            <small className='film-year'>{film.year}</small>
          </div>
          <div className='film-meta'>
            <span className='film-rating'>{film.rating && film.rating.imdb}</span>
          </div>
        </NavLink>
      )
}
