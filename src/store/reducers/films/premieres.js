import { SET_FRONT_PREMIERES, SET_PREMIERES } from '../../constants';

const initialState = {
  items: [],
  totalPages: 1,
  frontItems: [],
  isFetching: false
};

export const premieresReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PREMIERES:
      return {
        ...state,
        items: [...action.payload.items],
        totalPages: action.payload.totalPages ? action.payload.totalPages : 1
      };
    case SET_FRONT_PREMIERES:
      return {
        ...state,
        frontItems: [...action.payload.items]
      };
    default:
      return state;
  }
};
