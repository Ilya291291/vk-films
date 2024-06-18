import getAllFilms from "services/getAllFilms";
import getSingleFilm from "services/getSingleFilm";

export const setAllFilms = (films) => {
  return {
    type: 'films/setAllFilms',
    payload: films
  }
}

export const loadAllFilms = () => async (dispatch) => {
  try {
    const response = await getAllFilms()
    dispatch(setAllFilms(response))
  }catch(error){
    console.log(error)
  }
}

export const setSingleDetailFilm = (filmDetail) => {
  return {
    type: 'films/setSingleDetailFilm',
    payload: filmDetail
  }
}

export const loadSingleDetailFilm = (filmId) => async (dispatch) => {
  try {
    const response = await getSingleFilm(filmId)
    dispatch(setSingleDetailFilm(response))
  }catch(error){
    console.log(error)
  }
}
export const setFilterValue = (value, filterType) => {
  return {
    type: 'films/setFilterValue',
    // payload: value
    payload: {[filterType] : value}
  }
}
