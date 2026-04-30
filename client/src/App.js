import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import { fetchTodos, createTodo, deleteTodo } from './services/api';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTodoTitle, setNewTodoTitle] = useState('');

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
    };
    loadTodos();
  }, []);

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;
    try {
      const savedTodo = await createTodo({ title: newTodoTitle });
      setTodos([savedTodo, ...todos]);
      setNewTodoTitle('');
    } catch (error) {
      console.error('Failed to create todo:', error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
      </header>
      <main>
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
            <TodoList todos={todos} onDelete={handleDeleteTodo} />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
