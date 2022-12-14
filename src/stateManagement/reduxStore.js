import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer/index.js';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
