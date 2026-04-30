const Todo = require('../models/Todo');

// 1. Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// 2. Create todo
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    
    if (!title || title.trim() === '') {
      return res.status(400).json({ message: 'Title is required' });
    }

    const newTodo = new Todo({ title, description });
    const savedTodo = await newTodo.save();
    
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// 3. Update todo
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, done } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, done },
      { new: true, runValidators: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// 4. Toggle done
exports.toggleDone = async (req, res) => {
  try {
    const { id } = req.params;
    
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    todo.done = !todo.done;
    const updatedTodo = await todo.save();

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// 5. Delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
