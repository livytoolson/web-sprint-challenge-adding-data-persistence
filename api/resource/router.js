const express = require('express')

const Resources = require('./model');

const { validateResource } = require('../middlewares/project-middleware')

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const resources = await Resources.getAll()
    resources.forEach(resource => {
      resource.complete = Boolean(resource.completed)
    })
    res.status(200).json(resources)
  } catch (error) {
    res.status(500).json({ message: error.message })
    }
  });

router.post('/', validateResource, async (req, res) => {
  try {
    // need to convert boolean
    const newResource = await Resources.add(req.body)
    res.status(201).json(newResource)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

module.exports = router;
