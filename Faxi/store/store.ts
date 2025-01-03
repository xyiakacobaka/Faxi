import { configureStore } from '@reduxjs/toolkit';

// Импортируйте ваши reducers
import counterReducer from './Reducers/counterReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Добавьте свои reducers здесь
  },
});