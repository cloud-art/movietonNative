import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import { popularFilmsReducer } from './reducers/films/popularFilms';
import { searchFilmsReducer } from './reducers/films/searchFilms';
import { paginationReducer } from './reducers/pagination';
import { topFilmsReducer } from './reducers/films/topFilms';
import { filtersReducer } from './reducers/filters';
import { genresReducer } from './reducers/genres';
import { newFilmsReducer } from './reducers/films/newFilms';

const rootReducer = combineReducers({
  popularFilms: popularFilmsReducer,
  newFilms: newFilmsReducer,
  searchFilms: searchFilmsReducer,
  pagination: paginationReducer,
  topFilms: topFilmsReducer,
  filters: filtersReducer,
  genres: genresReducer
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
