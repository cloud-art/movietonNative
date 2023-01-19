import { SET_FILMS, SET_SEARCH_FILMS, SET_SEARCH_PAGES, TOGGLE_SEARCH_IS_FETCHING } from '../../constants';

const initialStateSearchFilms = {
  items: [],
  totalPages: 1,
  isFetching: false
};

export const searchFilmsReducer = (state = initialStateSearchFilms, action) => {
  switch (action.type) {
    case SET_FILMS:
      return {
        ...state,
        items: [...action.payload]
      };
    case SET_SEARCH_FILMS:
      return {
        ...state,
        items: [...action.payload]
      };
    case SET_SEARCH_PAGES:
      return { ...state, totalPages: action.payload ? action.payload : 1 };
    case TOGGLE_SEARCH_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};
