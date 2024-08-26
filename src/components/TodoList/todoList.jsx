import React from "react";
import { useDispatch } from "react-redux";
import {  addTodo } from "../../redux/actions/todoAction";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

const TodoList = ({ todos, onTodoClick }) => {
  const dispatch = useDispatch();

  const handleTodoClick = (todo) => {
    onTodoClick(todo);
  };

  const handleAddTodo = () => {
    const newTodo = {
      title: "New Additions",
      description: "To stay representative of framework & new example apps.",
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <div className="w-[400px]">
      <div className="flex justify-between mb-4">
        <button
          className="bg-black text-white p-2 text-sm font-semibold rounded-md flex items-center gap-2"
          onClick={handleAddTodo}
        >
          <PlusIcon className="h-5 w-5 text-white" />
          TODO
        </button>
        <button className="bg-white p-2 px-3 rounded-md">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-800" />
        </button>
      </div>

      <div className="max-h-[600px] overflow-y-auto scrollbar-hide">
        {todos && todos.length > 0 ? (
          todos.map((todo, index) => (
            <div
              key={index}
              className="cursor-pointer mb-2 p-2 border-b bg-white rounded-md gap-4 flex flex-col"
              onClick={() => handleTodoClick(todo)}
            >
              <p className="font-bold w-full">{todo.title}</p>
              <div className="flex-grow">
                <p>{todo.description}</p>
                <p className="text-gray-500 text-right text-[12px]">
                  {todo.date}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No todos available.</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;