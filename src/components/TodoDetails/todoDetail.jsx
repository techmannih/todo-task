import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../../redux/actions/todoAction";
import {
  TrashIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
  ListBulletIcon,
  ChatBubbleLeftRightIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const TodoDetail = ({ todo, onDeleteClick }) => {
  const dispatch = useDispatch();
  const [localTodo, setLocalTodo] = useState({ title: "", description: "" });

  useEffect(() => {
    if (todo) {
      setLocalTodo({
        title: todo.title || "",
        description: todo.description || "",
      });
    }
  }, [todo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    if (todo && localTodo) {
      const updatedTodo = { ...todo, ...localTodo };
      dispatch(updateTodo(updatedTodo));
    }
  };

  const handleDelete = () => {
    if (todo) {
      dispatch(deleteTodo(todo._id));
      onDeleteClick(); // Hide TodoDetail and show TodoList
    }
  };

  if (!todo) {
    return <div className="text-gray-500">Select a Todo to view details</div>;
  }

  return (
    <div className=" max-w-xl mx-auto bg-white p-4 rounded-lg max-md:mx-2">
      <div className="py-6 px-8 max-md:p-2">
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            name="title"
            value={localTodo.title}
            onChange={handleChange}
            onBlur={handleUpdate}
            className="w-full p-2 border-0 rounded text-3xl font-semibold placeholder-gray-500 max-sm:text-xl"
            placeholder="Title"
          />
          <TrashIcon
            className="h-5 w-5 text-gray-500 cursor-pointer"
            onClick={handleDelete}
          />
        </div>
        <div className="flex mb-2">
          <BoldIcon className="h-4 w-4 text-black mx-1 cursor-pointer" />
          <ItalicIcon className="h-4 w-4 text-black mx-1 cursor-pointer" />
          <UnderlineIcon className="h-4 w-4 text-black mx-1 cursor-pointer" />
          <Bars3BottomRightIcon className="h-4 w-4 text-black mx-1 cursor-pointer" />
          <Bars3Icon className="h-4 w-4 text-black mx-1 cursor-pointer" />
          <ListBulletIcon className="h-4 w-4 text-black mx-1 cursor-pointer" />
          <ChatBubbleLeftRightIcon className="h-4 w-4 text-black mx-1 cursor-pointer" />
          <CodeBracketIcon className="h-4 w-4 text-black mx-1 cursor-pointer" />
          <XMarkIcon className="h-4 w-4 text-black mx-1 cursor-pointer" />
        </div>

        <hr className="mt-3 border-black" />

        <div className="mt-4">
          <textarea
            name="description"
            value={localTodo.description}
            onChange={handleChange}
            onBlur={handleUpdate}
            className="w-full p-2 border-0 rounded placeholder-gray-500 h-[500px]"
            placeholder="Description"
            rows={4}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
