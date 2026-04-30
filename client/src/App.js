import React from 'react';
import './App.css';

function App() {
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
          <ul className="todo-list">
            {/* Empty list for now */}
            <p className="empty-message">No TODOs yet. Add one above!</p>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
