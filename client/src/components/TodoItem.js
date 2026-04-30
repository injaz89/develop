import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className={`todo-item ${todo.done ? 'done' : ''}`}>
      <div className="todo-content">
        <span className="todo-title">{todo.title}</span>
        {todo.description && <p className="todo-desc">{todo.description}</p>}
      </div>
      <button 
        className="todo-delete-btn" 
        onClick={() => onDelete(todo._id)}
        aria-label="Delete todo"
      >
        ✕
      </button>
    </li>
  );
};

export default TodoItem;
