
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {name: 'Complete MVP', description: 'Complete all required tasks.', completed: false},
        {name: 'Complete Stretch', description: 'Complete all stretch tasks.', completed: false}
      ]);
    });
};
