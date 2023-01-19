import { SET_FILMS, SET_POPULAR_FILMS, SET_POPULAR_FRONT_FILMS, SET_POPULAR_PAGES, TOGGLE_POPULAR_IS_FETCHING } from '../../constants';

const initialStatePopularFilms = {
  items: [],
  totalPages: 1,
  frontItems: [],
  isFetching: false
};

export const popularFilmsReducer = (state = initialStatePopularFilms, action) => {
  switch (action.type) {
    case SET_FILMS:
      return {
        ...state,
        items: [...action.payload]
      };
    case SET_POPULAR_FILMS:
      return {
        ...state,
        items: [...action.payload]
      };
    case SET_POPULAR_PAGES:
      return { ...state, totalPages: action.payload ? action.payload : 1 };
    case SET_POPULAR_FRONT_FILMS:
      return {
        ...state,
        frontItems: [...action.payload]
      };
    case TOGGLE_POPULAR_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};
