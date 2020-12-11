
exports.seed = function(knex) {
      return knex('resources').insert([
        {name: 'Computer', description: 'Must have a functioning computer to complete Sprint Challenge.'},
        {name: 'SQLiteStudio', description: 'Must download SQLiteStudio to complete Sprint Challenge.'}
      ]);
};
