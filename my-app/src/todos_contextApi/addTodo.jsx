import React, { useState, useContext } from "react";
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
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col gap-4 w-full md:w-2/3">
        <label htmlFor="title" className="font-semibold text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label htmlFor="description" className="font-semibold text-gray-700">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label htmlFor="date" className="font-semibold text-gray-700">
          Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label htmlFor="priority" className="font-semibold text-gray-700">
          Priority
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="flex flex-col gap-4 justify-center items-center md:w-1/3">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Todo
        </button>
        <button
          onClick={handleCancel}
          className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTodo;