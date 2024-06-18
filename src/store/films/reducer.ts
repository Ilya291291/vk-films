import { MOCKS } from "mocks/MOCKS"

const initialState = {
  films: [],
  singleDetailFilm: null,
  filters: {
    rating: '',
    category: '',
    year: ''
  }
}

const filmsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'films/setAllFilms': {
      if(action.payload.statusCode === 403) {
        return {
          ...state,
          films: MOCKS
        }
      }
      if(state.filters.year){
        const splited = state.filters.year.length > 1 ? state.filters.year.split('-').map(Number) : Number(state.filters.year)
        const filteredFilms = state.films.filter((film) => {
          if(splited.length === 1) {
            return Number(film.year) >= splited
          }else if(splited.length > 1) {
            return Number(film.year) >= splited[0] && Number(film.year) <= splited[1]
          }
        })
        return {
          ...state,
          films: filteredFilms
        }
      }
      return {
        ...state,
        films: action.payload
      }
    }
    case 'films/setSingleDetailFilm': {
      if(typeof action.payload === 'string') {
        const foundFilm = state.films.find((film) => (film.id === Number(action.payload)))
        console.log(state.films)
        return {
          ...state,
          singleDetailFilm: foundFilm
        }
      }
      else {
        return {
          ...state,
          singleDetailFilm: action.payload
        }
      }
    }
    case 'films/setFilterValue': {
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      }
    }
    default: return state
  }
} 

export default filmsReducer