import { SET_FILMS, SET_NEW_FILMS, SET_NEW_FRONT_FILMS, SET_NEW_PAGES, TOGGLE_NEW_IS_FETCHING } from '../../constants';

const initialState = {
  items: [],
  totalPages: 1,
  frontItems: [],
  isFetching: false
};

export const newFilmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILMS:
      return {
        ...state,
        items: [...action.payload]
      };
    case SET_NEW_FILMS:
      return {
        ...state,
        items: [...action.payload]
      };
    case SET_NEW_PAGES:
      return { ...state, totalPages: action.payload ? action.payload : 1 };
    case SET_NEW_FRONT_FILMS:
      return {
        ...state,
        frontItems: [...action.payload]
      };
    case TOGGLE_NEW_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};
