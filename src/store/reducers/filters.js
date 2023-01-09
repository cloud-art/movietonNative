import { SET_FILTERS_YEARS, SET_FILTERS_RATINGS, SET_FILTERS_RELEASE, SET_FILTERS_GENRE, FILTERS_RESET } from '../constants';
import { getCurrentYear } from '../../helpers/getCurrentYear';

const initialState = {
  year: `1960 - ${getCurrentYear()}`,
  rating: '1-10',
  sortByRelease: '-1',
  genre: ''
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS_YEARS:
      return { ...state, year: action.payload };
    case SET_FILTERS_GENRE:
      return { ...state, year: genre.payload };
    case SET_FILTERS_RATINGS:
      return { ...state, year: rating.payload };
    case SET_FILTERS_RELEASE:
      return { ...state, sortByRelease: action.payload };
    case FILTERS_RESET:
      return { initialState };
    default:
      return state;
  }
};
