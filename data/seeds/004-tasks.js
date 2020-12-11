
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {description: 'Design data model and use knex migrations.', notes: 'You must satisfy the business rules.', completed: false, project_id: 1},
        {description: 'Build an API with the given endpoints.', notes: 'API must be built inside the api folder.', completed: false, project_id: 1},
        {description: 'Add an endpoint to get a list of project resources', notes: 'Be sure to work on stretch goals on a new branch!', completed: false, project_id: 2},
        {description: 'Add an endpoint to get a list of project tasks', notes: 'Be sure to work on stretch goals on a new branch!', completed: false, project_id: 2},
      ]);
    });
};
