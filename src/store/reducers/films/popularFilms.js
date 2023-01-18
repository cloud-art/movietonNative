import { SET_POPULAR_FILMS, SET_POPULAR_FRONT_FILMS, TOGGLE_POPULAR_IS_FETCHING } from '../../constants';

const initialStatePopularFilms = {
  items: [],
  totalPages: 1,
  frontItems: [],
  isFetching: false
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
    case TOGGLE_POPULAR_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};
