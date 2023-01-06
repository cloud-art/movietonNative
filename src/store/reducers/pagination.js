import { SET_PAGINATION } from '../constants';

const initialStatePagination = {
  page: 1
};

export const paginationReducer = (state = initialStatePagination, action) => {
  switch (action.type) {
    case SET_PAGINATION:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
