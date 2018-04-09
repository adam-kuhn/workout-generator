exports.up = function (knex, Promise) {
  return knex.schema.createTable('workouts', table => {
    table.increments('id').primary()
    table.string('workout')
    table.json('description')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('workouts')
}
