import React from "react";
import { useState } from "react";
import { useTodo } from "../Context";

export const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, complete: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Write Todo Here"
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />

      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 text-white shrink-0 bg-green-500"
      >
        Add
      </button>
    </form>
  );
};
