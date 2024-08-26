import { SET_TODOS, ADD_TODO, UPDATE_TODO, SET_SELECTED_TODO, DELETE_TODO } from '../constants/constant';

const initialState = {
  todos: [],
  selectedTodo: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.title === action.payload.title ? action.payload : todo
        ),
        selectedTodo: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.title !== action.payload),
        selectedTodo: state.selectedTodo?.title === action.payload ? null : state.selectedTodo,
      };
    case SET_SELECTED_TODO:
      return {
        ...state,
        selectedTodo: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
