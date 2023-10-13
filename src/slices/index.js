import { configureStore } from '@reduxjs/toolkit';

import questionsReducer from './questionsSlice.js';

export default configureStore({
  reducer: {
    questions: questionsReducer,
  },
});