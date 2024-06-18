import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'

export default function Header() {
  return (
    <header>
      <NavLink to={'/'}>Main page</NavLink>
      <NavLink to={'/favorites'}>Favorite page</NavLink>
    </header>
  )
}
