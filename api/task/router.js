const express = require('express')

const Tasks = require('./model');

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

router.post('/', (req, res) => {
    const resourceData = req.body

    Tasks.add(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

module.exports = router;

