const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Define routes
router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.patch('/:id/done', todoController.toggleDone);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
