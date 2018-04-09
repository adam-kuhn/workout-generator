exports.up = function (knex, Promise) {
  return knex.schema.table('workouts', table => {
    table.string('type')
    table.string('time')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('workouts', table => {
    table.dropColumn('type')
    table.dropColumn('time')
  })
}
