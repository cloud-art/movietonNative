import { SET_FILM, TOGGLE_FILM_IS_FETCHING } from '../../constants';
import undefinedImage from '../../../assets/icon.png';

const initialState = {
  id: -1,
  genres: [],
  nameRu: 'undefined',
  nameOriginal: 'undefined',
  image: undefinedImage,
  year: 1967,
  rating: 1,
  description: 'undefined',
  isFetching: false
};

export const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILM:
      return {
        ...state,
        id: action.payload.kinopoiskId,
        genres: action.payload.genres,
        nameRu: action.payload.nameRu,
        nameOriginal: action.payload.nameOriginal,
        image: action.payload.posterUrl,
        year: action.payload.year,
        rating: action.payload.ratingKinopoisk,
        description: action.payload.description
      };

    case TOGGLE_FILM_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};
