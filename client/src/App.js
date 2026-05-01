import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { fetchTodos, createTodo, deleteTodo, updateTodo, toggleTodo } from './services/api';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
        setError('Connection Error: Could not reach the server. Please ensure the backend is running.');
      } finally {
        setLoading(false);
      }
    };
    loadTodos();
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) {
      setIsInvalid(true);
      return;
    }
    
    setIsInvalid(false);
    try {
      setError(null);
      const savedTodo = await createTodo({ 
        title: newTodoTitle, 
        description: newTodoDescription 
      });
      setTodos([savedTodo, ...todos]);
      setNewTodoTitle('');
      setNewTodoDescription('');
    } catch (error) {
      console.error('Failed to create todo:', error);
      setError('Failed to create TODO. Please try again.');
    }
  };

  const handleDeleteTodo = async (id) => {
    const previousTodos = [...todos];
    setTodos(todos.filter(todo => todo._id !== id));
    try {
      setError(null);
      await deleteTodo(id);
    } catch (error) {
      console.error('Failed to delete todo:', error);
      setError('Failed to delete TODO.');
      setTodos(previousTodos);
    }
  };

  const handleUpdateTodo = async (id, updateData) => {
    const previousTodos = [...todos];
    setTodos(todos.map(todo => todo._id === id ? { ...todo, ...updateData } : todo));
    try {
      setError(null);
      await updateTodo(id, updateData);
    } catch (error) {
      console.error('Failed to update todo:', error);
      setError('Failed to update TODO.');
      setTodos(previousTodos);
    }
  };

  const handleToggleTodo = async (id) => {
    const previousTodos = [...todos];
    setTodos(todos.map(todo => todo._id === id ? { ...todo, done: !todo.done } : todo));
    try {
      setError(null);
      await toggleTodo(id);
    } catch (error) {
      console.error('Failed to toggle todo:', error);
      setError('Failed to toggle TODO.');
      setTodos(previousTodos);
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
            <div className="todo-input-group">
              <input 
                type="text" 
                placeholder="Title" 
                className={`todo-input ${isInvalid ? 'invalid' : ''}`}
                value={newTodoTitle}
                onChange={(e) => {
                  setNewTodoTitle(e.target.value);
                  if (e.target.value.trim()) setIsInvalid(false);
                }}
                required
              />
              {isInvalid && <span className="input-error-text">Title is required</span>}
              <input 
                type="text" 
                placeholder="Description (optional)" 
                className="todo-input todo-desc-input"
                value={newTodoDescription}
                onChange={(e) => setNewTodoDescription(e.target.value)}
              />
            </div>
            <button type="submit" className="todo-add-btn">Add</button>
          </form>
        </section>
        <section className="todo-list-section">
          {loading ? (
            <p className="loading-message">Loading TODOs...</p>
          ) : (
            <>
              <TodoList 
                todos={todos} 
                onDelete={handleDeleteTodo} 
                onUpdate={handleUpdateTodo}
                onToggle={handleToggleTodo}
              />
              {todos.length > 0 && (
                <div className="todo-stats">
                  {todos.filter(t => !t.done).length} tasks remaining
                </div>
              )}
            </>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
