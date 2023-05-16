import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import userAccessReducer from './userAccess.slice.ts';

export default configureStore({
  reducer: combineReducers({
    userAccess: userAccessReducer,
  }),
});
