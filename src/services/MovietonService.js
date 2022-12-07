const api_url = 'https://kinopoiskapiunofficial.tech/api/v2.2';
const films_url = '/films';
const API_KEY = '5b334fb3-43d9-4391-96d9-4333cbe171be';

async function getFilms(page) {
  return fetch(`${api_url}${films_url}?page=${page}`, {
    method: 'GET',
    body: null,
    headers: {
      'X-API-KEY': '5b334fb3-43d9-4391-96d9-4333cbe171be',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
}

async function getPopularFilms(page) {
  return fetch(`${api_url}${films_url}?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&page=${page}`, {
    method: 'GET',
    headers: {
      'X-API-KEY': '5b334fb3-43d9-4391-96d9-4333cbe171be',
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
}

export { getFilms, getPopularFilms };
