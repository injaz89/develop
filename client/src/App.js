import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { fetchTodos, createTodo, deleteTodo, updateTodo, toggleTodo } from './services/api';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
        setError('Failed to load TODOs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadTodos();
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;
    try {
      setError(null);
      const savedTodo = await createTodo({ title: newTodoTitle });
      setTodos([savedTodo, ...todos]);
      setNewTodoTitle('');
    } catch (error) {
      console.error('Failed to create todo:', error);
      setError('Failed to create TODO.');
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      setError(null);
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete todo:', error);
      setError('Failed to delete TODO.');
    }
  };

  const handleUpdateTodo = async (id, title) => {
    try {
      setError(null);
      const updatedTodo = await updateTodo(id, { title });
      setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
    } catch (error) {
      console.error('Failed to update todo:', error);
      setError('Failed to update TODO.');
    }
  };

  const handleToggleTodo = async (id) => {
    try {
      setError(null);
      const updatedTodo = await toggleTodo(id);
      setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
    } catch (error) {
      console.error('Failed to toggle todo:', error);
      setError('Failed to toggle TODO.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
      </header>
      <main>
        {error && <div className="error-message">{error}</div>}
        <section className="todo-form-section">
          <form className="todo-form" onSubmit={handleAddTodo}>
            <input 
              type="text" 
              placeholder="What needs to be done?" 
              className="todo-input"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
            />
            <button type="submit" className="todo-add-btn">Add</button>
          </form>
        </section>
        <section className="todo-list-section">
          {loading ? (
            <p className="loading-message">Loading TODOs...</p>
          ) : (
            <TodoList 
              todos={todos} 
              onDelete={handleDeleteTodo} 
              onUpdate={handleUpdateTodo}
              onToggle={handleToggleTodo}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
