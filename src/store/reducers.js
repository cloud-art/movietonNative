import { SET_POPULAR_FILMS, SET_SEARCH_FILMS, SET_POPULAR_FILMS_LAST_YEAR, SET_RELEASED_FILMS } from './constants';
import { combineReducers } from 'redux';

const initialStatePopularFilms = {
  items: []
};

const initialStatePopularFilmsLastYear = {
  items: []
};

const initialStateReleasedFilms = {
  items: []
};

const initialStateSearchFilms = {
  items: []
};

const popularFilmsReducer = (state = initialStatePopularFilms, action) => {
  switch (action.type) {
    case SET_POPULAR_FILMS:
      return {
        ...state,
        items: [...action.payload.items]
      };
    default:
      return state;
  }
};

const popularFilmsLastYearReducer = (state = initialStatePopularFilmsLastYear, action) => {
  switch (action.type) {
    case SET_POPULAR_FILMS_LAST_YEAR:
      return {
        ...state,
        items: [...state.items, ...action.payload.items]
      };
    default:
      return state;
  }
};

const releasedFilmsReducer = (state = initialStateReleasedFilms, action) => {
  switch (action.type) {
    case SET_RELEASED_FILMS:
      return {
        ...state,
        items: [...state.items, ...action.payload.releases]
      };
    default:
      return state;
  }
};

const searchFilmsReducer = (state = initialStateSearchFilms, action) => {
  switch (action.type) {
    case SET_SEARCH_FILMS:
      return {
        ...state,
        items: [...action.payload.items]
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  popularFilms: popularFilmsReducer,
  popularFilmsLastYear: popularFilmsLastYearReducer,
  releasedFilms: releasedFilmsReducer,
  searchFilms: searchFilmsReducer
});

export default rootReducer;
