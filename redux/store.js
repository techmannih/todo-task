import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from './reducer/todoReducer'; // Adjust path if needed

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
