import {
  SET_POPULAR_FILMS,
  SET_PREMIERES,
  SET_SEARCH_FILMS,
  SET_PAGINATION,
  SET_TOP_FILMS,
  SET_POPULAR_FRONT_FILMS,
  SET_TOP_FRONT_FILMS,
  SET_FRONT_PREMIERES,
  SET_FILTERS_GENRE,
  SET_FILTERS_RATINGS,
  SET_FILTERS_RELEASE,
  SET_FILTERS_YEARS,
  FILTERS_RESET
} from './constants';

export function setPagination(page) {
  return {
    type: SET_PAGINATION,
    payload: page
  };
}

export function setPopularFilms(items) {
  return {
    type: SET_POPULAR_FILMS,
    payload: items
  };
}
export function setTopFilms(items) {
  return {
    type: SET_TOP_FILMS,
    payload: items
  };
}
export function setPremieres(items) {
  return {
    type: SET_PREMIERES,
    payload: items
  };
}
export function setSearchFilms(items) {
  return {
    type: SET_SEARCH_FILMS,
    payload: items
  };
}

export function setPopularFrontFilms(items) {
  return {
    type: SET_POPULAR_FRONT_FILMS,
    payload: items
  };
}
export function setTopFrontFilms(items) {
  return {
    type: SET_TOP_FRONT_FILMS,
    payload: items
  };
}
export function setFrontPremiers(items) {
  return {
    type: SET_FRONT_PREMIERES,
    payload: items
  };
}
export function setFiltersRating(items) {
  return {
    type: SET_FILTERS_RATINGS,
    payload: items
  };
}
export function setFiltersGenre(items) {
  return {
    type: SET_FILTERS_GENRE,
    payload: items
  };
}
export function setFiltersRelease(items) {
  return {
    type: SET_FILTERS_RELEASE,
    payload: items
  };
}
export function setFiltersYears(items) {
  return {
    type: SET_FILTERS_YEARS,
    payload: items
  };
}
export function filtersReset() {
  return {
    type: FILTERS_RESET
  };
}
