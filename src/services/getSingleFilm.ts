async function getSingleFilm(filmId) {
    const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/${filmId}`, {
        headers: {
          'accept' : 'application/json',
          'X-API-KEY': 'MC3G8T4-DX44Z2N-JHDZ1Z9-CBB1J7X'
        }
    })
    const data = await response.json()
    if(data.statusCode === 403) {
      return filmId
    }
    return data
}
  
export default getSingleFilm