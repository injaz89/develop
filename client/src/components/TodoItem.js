import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete, onUpdate, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleUpdate = () => {
    if (editTitle.trim() && editTitle !== todo.title) {
      onUpdate(todo._id, editTitle);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleUpdate();
    } else if (e.key === 'Escape') {
      setEditTitle(todo.title);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <li className={`todo-item ${todo.done ? 'done' : ''}`}>
        <div className="todo-content edit-mode">
          <input
            type="text"
            className="todo-edit-input"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <div className="todo-edit-actions">
            <button className="todo-save-btn" onClick={handleUpdate}>Save</button>
            <button className="todo-cancel-btn" onClick={() => {
              setEditTitle(todo.title);
              setIsEditing(false);
            }}>Cancel</button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className={`todo-item ${todo.done ? 'done' : ''}`}>
      <div className="todo-toggle">
        <input 
          type="checkbox" 
          checked={todo.done} 
          onChange={() => onToggle(todo._id)} 
        />
      </div>
      <div className="todo-content" onDoubleClick={() => setIsEditing(true)}>
        <span className="todo-title">{todo.title}</span>
        {todo.description && <p className="todo-desc">{todo.description}</p>}
      </div>
      <div className="todo-actions">
        <button 
          className="todo-edit-btn" 
          onClick={() => setIsEditing(true)}
          aria-label="Edit todo"
        >
          ✎
        </button>
        <button 
          className="todo-delete-btn" 
          onClick={() => onDelete(todo._id)}
          aria-label="Delete todo"
        >
          ✕
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
