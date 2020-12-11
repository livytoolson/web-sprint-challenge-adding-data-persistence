const express = require('express')

const Resources = require('./model');

const router = express.Router();

const validateResource =  (req, res, next) => {
    if (!req.body) {
      res.status(400).json({ message: "Missing resource data" });
    } else if (!req.body.name) {
      res
        .status(400)
        .json({ message: "Resource name is required" });
    } else {
      next();
    }
  }

router.get('/', (req, res) => {
    Resources.getAll()
    .then(projects => {
        res.json(projects);
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

router.post('/', validateResource, (req, res) => {
    const resourceData = req.body

    Resources.add(resourceData)
    .then(resource => {
        res.json(resource)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

module.exports = router;
