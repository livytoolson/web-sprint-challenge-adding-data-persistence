
exports.seed = function(knex) {
  // Remove all data before seeding
  // Truncate resets primary key
  return knex('projects').truncate()
    .then(function () {
      // Insert seed entries
      return knex('projects').insert([
        {name: 'Complete MVP', description: 'Complete all required tasks.', completed: false},
        {name: 'Complete Stretch', description: 'Complete all stretch tasks.', completed: false}
      ]);
    })
};
