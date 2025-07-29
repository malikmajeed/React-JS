import React, {useState, createContext} from 'react';
import AddTodo from './addTodo';
import ShowTodo from './showtodo';


export const TodosContext = createContext();

const Main =()=>{

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        alert("Todo added successfully!");
        localStorage.setItem('todos', JSON.stringify(todos));
    }

const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    alert("Todo deleted successfully!");
    localStorage.setItem('todos', JSON.stringify(updatedTodos));

}

    return (
      <TodosContext.Provider value={{ todos, addTodo,removeTodo }}>
        <div className="main">
          <h1>Todo List</h1>
          <AddTodo />
          <ShowTodo />
        </div>
      </TodosContext.Provider>
    );
}


export default Main;
