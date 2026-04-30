import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li className={`todo-item ${todo.done ? 'done' : ''}`}>
      <div className="todo-content">
        <span className="todo-title">{todo.title}</span>
        {todo.description && <p className="todo-desc">{todo.description}</p>}
      </div>
    </li>
  );
};

export default TodoItem;
