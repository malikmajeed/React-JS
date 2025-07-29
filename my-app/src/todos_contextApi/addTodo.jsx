import React, { useState , useContext} from "react";

import { TodosContext } from "./index";



const AddTodo = () => {


  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("low");



  // Access the context
  const { addTodo } = useContext(TodosContext);

const handleSubmit = () => {
    if (title && description && date) {
      const newTodo = {
        id: id + 1,
        title,
        description,
        date,
        status,
        priority,
      };
      addTodo(newTodo);
      setId(id + 1);
      setTitle("");
      setDescription("");
      setDate("");
      setPriority("low");
      setStatus("pending");
    } else {
      alert("Please fill in all fields.");
    }
  };



const handleCancel = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setPriority("low");
    setStatus("pending");
    setId(0);
  };





  return (
    <>
      <div className="add-todo-inputs">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="add-todo-buttons">
        <button onClick={handleSubmit}>Add Todo</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </>
  );
};


export default AddTodo;