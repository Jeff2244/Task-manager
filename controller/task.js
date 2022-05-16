const Task = require('../model/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: 'No such task' });
    }
    res.status(201).json({ task });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: 'No such task' });
    }
    await task.save();
    res.redirect('index.html');
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ msg: 'No such task' });
    }
    res.status(201).json({ task });
  } catch (e) {
    res.status(500).json({ msg: e });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
