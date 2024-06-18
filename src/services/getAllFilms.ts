import { MOCKS } from "mocks/MOCKS"

async function getAllFilms() {
    // const response = await fetch(`https://api.tvmaze.com/shows?q=${category}`)
    const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?limit=250&notNullFields=year&notNullFields=rating.imdb&notNullFields=poster.url&notNullFields=name&year=1990-2024', {
        headers: {
          'accept' : 'application/json',
          'X-API-KEY': 'MC3G8T4-DX44Z2N-JHDZ1Z9-CBB1J7X'
        }
    })
    const data = await response.json()
    if(data.statusCode === 403) {
      return MOCKS
    }
    return data
}
  
export default getAllFilms
