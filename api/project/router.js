const express = require('express');

const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getAll()
    .then(projects => {
        res.json(projects);
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

router.post('/', (req, res) => {
    const projectData = req.body

    Projects.add(projectData)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

module.exports = router;
