const express = require('express')

const Tasks = require('./model');

const { validateTask } = require('../middlewares/project-middleware');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.getAll()
      .then(tasks => {
        tasks.forEach(task => {
          task.completed = Boolean(task.completed)
        })
        res.json(tasks);
      })
      .catch(e => {
        res.status(500).json({ message: e.message });
      })
  })

router.post('/', validateTask, async (req, res) => {
  try {
    // need to convert boolean
    const newTask = await Tasks.add(req.body)
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

module.exports = router;

