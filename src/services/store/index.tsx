import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './modules/rootReducer';

const persistConfigStorage = {
  key: 'movies-guide',
  storage,
  whitelist: ['addedMoviesObj', 'selectedGenres', 'profileEditedInfos', 'usersProfileImagesObj'],
};

const persistedReducer = persistReducer( persistConfigStorage, rootReducer);

export const store = createStore(persistedReducer);
//@ts-ignore
export const persistor = persistStore(store)