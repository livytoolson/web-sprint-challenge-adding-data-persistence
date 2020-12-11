const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    add
}

function getAll() {
    return db('projects')
}

function add(project) {
    return db('projects')
    .insert(project)
    .then((id) => {
        return db('projects').where('project_id', id).first()
    })
}
