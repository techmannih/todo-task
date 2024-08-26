import { SET_TODOS, ADD_TODO, UPDATE_TODO, SET_SELECTED_TODO, DELETE_TODO } from '../constants/constant';

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const setSelectedTodo = (todo) => ({
  type: SET_SELECTED_TODO,
  payload: todo,
});

export const deleteTodo = (title) => ({
  type: DELETE_TODO,
  payload: title,
});
