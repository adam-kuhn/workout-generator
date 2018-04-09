exports.up = function (knex, Promise) {
  return knex.schema.createTable('gear', table => {
    table.increments('id').primary()
    table.string('equipment')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('gear')
}
