
exports.up = function(knex, Promise) {
  return knex.schema.createTable('workout_gear', table => {
    table.increments('id').primary()
    table.integer('workout_id').references('workout.id')
    table.integer('gear_id').references('gear.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('workout_gear')  
};
