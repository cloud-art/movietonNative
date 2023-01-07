import { SET_POPULAR_FILMS, SET_POPULAR_FRONT_FILMS } from '../../constants';

const initialStatePopularFilms = {
  items: [],
  totalPages: 1,
  frontItems: []
};

export const popularFilmsReducer = (state = initialStatePopularFilms, action) => {
  switch (action.type) {
    case SET_POPULAR_FILMS:
      return {
        ...state,
        items: [...action.payload.items],
        totalPages: action.payload.totalPages ? action.payload.totalPages : 1
      };
    case SET_POPULAR_FRONT_FILMS:
      return {
        ...state,
        frontItems: [...action.payload.items]
      };
    default:
      return state;
  }
};
