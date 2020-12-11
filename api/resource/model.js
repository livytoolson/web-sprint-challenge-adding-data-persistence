const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    add
}

function getAll() {
    return db('resources')
}

function add(resource) {
    return db('resources')
    .insert(resource)
    .then((id) => {
        return db('resources').where('resource_id', id).first()
    })
}
