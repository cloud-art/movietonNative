import { setFrontPremiers, setPopularFilms, setPopularFilmsLastYear, setPopularFrontFilms, setPremieres, setSearchFilms, setSearchFrontFilms, setTopFilms, setTopFrontFilms } from '../store/actions';

import { FILMS_URL, API_URLV2_2, API_KEY } from './constants';

export const fetchPopularFilms = (page) => {
  return function (dispatch) {
    fetch(`${API_URLV2_2}${FILMS_URL}?order=NUM_VOTE&type=FILM&ratingFrom=7&ratingTo=10&page=${page}`, {
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

export const fetchPremieres = (page) => {
  return function (dispatch) {
    fetch(`${API_URLV2_2}${FILMS_URL}/premieres?page=${page}&year=${2023}&month=${'JANUARY'}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setPremieres(json));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchTopFilms = (page) => {
  return function (dispatch) {
    fetch(`${API_URLV2_2}${FILMS_URL}/top?type=TOP_250_BEST_FILMS&page=${page}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setTopFilms(json));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchSearchFilms = (page, keyword) => {
  return function (dispatch) {
    fetch(`${API_URLV2_2}${FILMS_URL}/?order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword=${keyword}&page=${page}`, {
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

export const fetchPopularFrontFilms = () => {
  return function (dispatch) {
    fetch(`${API_URLV2_2}${FILMS_URL}?order=NUM_VOTE&type=FILM&ratingFrom=7&ratingTo=10&page=1`, {
      method: 'GET',
      headers: {
        'X-API-KEY': '5b334fb3-43d9-4391-96d9-4333cbe171be',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setPopularFrontFilms(json));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchFrontPremieres = () => {
  return function (dispatch) {
    fetch(`${API_URLV2_2}${FILMS_URL}/premieres?page=1&year=${2023}&month=${'JANUARY'}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setFrontPremiers(json));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchTopFrontFilms = () => {
  return function (dispatch) {
    fetch(`${API_URLV2_2}${FILMS_URL}/top?type=TOP_250_BEST_FILMS&page=1`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setTopFrontFilms(json));
      })
      .catch((err) => console.log(err));
  };
};
