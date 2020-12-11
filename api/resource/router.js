const express = require('express')

const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getAll()
    .then(projects => {
        res.json(projects);
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

router.post('/', (req, res) => {
    const resourceData = req.body

    Resources.add(resourceData)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    });
});

module.exports = router;
