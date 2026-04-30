const API_URL = 'http://localhost:5000/api/todos';

export const fetchTodos = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const createTodo = async (todoData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todoData),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const updateTodo = async (id, todoData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todoData),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const toggleTodo = async (id) => {
  const response = await fetch(`${API_URL}/${id}/done`, {
    method: 'PATCH',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
