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
        {id: 37, workout_id: 47, gear_id: 2}, // Bucket Ready: KB/DB
        {id: 38, workout_id: 47, gear_id: 4}, // Bucket Ready: barbell
        {id: 39, workout_id: 47, gear_id: 5}, // Bucket Ready: box
        {id: 40, workout_id: 48, gear_id: 2}, // Leg Day - boxless: KB/DB
        {id: 41, workout_id: 48, gear_id: 3}, // Leg Day - boxless: pull-up
        {id: 42, workout_id: 48, gear_id: 4}, // Leg Day - boxless: barbell
        {id: 43, workout_id: 49, gear_id: 3}, // BW Legs: pull-up
        {id: 44, workout_id: 50, gear_id: 1}, // Hit the deck-1.0: none
        {id: 45, workout_id: 51, gear_id: 3}, // Hawaiian-1.0: pull-up bar
        {id: 46, workout_id: 52, gear_id: 1}, // 400 m lunge & squat: none
        {id: 47, workout_id: 53, gear_id: 1}, // 15x15 A: none
        {id: 48, workout_id: 54, gear_id: 1}, // Hit the deck-2.0: none
        {id: 49, workout_id: 55, gear_id: 1}, // JayMan: none
        {id: 50, workout_id: 56, gear_id: 1}, // Singled Out: none
        {id: 51, workout_id: 67, gear_id: 1}, // 15x15 C: none
        {id: 52, workout_id: 68, gear_id: 1}, // Pushamid-4.0: none
        {id: 53, workout_id: 69, gear_id: 1}, // Hawaiian-4.0: none
        {id: 54, workout_id: 70, gear_id: 3}, // Hill Assault-3.0: pull up
        {id: 55, workout_id: 71, gear_id: 3}, // Cwy's Special Bonus: pull up
        {id: 56, workout_id: 71, gear_id: 6}, // Cwy's Special Bonus: sandbag
        {id: 57, workout_id: 72, gear_id: 3}, // Cwy's Special Bonus: pull up
        {id: 58, workout_id: 72, gear_id: 5}, // Cwy's Special Bonus: box
        {id: 59, workout_id: 72, gear_id: 6}, // Cwy's Special Bonus: sandbag
        {id: 60, workout_id: 73, gear_id: 1}, // JayMan XL: none
        {id: 61, workout_id: 79, gear_id: 2}, // Spartan KB: kb
        {id: 62, workout_id: 80, gear_id: 2}, // Farmer Squat: kb
        {id: 63, workout_id: 81, gear_id: 2}  // One Arm Swing: kb
      ])
    })
}
