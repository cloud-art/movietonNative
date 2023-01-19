import { SET_GENRES } from '../constants';

const initialState = {
  genres: [{ key: '', value: 'Все жанры' }],
  isFetching: false
};

export const genresReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        genres: state.genres.concat(
          action.payload.map((e) => {
            return { key: e.id, value: e.genre };
          })
        )
      };
    default:
      return state;
  }
};
