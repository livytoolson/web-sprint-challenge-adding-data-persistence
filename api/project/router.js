const express = require('express');

const Projects = require('./model');

const router = express.Router();

const validateProject =  (req, res, next) => {
    if (!req.body) {
      res.status(400).json({ message: "Missing aproject data" });
    } else if (!req.body.name) {
      res
        .status(400).json({ message: "Project name is required" });
    } else {
      next();
    }
  }

router.get('/', (req, res) => {
    Projects.getAll()
    .then(projects => {
        res.json(projects);
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

router.post('/', validateProject, (req, res) => {
    const projectData = req.body

    Projects.add(projectData)
    .then(project => {
        res.json(project)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

module.exports = router;
