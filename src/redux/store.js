import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './reducer/todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
