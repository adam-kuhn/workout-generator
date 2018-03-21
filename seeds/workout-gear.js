exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('workout_gear').del()
    .then(function () {
      // Inserts seed entries
      return knex('workout_gear').insert([
        {id: 1, workout_id: 1, gear_id: 2}, // 400 m lunge&swing: kettle bell
        {id: 2, workout_id: 2, gear_id: 1}, // 15x15: none
        {id: 3, workout_id: 3, gear_id: 1}, // hit the deck: none
        {id: 4, workout_id: 4, gear_id: 3}, // Hawaiian: pull up bar
        {id: 5, workout_id: 5, gear_id: 3}, // cwy's: special pull up bar
        {id: 6, workout_id: 5, gear_id: 6}, // cwy's: special sandbag/bucket
        {id: 7, workout_id: 6, gear_id: 3}, // hill assault: pull up bar
        {id: 8, workout_id: 7, gear_id: 3}, // modified murph: pull up bar
        {id: 9, workout_id: 15, gear_id: 2}, // chrissy: KB
        {id: 10, workout_id: 16, gear_id: 4}, // 8's: barbell
        {id: 11, workout_id: 16, gear_id: 2}, // 8's: KB/DB
        {id: 12, workout_id: 17, gear_id: 3}, // Chelsea: pull up bar
        {id: 13, workout_id: 18, gear_id: 3}, // Chipper: pull up bar, KB
        {id: 14, workout_id: 18, gear_id: 2}, // Chipper: KB
        {id: 15, workout_id: 18, gear_id: 5}, // Chipper: box
        {id: 16, workout_id: 19, gear_id: 2}, // Lunge FTW: KB
        {id: 17, workout_id: 19, gear_id: 3}, // Lunge FTW: pull up bar
        {id: 18, workout_id: 20, gear_id: 1}, // Uh-Oh: none
        {id: 19, workout_id: 21, gear_id: 1}, // Have Fun: none
        {id: 20, workout_id: 22, gear_id: 3}, // Boxless: pull-up bar
        {id: 21, workout_id: 22, gear_id: 2}, // Boxless: KB
        {id: 22, workout_id: 23, gear_id: 4}, // Leg Day: barbell
        {id: 23, workout_id: 23, gear_id: 2}, // Leg Day: KB
        {id: 24, workout_id: 23, gear_id: 5}, // Leg Day: box
        {id: 25, workout_id: 23, gear_id: 3}, // Leg Day: pull-up bar
        {id: 26, workout_id: 24, gear_id: 2}, // Strong Leg: KB
        {id: 27, workout_id: 24, gear_id: 5}, // Strong Leg: box
        {id: 28, workout_id: 24, gear_id: 3}, // Strong Leg: pull-up bar
        {id: 29, workout_id: 25, gear_id: 2}, // huMan Up: KB
        {id: 30, workout_id: 25, gear_id: 3}, // huMan Up: pull-up bar
        {id: 31, workout_id: 26, gear_id: 1}, // hit the deck-3.0: none
        {id: 32, workout_id: 27, gear_id: 1}, // pushamid-3.0: none
        {id: 33, workout_id: 28, gear_id: 3}, // Hawaiian-3.0: pull-up bar
        {id: 34, workout_id: 29, gear_id: 3}, // Hill assualt-2.0: pull-up bar
        {id: 35, workout_id: 30, gear_id: 1}, // Run & Burpee: none
        {id: 36, workout_id: 31, gear_id: 3}, // Murph: pull-up bar
        {id: 37, workout_id: 31, gear_id: 3}, // Murph: pull-up bar
        {id: 38, workout_id: 47, gear_id: 2}, // Bucket Ready: KB/DB
        {id: 39, workout_id: 47, gear_id: 4}, // Bucket Ready: barbell
        {id: 40, workout_id: 47, gear_id: 5}, // Bucket Ready: box
        {id: 41, workout_id: 48, gear_id: 2}, // Leg Day - boxless: KB/DB
        {id: 42, workout_id: 48, gear_id: 3}, // Leg Day - boxless: pull-up
        {id: 43, workout_id: 48, gear_id: 4}, // Leg Day - boxless: barbell
        {id: 44, workout_id: 49, gear_id: 3} // BW Legs: pull-up
      ])
    })
}
