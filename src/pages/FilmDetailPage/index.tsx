import React, {useEffect} from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loadSingleDetailFilm } from 'store/films/actions';
import { selectFilms } from 'store/films/selectors';

import { FaStar } from "react-icons/fa";
import { BsFilm } from "react-icons/bs";
import { IoCalendarSharp } from "react-icons/io5";

import './index.css';

export default function FilmDetailPage() {
  const dispatch = useDispatch()

  const { id } = useParams()
  const { singleDetailFilm, films } = useSelector(selectFilms)

  // console.log(singleDetailFilm, films)

  useEffect(() => { 
    dispatch(loadSingleDetailFilm(id))
  }, [id, dispatch])

  return (
    <section className='film-detail-section'>
    {singleDetailFilm ?
    <div className='film-detail-wrapper'>
      <div className='film-detail-poster'>
        <div className='film-detail-blurred'>
          <img src={singleDetailFilm.poster && singleDetailFilm.poster.url} className='film-detail-blurred-img'/>
        </div>
        <div className='film-detail-picture'>
          <img src={singleDetailFilm.poster && singleDetailFilm.poster.url} className='film-detail-picture-img'/>
        </div>
      </div>
      <div className='film-detail-content'>
        <div className='film-detail-header'>
          <h2>{singleDetailFilm.name}</h2>
          <small className='film-icon'><FaStar size={30} color='goldenrod'/> {singleDetailFilm.rating && singleDetailFilm.rating.imdb} / 10</small>
        </div>
        <div className='film-small'>
          <small className='film-icon'><IoCalendarSharp size={30} color='goldenrod'/> {singleDetailFilm.year}</small>
          {/* <small className='film-icon'><BsFilm  size={30}color='goldenrod'/> {singleDetailFilm?.genres.length > 1 ? singleDetailFilm?.genres.map((genre)=> genre + ' ') : singleDetailFilm?.genres || 'Жанр'}</small> */}
        </div>
        <div>{singleDetailFilm.description}</div>
      </div>
    </div> :
    <></>}
    </section>
  )
}
