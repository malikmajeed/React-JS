import React, { useState, createContext } from 'react';
import AddTodo from './addTodo';
import ShowTodo from './showTodo';
import { CheckSquare } from 'lucide-react';

export const TodosContext = createContext();

const Main = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    localStorage.setItem('todos', JSON.stringify([...todos, todo]));
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo }}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <CheckSquare className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">Todo Manager</h1>
          </div>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        {/* Add Todo Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <AddTodo />
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <ShowTodo />
        </div>
      </div>
    </TodosContext.Provider>
  );
};

export default Main;