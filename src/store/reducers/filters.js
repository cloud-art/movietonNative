import { SET_FILTERS_YEARS, SET_FILTERS_RATINGS, SET_FILTERS_ORDER, SET_FILTERS_GENRE, FILTERS_RESET } from '../constants';
import { getCurrentYear } from '../../helpers/getCurrentYear';

const initialState = {
  year: ['1960', String(getCurrentYear())],
  rating: [1, 10],
  order: 'RATING',
  genre: ''
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS_YEARS:
      return { ...state, year: action.payload };
    case SET_FILTERS_GENRE:
      return { ...state, genre: action.payload };
    case SET_FILTERS_RATINGS:
      return { ...state, rating: action.payload };
    case SET_FILTERS_ORDER:
      return { ...state, order: action.payload };
    case FILTERS_RESET:
      return initialState;
    default:
      return state;
  }
};
