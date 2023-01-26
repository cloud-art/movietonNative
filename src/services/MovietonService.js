import {
  setFilm,
  setGenres,
  setNewFilms,
  setNewFrontFilms,
  setNewPages,
  setPopularFilms,
  setPopularFrontFilms,
  setPopularPages,
  setSearchFilms,
  setSearchPages,
  setTopFilms,
  setTopFrontFilms,
  setTopPages,
  toggleFilmIsFetching,
  toggleNewIsFetching,
  togglePopularIsFetching,
  toggleSearchIsFetching,
  toggleTopIsFetching
} from '../store/actions';

import { FILMS_URL, API_URL, API_KEY } from './constants';
import { getCurrentYear } from '../helpers/getCurrentYear';

export const fetchFilm = (id) => {
  return function (dispatch) {
    dispatch(toggleFilmIsFetching(true));
    fetch(`${API_URL}${FILMS_URL}/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(toggleFilmIsFetching(false));
        dispatch(setFilm(json));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchPopularFilms = (page) => {
  return function (dispatch) {
    dispatch(togglePopularIsFetching(true));
    fetch(`${API_URL}${FILMS_URL}?order=NUM_VOTE&type=FILM&ratingFrom=7&ratingTo=10&page=${page}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(togglePopularIsFetching(false));
        dispatch(setPopularFilms(json.items));
        dispatch(setPopularPages(json.totalPages));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchNewFilms = (page) => {
  return function (dispatch) {
    dispatch(toggleNewIsFetching(true));
    fetch(`${API_URL}${FILMS_URL}?order=NUM_VOTE&type=FILM&ratingFrom=7&ratingTo=10&yearFrom=${getCurrentYear()}&yearTo=${getCurrentYear()}&page=${page}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(toggleNewIsFetching(false));
        dispatch(setNewFilms(json.items));
        dispatch(setNewPages(json.totalPages));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchTopFilms = (page) => {
  return function (dispatch) {
    dispatch(toggleTopIsFetching(true));
    fetch(`${API_URL}${FILMS_URL}/top?type=TOP_250_BEST_FILMS&page=${page}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(toggleTopIsFetching(false));
        dispatch(setTopFilms(json.films));
        dispatch(setTopPages(json.pagesCount));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchSearchFilms = (filters, page, keyword) => {
  return function (dispatch) {
    dispatch(toggleSearchIsFetching(true));
    fetch(
      `${API_URL}${FILMS_URL}/?genres=${filters.genre}&order=${filters.order}&type=ALL&ratingFrom=${filters.rating[0]}&ratingTo=${filters.rating[1]}&yearFrom=${filters.year[0]}&yearTo=${filters.year[1]}&keyword=${keyword}&page=${page}`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json'
        }
      }
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(toggleSearchIsFetching(false));
        dispatch(setSearchFilms(json.items));
        dispatch(setSearchPages(json.totalPages));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchPopularFrontFilms = () => {
  return function (dispatch) {
    fetch(`${API_URL}${FILMS_URL}?order=NUM_VOTE&type=FILM&ratingFrom=7&ratingTo=10&page=1`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setPopularFrontFilms(json.items));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchNewFrontFilms = () => {
  return function (dispatch) {
    fetch(`${API_URL}${FILMS_URL}?order=NUM_VOTE&type=FILM&ratingFrom=7&ratingTo=10&yearFrom=${getCurrentYear()}&yearTo=${getCurrentYear()}&page=1`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setNewFrontFilms(json.items));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchTopFrontFilms = () => {
  return function (dispatch) {
    fetch(`${API_URL}${FILMS_URL}/top?type=TOP_250_BEST_FILMS&page=1`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setTopFrontFilms(json.films));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchGenres = () => {
  return function (dispatch) {
    fetch(`${API_URL}${FILMS_URL}/filters`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setGenres(json.genres));
      })
      .catch((err) => console.log(err));
  };
};
