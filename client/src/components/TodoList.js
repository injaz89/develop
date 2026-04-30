import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return <p className="empty-message">No TODOs yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
