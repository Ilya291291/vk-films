import React, {useMemo, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
// import getAllFIlms from 'services/getAllFilms';
import { selectFilms } from 'store/films/selectors';
import { loadAllFilms, setAllFilms } from 'store/films/actions';
import { setFilteredFilms } from 'store/films/actions';

import Films from 'components/Films';
import FilterSideBar from 'components/FilterSideBar';

import { MOCKS } from 'mocks/MOCKS';
import { rating } from 'constants/rating';
import { years } from 'constants/years';

export default function Main() {

  const dispatch = useDispatch()

  const { films, filters } = useSelector(selectFilms)

  useEffect(() => {
    dispatch(loadAllFilms())
    //here filter by categroy,year,ratin
    console.log(filters)
  }, [dispatch, filters.year, films])
  console.log(films)

  return (
    <main>
      <FilterSideBar options={rating} value={filters.rating} filteredType='rating'/>
      <FilterSideBar options={years} value={filters.year}filteredType='year'/>
      <Films films={films && films.docs && films.docs.length > 0 ? films.docs : MOCKS}/>
    </main>
  )
}
