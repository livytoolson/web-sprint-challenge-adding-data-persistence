const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    add
}

function getAll() {
    return db('')
}

function add(project) {
    return db('')
    .insert(project)
    .then((id) => {
        return db('').where({ id }).first()
    })
}
