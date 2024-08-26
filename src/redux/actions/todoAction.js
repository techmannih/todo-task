import {
  SET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  SET_SELECTED_TODO,
  DELETE_TODO,
} from "../constants/constant";

export const fetchTodos = () => async (dispatch) => {
  try {
    console.log("Fetching todos from the API...");
    const response = await fetch("/api/todo/get/todolist");
    const data = await response.json();
    console.log("data fetching all todo", data);

    if (response.ok) {
      dispatch({
        type: SET_TODOS,
        payload: data,
      });
    } else {
      console.error("Error fetching todos:", data.message);
    }
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

// Action to add a new todo
export const addTodo = (todo) => async (dispatch) => {
  console.log("todos before adding ", todo);
  try {
    console.log("todos in try in adding", todo);
    const response = await fetch("/api/todo/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const data = await response.json();

    if (response.ok) {
      // Dispatch the added todo
      dispatch({
        type: ADD_TODO,
        payload: data,
      });
      console.log("data in addtodo", data);

      // Call updateTodo with the added todo
      dispatch(updateTodo(data));
    } else {
      console.error("Error adding todo:", data.message);
    }
  } catch (error) {
    console.error("Error todo:", error);
  }
};

// Action to update an existing todo
export const updateTodo = (todo) => async (dispatch) => {
  console.log("todo in update actions", todo);
  try {
    const response = await fetch(`/api/todo/update/${todo._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({
        type: UPDATE_TODO,
        payload: data,
      });
      console.log("data in update todo", data);
    } else {
      console.error("Error updating todo:", data.message);
    }
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

// Action to set a selected todo
export const setSelectedTodo = (todo) => ({
  type: SET_SELECTED_TODO,
  payload: todo,
});

export const deleteTodo = (id) => async (dispatch) => {
  console.log("id", id);
  try {
    const response = await fetch(`/api/todo/delete/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      dispatch({
        type: DELETE_TODO,
        payload: id,
      });
      console.log("deleted  successfully");
    } else {
      console.error("Error deleting todo");
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
