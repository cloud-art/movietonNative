import { SET_SEARCH_FILMS, TOGGLE_SEARCH_IS_FETCHING } from '../../constants';

const initialStateSearchFilms = {
  items: [],
  totalPages: 1,
  isFetching: false
};

export const searchFilmsReducer = (state = initialStateSearchFilms, action) => {
  switch (action.type) {
    case SET_SEARCH_FILMS:
      return {
        ...state,
        items: [...action.payload.items],
        totalPages: action.payload.totalPages ? action.payload.totalPages : 1
      };
    case TOGGLE_SEARCH_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};
