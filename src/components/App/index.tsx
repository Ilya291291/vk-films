import React from 'react';
import "./index.css";
import { Routes, Route, Navigate } from 'react-router';

import routeFilmDetail from 'pages/FilmDetailPage/routeFilmDetail';

import Header from 'components/Header';
import Main from 'components/Main';
import FilmDetailPage from 'pages/FilmDetailPage';
import FavoritesPage from 'pages/FavoritesPage';
import Footer from 'components/Footer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='favorites' element={<FavoritesPage/>}></Route>
          <Route path={routeFilmDetail()} element={<FilmDetailPage/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
