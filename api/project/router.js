const express = require('express');

const Projects = require('./model');

const router = express.Router();

const validateProject =  (req, res, next) => {
    if (!req.body) {
      res.status(400).json({ message: "Missing project data" });
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

router.post('/', validateProject, async (req, res) => {
  try {
    const newProject = await Projects.add(req.body)
    res.status(201).json(newProject)
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

module.exports = router;
