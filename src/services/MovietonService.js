const api_urlV2_2 = 'https://kinopoiskapiunofficial.tech/api/v2.2';
const api_urlV2_1 = 'https://kinopoiskapiunofficial.tech/api/v2.1';
const films_url = '/films';
const API_KEY = '5b334fb3-43d9-4391-96d9-4333cbe171be';

async function getFilms(page) {
  return fetch(`${api_urlV2_2}${films_url}?page=${page}`, {
    method: 'GET',
    body: null,
    headers: {
      'X-API-KEY': API_KEY,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
}

async function getPopularFilms(page) {
  return fetch(`${api_urlV2_2}${films_url}?order=NUM_VOTE&type=FILM&ratingFrom=7&ratingTo=10&page=${page}`, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
}

async function getPopularFilmsLastYear(page) {
  return fetch(`${api_urlV2_2}${films_url}?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=2022&yearTo=2022&page=${page}`, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
}

async function getReleasedFilmsLastMonth(page) {
  return fetch(`${api_urlV2_1}${films_url}/releases?year=2022&month=JANUARY&page=${page}`, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
}

export { getFilms, getPopularFilms, getPopularFilmsLastYear, getReleasedFilmsLastMonth };
