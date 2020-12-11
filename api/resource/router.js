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
      .then(resources => {
        resources.forEach(resource => {
          resource.completed = Boolean(resource.completed)
        })
        res.json(resources);
      })
      .catch(error => {
        res.status(500).json({ message: error.message });
      })
  })

router.post('/', validateResource, async (req, res) => {
  try {
    const newResource = await Resources.add(req.body)
    res.status(201).json(newResource)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

// router.post('/', validateResource, (req, res) => {
//   Resources.add(req.body)
//     .then(resource => {
//       resource[0].completed = Boolean(resource[0].completed)
//       res.json(resource);
//     })
//     .catch(e => {
//       res.status(500).json({ message: e.message });
//     })
// })

module.exports = router;
