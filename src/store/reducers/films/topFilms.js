import { SET_TOP_FILMS, SET_TOP_FRONT_FILMS, SET_TOP_PAGES, TOGGLE_TOP_IS_FETCHING } from '../../constants';

const initialState = {
  items: [],
  frontItems: [],
  totalPages: 1,
  isFetching: false
};

export const topFilmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_FILMS:
      return {
        ...state,
        items: [...action.payload]
      };
    case SET_TOP_PAGES:
      return { ...state, totalPages: action.payload ? action.payload : 1 };
    case SET_TOP_FRONT_FILMS:
      return {
        ...state,
        frontItems: [...action.payload]
      };
    case TOGGLE_TOP_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};
