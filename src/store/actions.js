import {
  SET_POPULAR_FILMS,
  SET_SEARCH_FILMS,
  SET_PAGINATION,
  SET_TOP_FILMS,
  SET_POPULAR_FRONT_FILMS,
  SET_TOP_FRONT_FILMS,
  SET_FILTERS_GENRE,
  SET_FILTERS_RATINGS,
  SET_FILTERS_ORDER,
  SET_FILTERS_YEARS,
  FILTERS_RESET,
  SET_GENRES,
  TOGGLE_SEARCH_IS_FETCHING,
  TOGGLE_TOP_IS_FETCHING,
  TOGGLE_POPULAR_IS_FETCHING,
  SET_FILMS,
  SET_NEW_FILMS,
  SET_NEW_FRONT_FILMS,
  TOGGLE_NEW_IS_FETCHING,
  SET_POPULAR_PAGES,
  SET_NEW_PAGES,
  SET_TOP_PAGES,
  SET_SEARCH_PAGES
} from './constants';

export function setPagination(page) {
  return {
    type: SET_PAGINATION,
    payload: page
  };
}

export function setFilms(items) {
  return {
    type: SET_FILMS,
    payload: items
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
export function setNewFilms(items) {
  return {
    type: SET_NEW_FILMS,
    payload: items
  };
}
export function setSearchFilms(items) {
  return {
    type: SET_SEARCH_FILMS,
    payload: items
  };
}

export function setPopularPages(pages) {
  return {
    type: SET_POPULAR_PAGES,
    payload: pages
  };
}
export function setNewPages(pages) {
  return {
    type: SET_NEW_PAGES,
    payload: pages
  };
}
export function setTopPages(pages) {
  return {
    type: SET_TOP_PAGES,
    payload: pages
  };
}
export function setSearchPages(pages) {
  return {
    type: SET_SEARCH_PAGES,
    payload: pages
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
export function setNewFrontFilms(items) {
  return {
    type: SET_NEW_FRONT_FILMS,
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
export function setFiltersOrder(items) {
  return {
    type: SET_FILTERS_ORDER,
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

export function setGenres(items) {
  return {
    type: SET_GENRES,
    payload: items
  };
}

export function toggleSearchIsFetching(isFetching) {
  return {
    type: TOGGLE_SEARCH_IS_FETCHING,
    payload: isFetching
  };
}
export function toggleNewIsFetching(isFetching) {
  return {
    type: TOGGLE_NEW_IS_FETCHING,
    payload: isFetching
  };
}
export function togglePopularIsFetching(isFetching) {
  return {
    type: TOGGLE_POPULAR_IS_FETCHING,
    payload: isFetching
  };
}
export function toggleTopIsFetching(isFetching) {
  return {
    type: TOGGLE_TOP_IS_FETCHING,
    payload: isFetching
  };
}
