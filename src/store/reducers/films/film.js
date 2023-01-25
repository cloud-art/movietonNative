import { SET_FILM, TOGGLE_FILM_IS_FETCHING } from '../../constants';

const initialState = {
  id: -1,
  genres: [],
  nameRu: 'undefined',
  nameOriginal: 'undefined',
  image:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.archgard.com%2Fassets%2Fupload_fallbacks%2Fimage_not_found-54bf2d65c203b1e48fea1951497d4f689907afe3037d02a02dcde5775746765c.png&f=1&nofb=1&ipt=35200c6024bde2bd603629545d5a8809792a0dae41f529402166ed6fb557f2e7&ipo=images',
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
