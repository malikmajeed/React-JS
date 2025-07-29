import { useContext } from "react";
import { TodosContext } from "./index";
import { Calendar, Flag, Trash2, Edit3, Clock } from 'lucide-react';

const ShowTodo = () => {
  const { todos, removeTodo } = useContext(TodosContext);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (todos.length === 0) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-600" />
          Your Todos
        </h2>
        <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
          <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No todos yet. Add your first task above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-indigo-600" />
        Your Todos ({todos.length})
      </h2>
      
      <div className="grid gap-4">
        {todos.map((todo) => (
          <div 
            key={todo.id} 
            className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200"
          >
            <div className="flex items-start justify-between gap-4">
              {/* Todo Content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-start gap-3">
                  <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                    {todo.title}
                  </h3>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(todo.priority)}`}>
                      <Flag className="w-3 h-3 inline mr-1" />
                      {todo.priority}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(todo.status)}`}>
                      {todo.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{todo.description}</p>
                
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Due: {formatDate(todo.date)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 flex-shrink-0">
                <button className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTodo;