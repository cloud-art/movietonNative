import { SET_SEARCH_FILMS } from '../../constants';

const initialStateSearchFilms = {
  items: [],
  totalPages: 1
};

export const searchFilmsReducer = (state = initialStateSearchFilms, action) => {
  switch (action.type) {
    case SET_SEARCH_FILMS:
      return {
        ...state,
        items: [...action.payload.items],
        totalPages: action.payload.totalPages ? action.payload.totalPages : 1
      };
    default:
      return state;
  }
};
