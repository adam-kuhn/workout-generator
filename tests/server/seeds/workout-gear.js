exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('workout_gear').del()
    .then(function () {
      // Inserts seed entries
      return knex('workout_gear').insert([
        {id: 1, workout_id: 1, gear_id: 1}, // none
        {id: 2, workout_id: 2, gear_id: 1}, // none
        {id: 3, workout_id: 3, gear_id: 1}, // none
        {id: 4, workout_id: 4, gear_id: 1}, // none
        {id: 5, workout_id: 5, gear_id: 6}, // sandbag
        {id: 6, workout_id: 6, gear_id: 6}, // sandbag
        {id: 7, workout_id: 7, gear_id: 6}, // sandbag
        {id: 8, workout_id: 8, gear_id: 3}, // pull-up
        {id: 9, workout_id: 9, gear_id: 1}, // none
        {id: 10, workout_id: 10, gear_id: 1}, // none
        {id: 11, workout_id: 11, gear_id: 1}, // none
        {id: 12, workout_id: 12, gear_id: 1}, // none
        {id: 13, workout_id: 13, gear_id: 2}, // kb
        {id: 14, workout_id: 13, gear_id: 3}, // pull-up
        {id: 15, workout_id: 13, gear_id: 5}, // box
        {id: 16, workout_id: 14, gear_id: 2}, // pull-up
        {id: 17, workout_id: 14, gear_id: 3}, // box
        {id: 18, workout_id: 14, gear_id: 5}, // kb
        {id: 19, workout_id: 15, gear_id: 2}, // kb
        {id: 20, workout_id: 15, gear_id: 4}, // barbell
        {id: 21, workout_id: 15, gear_id: 5} // box
      ])
    })
}
