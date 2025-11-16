import React, { useState } from "react";

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo=(id)=>{
    setTodos(todos.filter(todo=>todo.id !== id))
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-purple-800 text-center">
            TodoApp
          </h1>
          <form onSubmit={handleSubmit} className="my-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add New Todo"
                className="flex-1 border px-4 py-2 rounded-lg focus:outline-none focus:ring-2
                    focus:ring-purple-500
                    focus:border-transparent
                   "
              />
              <button
                type="submit"
                className="px-6 py-2  bg-purple-600 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500  focus:ring-offset-2 transition-colors hover:bg-purple-800"
              >
                Add
              </button>
            </div>
          </form>
          <div>
            {todos.map((todo) => (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  className={` ${
                    todo.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-700"
                  }`}
                >
                  {todo.text}
                </span>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            ))}
          </div>
          {todos.length === 0 && (
            <p className="text-center text-gray-500">
              No Todos Yet Today,So Add Some Task Above!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
