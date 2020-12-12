const express = require('express');

const Projects = require('./model');

const { validateProject } = require('../middlewares/project-middleware');

const router = express.Router();

router.get('/', async (req, res) => {
    try { 
      const projects = await Projects.getAll()
      projects.forEach(project => {
        project.completed = Boolean(project.completed)
        })
        res.status(200).json(projects);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  })

router.post('/', validateProject, async (req, res) => {
  try {
    // need to convert boolean
    const newProject = await Projects.add(req.body)
    res.status(201).json(newProject)
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

module.exports = router;
