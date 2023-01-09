import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import { popularFilmsReducer } from './reducers/films/popularFilms';
import { premieresReducer } from './reducers/films/premieres';
import { searchFilmsReducer } from './reducers/films/searchFilms';
import { paginationReducer } from './reducers/pagination';
import { topFilmsReducer } from './reducers/films/topFilms';
import { filtersReducer } from './reducers/filters';

const rootReducer = combineReducers({
  popularFilms: popularFilmsReducer,
  premieres: premieresReducer,
  searchFilms: searchFilmsReducer,
  pagination: paginationReducer,
  topFilms: topFilmsReducer,
  filters: filtersReducer
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
