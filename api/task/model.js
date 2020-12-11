const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    add
}

function getAll() {
    return db('tasks')
    .select('projects.name', 'projects.description', 'tasks.description', 'tasks.notes', 'tasks.completed')
    .join('projects', 'tasks.project_id', 'projects.project_id')
}

function add(resource) {
    return db('tasks')
    .insert(resource)
    .then((id) => {
        return db('tasks').where('task_id', id).first()
    })
}
