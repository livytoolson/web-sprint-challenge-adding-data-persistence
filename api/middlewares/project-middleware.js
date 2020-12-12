
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

const validateResource =  (req, res, next) => {
    if (!req.body) {
      res.status(400).json({ message: "Missing resource data" });
    } else if (!req.body.name) {
      res
        .status(400).json({ message: "Resource name is required" });
    } else {
      next();
    }
}

const validateTask = (req, res, next) => {
    if(!req.body) {
      res.status(400).json({ message: 'Missing task data' })
    } else if (!req.body.description) {
      res.status(400).json({ message: 'Task description is required.' })
    } else {
      next()
    }
}

module.exports = {
    validateProject,
    validateResource,
    validateTask
}