import { setPopularFilms, setPopularFilmsLastYear, setReleasedFilms, setSearchFilms } from '../store/actions';

import { FILMS_URL, API_URLV2_2, API_URLV2_1, API_KEY } from './constants';

// async function getFilms(page) {
//   return fetch(`${API_URLV2_2}${FILMS_URL}?page=${page}`, {
//     method: 'GET',
//     body: null,
//     headers: {
//       'X-API-KEY': API_KEY,
//       'Content-Type': 'application/json'
//     }
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .catch((err) => console.log(err));
// }

export const fetchPopularFilms = () => {
  return function (dispatch) {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&ratingFrom=7&ratingTo=10&page=1`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '5b334fb3-43d9-4391-96d9-4333cbe171be',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setPopularFilms(json));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchPopularFilmsLastYear = () => {
  return function (dispatch) {
    fetch(`${API_URLV2_2}${FILMS_URL}?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=2022&yearTo=2022&page=1`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setPopularFilmsLastYear(json));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchReleasedFilms = () => {
  return function (dispatch) {
    fetch(`${API_URLV2_1}${FILMS_URL}/releases?year=2022&month=JANUARY&page=1`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setReleasedFilms(json));
      })
      .catch((err) => console.log(err));
  };
};
export const fetchSearchFilms = (keyword) => {
  return function (dispatch) {
    fetch(`${API_URLV2_2}${FILMS_URL}/?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${keyword}&page=1`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setSearchFilms(json));
      })
      .catch((err) => console.log(err));
  };
};
