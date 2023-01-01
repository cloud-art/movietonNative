import { SET_POPULAR_FILMS, SET_POPULAR_FILMS_LAST_YEAR, SET_RELEASED_FILMS, SET_SEARCH_FILMS } from './constants';

export function setPopularFilms(items) {
  return {
    type: SET_POPULAR_FILMS,
    payload: items
  };
}

export function setPopularFilmsLastYear(items) {
  return {
    type: SET_POPULAR_FILMS_LAST_YEAR,
    payload: items
  };
}

export function setReleasedFilms(items) {
  return {
    type: SET_RELEASED_FILMS,
    payload: items
  };
}

export function setSearchFilms(items) {
  return {
    type: SET_SEARCH_FILMS,
    payload: items
  };
}
