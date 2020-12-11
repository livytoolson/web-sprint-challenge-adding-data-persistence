const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    add
}

function getAll() {
    return db('')
}

function add(resource) {
    return db('')
    .insert(resource)
    .then((id) => {
        return db('').where({ id }).first()
    })
}
