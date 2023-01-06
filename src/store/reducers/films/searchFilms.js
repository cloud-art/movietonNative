import { SET_SEARCH_FILMS } from '../../constants';

const initialStateSearchFilms = {
  items: []
};

export const searchFilmsReducer = (state = initialStateSearchFilms, action) => {
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
