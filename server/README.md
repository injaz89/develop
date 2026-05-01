# Backend - TODO API

This is the backend for the TODO application, built using Node.js, Express, and MongoDB.

## 🛠️ Features

- RESTful API endpoints for CRUD operations.
- MongoDB integration via Mongoose.
- Environment variable configuration.
- CORS enabled for frontend communication.
- Graceful error handling.

## 🚀 Setup & Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Configuration**:
   Create a `.env` file in the root of the `server` directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

3. **Database Setup**:
   - This project uses **MongoDB Atlas**. 
   - Ensure your IP address is whitelisted in the MongoDB Atlas dashboard.
   - Replace `your_mongodb_connection_string` in the `.env` file with your actual connection string.

4. **Run the Server**:
   - For development (with nodemon):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/todos` | Fetch all TODO items. |
| `POST` | `/api/todos` | Create a new TODO. Required: `{ "title": "string" }`. Optional: `{ "description": "string" }`. |
| `PUT` | `/api/todos/:id` | Update a TODO. Body: `{ "title": "string", "description": "string", "done": boolean }`. |
| `PATCH` | `/api/todos/:id/done` | Toggle the `done` status of a TODO. |
| `DELETE` | `/api/todos/:id` | Delete a specific TODO. |

## 🏗️ Architecture

- `index.js`: Entry point, server setup, and database connection.
- `routes/`: Express router definitions.
- `controllers/`: Request handlers and business logic.
- `models/`: Mongoose schemas and database models.

## ⚠️ Assumptions & Limitations

- **Authentication**: This version does not include user authentication. All TODOs are shared.
- **Validation**: Basic server-side validation is implemented (title is required).
- **Concurrency**: Basic error handling for database connection timeouts.
