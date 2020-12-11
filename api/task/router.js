const express = require('express')

const Tasks = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.getAll()
    .then(tasks => {
        res.json(tasks);
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

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

