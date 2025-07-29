import React, { useState, useContext } from "react";
import { TodosContext } from "./index";
import { Plus, X } from 'lucide-react';

const AddTodo = () => {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("pending");
  const [priority, setPriority] = useState("low");

  const { addTodo } = useContext(TodosContext);

  const handleSubmit = () => {
    if (title && description && date) {
      const newTodo = {
        id: Date.now(), // Better unique ID
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
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
        <Plus className="w-5 h-5 text-indigo-600" />
        Add New Todo
      </h2>

      <div className="flex flex-wrap items-end gap-4">
        {/* Title Input */}
        <div className="flex-1 min-w-[180px]">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Description Input */}
        <div className="flex-1 min-w-[200px]">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Date Input */}
        <div className="min-w-[140px]">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Due Date
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Priority Select */}
        <div className="min-w-[120px]">
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

    

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
