import React, { useEffect, useState } from "react";
import { TodoProvider } from "./Context";
import { TodoForm } from "./components/TodoForm";
import TodoItem from "./components/TodoItem";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //setTodos(todo);   //we are adding todo in this type previous array element is remove and create new array with this new todo but not delete previous element hence we are not apply this type of startergy.
  
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id)); //filter are use for create new array from previous array with  understand given condition.
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, complete: !prevTodo.complete }
          : prevTodo
      )
    );
  };

  //this useEffect are use for application load time get all valuew they are present in todo
  useEffect(() => {
    
    const todos =JSON.parse(localStorage.getItem("todos"));

    //check the todo are availabel or not if todo is available then set the todo .
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //This useEffect are use for set all values in todo when application load.
  useEffect(() => {
    //localStorage are use for store the data in local memory and localStorage allowed only two method 1)get() 2)set()
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shodow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and todo item here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
            {/* <TodoProvider /> */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
