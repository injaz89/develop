import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { fetchTodos } from './services/api';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      } finally {
        setLoading(false);
      }
    };
    loadTodos();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
      </header>
      <main>
        <section className="todo-form-section">
          <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="What needs to be done?" 
              className="todo-input"
            />
            <button type="submit" className="todo-add-btn">Add</button>
          </form>
        </section>
        <section className="todo-list-section">
          {loading ? (
            <p className="loading-message">Loading TODOs...</p>
          ) : (
            <TodoList todos={todos} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
