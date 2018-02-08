
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, workout_id: 1, gear_id: 2}, //400 m lunge&swing: kettle bell
        {id: 2, workout_id: 2, gear_id: 1}, //15x15: none
        {id: 3, workout_id: 3, gear_id: 1}, //hit the deck: none
        {id: 4, workout_id: 4, gear_id: 3}, //Hawaiian: pull up bar
        {id: 5, workout_id: 5, gear_id: 3}, //cwy's: special pull up bar
        {id: 6, workout_id: 5, gear_id: 6}, //cwy's: special sandbag/bucket 
        {id: 7, workout_id: 6, gear_id: 3}, //hill assault: pull up bar
        {id: 8, workout_id: 7, gear_id: 3}, //modified murph: pull up bar
        {id: 9, workout_id: 8, gear_id: 1}, //hill repeats: none
        {id: 10, workout_id: 9, gear_id: 1}, //Chop-it-up: none
        {id: 11, workout_id: 10, gear_id: 1}, //Hold on: none
        {id: 12, workout_id: 11, gear_id: 1}, //Progression: none
        {id: 13, workout_id: 12, gear_id: 1}, //5x1000: none
        {id: 14, workout_id: 13, gear_id: 1}, //fartleking: none
        {id: 15, workout_id: 14, gear_id: 1}, //build-up: none 
        {id: 16, workout_id: 15, gear_id: 2}, //chrissy: KB
        {id: 17, workout_id: 16, gear_id: 4}, //8's: barbell
        {id: 18, workout_id: 16, gear_id: 2}, //8's: KB/DB
        {id: 19, workout_id: 17, gear_id: 3}, //Chelsea: pull up bar
        {id: 20, workout_id: 18, gear_id: 3}, //Chipper: pull up bar, KB
        {id: 21, workout_id: 18, gear_id: 2}, //Chipper: KB
        {id: 22, workout_id: 18, gear_id: 5}, //Chipper: box
        {id: 23, workout_id: 19, gear_id: 2}, //Lunge FTW: KB
        {id: 24, workout_id: 19, gear_id: 3}, //Lunge FTW: pull up bar
        {id: 25, workout_id: 20, gear_id: 1}, //Uh-Oh: none
        {id: 26, workout_id: 21, gear_id: 1}, //Have Fun: none
      ]);
    });
};
