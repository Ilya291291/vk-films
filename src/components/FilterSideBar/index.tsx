import React from 'react';
import './index.css';

import { setFilterValue } from 'store/films/actions';
import { selectFilms } from 'store/films/selectors';
import { useDispatch, useSelector } from 'react-redux';

export default function FilterSideBar({ options, value, filteredType }) {

  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(setFilterValue(event.target.value, filteredType))
  }
  return (
    <select onChange={handleChange} value={value}>
      {options.length > 0 && 
        options.map((option) => (
          <option value={option}>{option}</option>
        ))
      }
    </select>
  ) 
}
