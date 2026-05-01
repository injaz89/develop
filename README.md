# Full-Stack TODO Application

A simple and clean TODO application built with the MERN stack (MongoDB, Express, React, Node.js). This project was created as part of a full-stack development exercise.

## 🚀 Overview

This repository is organized as a monorepo containing both the frontend (client) and backend (server) of the application.

- **Frontend**: React.js application for a dynamic and responsive user interface.
- **Backend**: Node.js & Express RESTful API for task management.
- **Database**: MongoDB (Atlas) for persistent storage.

## 📂 Project Structure

```text
hiring-fullstack-todo/
├── client/           # React frontend
│   ├── public/       # Static assets
│   ├── src/          # Source code
│   └── README.md     # Client-specific documentation
├── server/           # Node.js/Express backend
│   ├── controllers/  # API logic
│   ├── models/       # Mongoose schemas
│   ├── routes/       # API endpoints
│   └── README.md     # Server-specific documentation
└── README.md         # Root documentation (this file)
```

## 🛠️ Tech Stack

- **Frontend**: React, CSS (Vanilla), Fetch API
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB Atlas
- **Tools**: Nodemon, Dotenv, CORS

## 🏃 Getting Started

To run this project locally, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd hiring-fullstack-todo
   ```

2. **Setup the Backend**:
   Navigate to the `server` directory and install dependencies.
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory (see `server/README.md` for details).

3. **Setup the Frontend**:
   Navigate to the `client` directory and install dependencies.
   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the Backend**:
   In the `server` directory:
   ```bash
   npm run dev
   ```
   The server will run on [http://localhost:5000](http://localhost:5000).

2. **Start the Frontend**:
   In the `client` directory:
   ```bash
   npm start
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000).

## ✨ Features Implemented

- [x] **View TODOs**: Dynamic list fetching from the database.
- [x] **Create TODO**: Form with title and optional description.
- [x] **Edit TODO**: Inline editing mode for title and description.
- [x] **Toggle Status**: Mark tasks as done/undone with instant visual feedback.
- [x] **Delete TODO**: Remove tasks with optimistic UI updates.
- [x] **Loading States**: Visual indicators while fetching data.
- [x] **Error Handling**: Graceful error messages for API failures.
- [x] **Responsive Design**: Clean UI that works on different screen sizes.

## 📝 License

This project is licensed under the ISC License.
