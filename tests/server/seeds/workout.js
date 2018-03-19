exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {id: 1, workout: 'test1', description: 'description', type: 'OCR', time: '0-20 min'}, // no gear
        {id: 2, workout: 'test2', description: 'description', type: 'OCR', time: '40-60 min'}, // no gear
        {id: 3, workout: 'test3', description: 'description', type: 'OCR', time: '40-60 min'}, // no gear
        {id: 4, workout: 'test4', description: 'description', type: 'OCR', time: '>60 min'}, // no gear
        {id: 5, workout: 'test5', description: 'description', type: 'OCR', time: '20-40 min'}, // 1 gear(sandbag)
        {id: 6, workout: 'test6', description: 'description', type: 'OCR', time: '20-40 min'}, // 1 gear(sandbag)
        {id: 7, workout: 'test7', description: 'description', type: 'OCR', time: '20-40 min'}, // 1 gear(sandbag)
        {id: 8, workout: 'test8', description: 'description', type: 'OCR', time: '20-40 min'}, // 1 gear(pull up)
        {id: 9, workout: 'test9', description: 'description', type: 'Running', time: '>60 min'},
        {id: 10, workout: 'test10', description: 'description', type: 'Running', time: '>60 min'},
        {id: 11, workout: 'test11', description: 'description', type: 'Running', time: '40-60 min'},
        {id: 12, workout: 'test12', description: 'description', type: 'Running', time: '20-40 min'},
        {id: 13, workout: 'test13', description: 'description', type: 'Strength', time: '20-40 min'}, // 3 gear (kb, box, pull-up)
        {id: 14, workout: 'test14', description: 'description', type: 'Strength', time: '>60 min'}, // 3 gear (kb, box, pull-up)
        {id: 15, workout: 'test15', description: 'description', type: 'Strength', time: '0-20 min'} // 3 gear (kb, box, barbell)
      ])
    })
}
