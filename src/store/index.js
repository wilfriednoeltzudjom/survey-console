import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reduxLogger from 'redux-logger';

import authReducer from './auth/auth.slice';
import surveysReducer from './surveys/surveys.slice';
import accountsReducer from './accounts/accounts.slice';

import loadingReducer from './ui/loading.slice';
import formReducer from './ui/form.slice';
import dialogReducer from './ui/dialog.slice';

export function initStore({ preloadedState = {} } = {}) {
  const middlewares = [];
  if (process.env.NODE_ENV === 'development') middlewares.push(reduxLogger);

  return configureStore({
    reducer: {
      core: combineReducers({
        authState: authReducer,
        surveysState: surveysReducer,
        accountsState: accountsReducer,
      }),
      ui: combineReducers({
        loadingState: loadingReducer,
        formState: formReducer,
        dialogState: dialogReducer,
      }),
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
    preloadedState,
  });
}
