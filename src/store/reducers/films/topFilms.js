import { SET_TOP_FILMS, SET_TOP_FRONT_FILMS } from '../../constants';

const initialState = {
  items: [],
  frontItems: [],
  totalPages: 1
};

export const topFilmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_FILMS:
      return {
        ...state,
        items: [...action.payload.films],
        totalPages: action.payload.pagesCount ? action.payload.pagesCount : 1
      };
    case SET_TOP_FRONT_FILMS:
      return {
        ...state,
        frontItems: [...action.payload.films]
      };
    default:
      return state;
  }
};
