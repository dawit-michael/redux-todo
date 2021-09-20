import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/slices/todoSlice";

const Input = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = (e: any) => {
    e.preventDefault();
    setTitle("");
    dispatch(
      addTodo({ id: Date.now().toString(), title: title, completed: false })
    );
  };
  return (
    <form className=" flex shadow-xl" onSubmit={handleAddTodo}>
      <input
        value={title}
        onChange={(el) => setTitle(el.target.value)}
        className="ac rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        placeholder="task name"
      />
      <button
        type="submit"
        className="px-8 rounded-r-lg bg-purple-500  text-white font-bold p-4 uppercase border-t border-b border-r"
      >
        Add Task
      </button>
    </form>
  );
};

export default Input;
