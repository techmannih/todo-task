import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../TodoList/todoList";
import TodoDetail from "../TodoDetails/todoDetail";
import { setSelectedTodo, fetchTodos } from "../../redux/actions/todoAction";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
const Hero = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const selectedTodo = useSelector((state) => state.todos.selectedTodo);
  const [isDetailVisible, setDetailVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 890);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTodoClick = (todo) => {
    dispatch(setSelectedTodo(todo));
    setDetailVisible(true);
  };

  const handleDeleteClick = () => {
    dispatch(setSelectedTodo(null));
    setDetailVisible(false);
  };

  const handleBackClick = () => {
    setDetailVisible(false);
  };

  return (
    <div className="bg-gray-100 flex justify-center space-x-16 mt-[60px] p-10 max-w-7xl mx-auto ">
      {isMobile ? (
        <>
          {isDetailVisible ? (
            <div className="flex flex-col items-start">
              <button
                className="mb-4 text-black text-2xl font-bold p-2 flex items-center space-x-2"
                onClick={handleBackClick}
                aria-label="Back to Todo List"
              >
                <ArrowLeftIcon className="h-6 w-6 text-black" />{" "}
                <span>Back</span>
              </button>
              <TodoDetail
                todo={selectedTodo}
                onDeleteClick={handleDeleteClick}
              />
            </div>
          ) : (
            <TodoList todos={todos || []} onTodoClick={handleTodoClick} />
          )}
        </>
      ) : (
        <>
          <TodoList todos={todos || []} onTodoClick={handleTodoClick} />
          <TodoDetail todo={selectedTodo} onDeleteClick={handleDeleteClick} />
        </>
      )}
    </div>
  );
};

export default Hero;
