import { useContext } from "react";

import { TodosContext } from "./index";


const ShowTodo = () => {

const { todos, removeTodo } = useContext(TodosContext);
  return (
    <div>
      <h2>List of Todos</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <p>Date: {todo.date}</p>
          <p>Status: {todo.status}</p>
          <p>Priority: {todo.priority}</p>
          <div className="action-Buttons">
            <button className="edit-button">Edit</button>
            <button
              className="edit-button"
              onClick={(todo) => removeTodo(todo.id)}
            >
              Detele
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


export default ShowTodo;
