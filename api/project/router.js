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
        projects.forEach(project => {
          project.completed = Boolean(project.completed)
        })
        res.json(projects);
      })
      .catch(e => {
        res.status(500).json({ message: e.message });
      })
  })

router.post('/', validateProject, async (req, res) => {
  try {
    const newProject = await Projects.add(req.body)
    res.status(201).json(newProject)
  } catch (error) {
    res.status(500).json({ message: error })
  }
})

// router.post('/', validateProject, (req, res) => {
//   Projects.add(req.body)
//     .then(project => {
//       project[0].completed = Boolean(project[0].completed)
//       res.json(project);
//     })
//     .catch(error => {
//       res.status(500).json({ message: error.message });
//     })
// })

module.exports = router;
