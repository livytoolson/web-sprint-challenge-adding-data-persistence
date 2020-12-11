
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
        table.increments('project_id')
        table.string('name').notNullable()
        table.string('description', 256)
        table.boolean('completed').defaultTo(false)
    })
    .createTable('resources', table => {
        table.increments('resource_id')
        table.string('name', 128).unique().notNullable()
        table.string('description', 256)
    })
    .createTable('tasks', table => {
        table.increments('task_id')
        table.string('description', 256).notNullable()
        table.string('notes', 256)
        table.boolean('completed').defaultTo(false)
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id').inTable('projects')
            .onDelete('RESTRICTS').onUpdate('RESTRICTS')
    })
    .createTable('project_resources', table => {
        table.increments('project_resource_id')
        table.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id').inTable('projects')
            .onDelete('RESTRICTS').onUpdate('RESTRICTS')
        table.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id').inTable('resources')
            .onDelete('RESTRICTS').onUpdate('RESTRICTS')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
