
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gear').del()
    .then(function () {
      // Inserts seed entries
      return knex('gear').insert([
        {id: 1, equipment: 'none'},
        {id: 2, equipment: 'kb/db'}, //kettle bell and dumbbell
        {id: 3, equipment: 'pull-up'},
        {id: 4, equipment: 'barbell'},
        {id: 5, equipment: 'box'},
        {id: 6, equipment: 'sandbag'}, //includes bucket
        {id: 7, equipment: 'rope'},
        {id: 8, equipment: 'row'} // rowing maching
      ]);
    });
};
