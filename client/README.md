# Frontend - TODO App

This is the frontend for the TODO application, built with React.js.

## 🛠️ Features

- **Clean UI**: Minimalist design focused on task management.
- **Full CRUD**: Create, read, update, and delete tasks.
- **Status Toggle**: Easily mark tasks as completed.
- **Optimistic Updates**: Immediate UI updates for a snappy experience.
- **Error Handling**: Displays user-friendly error messages if the API fails.
- **Loading States**: Feedback while waiting for server responses.

## 🚀 Setup & Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configuration**:
   The application is configured to talk to the backend at `http://localhost:5000`. If your backend is running on a different port, update the `API_URL` in `src/services/api.js`.

3. **Run the Application**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Architecture

- `src/App.js`: Main container component managing state and API calls.
- `src/components/`: Reusable UI components (`TodoList`, `TodoItem`).
- `src/services/api.js`: API service layer using Fetch API.
- `src/App.css`: Styles for the application.

## ✨ Bonus Points Implemented

- **Optimistic UI Updates**: Deleting and toggling tasks updates the UI instantly, with a rollback mechanism if the API call fails.
- **UX Touches**: Transitions and hover effects for a premium feel.
- **Form Validation**: Simple checks to ensure task titles are not empty.
- **Clean Design**: A polished, responsive interface.

## ⚠️ Assumptions & Limitations

- **Browser Support**: Targeted at modern browsers supporting ES6 and CSS Grid/Flexbox.
- **Offline Mode**: Does not support offline caching or service workers.
