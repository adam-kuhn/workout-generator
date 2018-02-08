
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {id: 1, workout: '400m Lunge & Swing', description: '25 min AMRAP: 400m run, 12 OH weighted lunges, 12 kb swings', type: 'OCR', time: '20-40 min'},
        {id: 2, workout: '15x15 B', description: 'Repeat for Time: 15 min run, 15 burpees', type: 'OCR', time: '40-60 min'},
        {id: 3, workout: 'Hit the Deck 4.0', description: 'Repeat for Time: 1 mile run, 20 push-ups, 20 crunches, 20 squats', type: 'OCR', time: '>60 min'},
        {id: 4, workout: 'Hawaiian 2.0', description: 'Repeat for Time: 1 km run, 10 push-ups, 10 burpees, 5 pull-ups, 10 squats', type: 'OCR', time: '20-40'},
        {id: 5, workout: "Cwy's Special", description: '10 min warmup, 40 min AMRAP: 100 m hill sprint, sandbag/bucket carry up the hill, 10 pull-ups, 10 push-ups, 100 m hill sprint, 10 sandbag/bucket squats, 250 m race pace run, 10 box jumps, 15 burpees', type: 'OCR', time: '40-60 min'},
        {id: 6, workout: 'Hill Assualt 1.0', description: 'AMRAP: 1 hill climb (60-90s), 10 push-ups at the top, 10 pull-ups at the base', type: 'OCR', time: '20-40 min'},
        {id: 7, workout: 'Modified Murph', description: 'For Time: 1 mile run - 10x 10 pull-ups, 20 pushups, 30 squats - 1 mile run', type: 'OCR', time: '40-60 min'},
        {id: 8, workout: 'Hill Repeats 1.0', description: '10 min wamrup - 10x 1 min Hill Climb, 1 min rest - 5 min cooldown', type: 'Running', time: '20-40 min'},
        {id: 9, workout: 'Chop-it-Up 2.0', description: '10 min warmup - 10 min tempo, 3 min rest - 2x 5 min tempo, 2 min rest - 5x 1 min sprint, 1 min rest - 10 min cooldown ', type: 'Running', time: '40-60 min'},
        {id: 10, workout: 'Hold On', description: '10 min warmup - 3x 10 min hard, 90s rest - 10 min cooldown', type: 'Running', time: '40-60 min'},
        {id: 11, workout: 'Progression', description: '20 min easy, 20 min mod, 20 min hard', type: 'Running', time: 'TIME'},
        {id: 12, workout: '5x 1000', description: '5 min warmup - 5x 1000m, rest 2-2.5 min, 5 min cooldown', type: 'TYPE', time: 'TIME'},
        {id: 13, workout: 'Fartleking', description: '10 min warmup - 5x 1 min hard, 5 min mod', type: 'TYPE', time: 'TIME'},
        {id: 14, workout: 'Build-Up', description: '15 min warmup - 1-2-3-4-5-4-3-2-1 min hard, with equal easy interval (1 min hard, 1 min easy, 2 min hard, 2 min easy...)', type: 'TYPE', time: 'TIME'},
        {id: 15, workout: 'Chrissy', description: 'For Time: Alternate between Burpee Tuck Jumps (30-25-20-15-10-5) and KB swings (20-25-30-35-40-45)', type: 'TYPE', time: 'TIME'},
        {id: 16, workout: "8's", description: '8x 8 deadlifts (mod-heavy), 8 burpees, 8 shoulder press(mod-heavy)', type: 'TYPE', time: 'TIME'},
        {id: 17, workout: 'Chelsea', description: "30 min EMOM: 5 pull-ups, 10 push-ups, 15 squats. Workout ends when you can't complete the work in 1 min", type: 'TYPE', time: 'TIME'},
        {id: 18, workout: 'Chipper', description: 'For Time: 50 KB swings, 40 KB goblet lunges, 30 box jumps, 20 pull-ups, 10 burpee box jump overs', type: 'TYPE', time: 'TIME'},
        {id: 19, workout: 'Lunges FTW', description: '3x 20 reverse lunge (weighted), 15 toes 2 air - E2M0M for 10 min: 1 min wall sit, 1 min plank - 4x 10 walking lunges (weighted), 10 burpees', type: 'TYPE', time: 'TIME'},
        {id: 20, workout: 'Uh-Oh', description: 'For Time: 20x 5 squats, 5 push-ups, 5 sit-ups - For Time: 20! Burpees with 20 m walk between rounds (20 burpees, 19, 18,...1', type: 'TYPE', time: 'TIME'},
        {id: 21, workout: 'Have Fun', description: 'For Time: 10x 10 lunges, 10 push-ups - 2x 25 crunches, 50 bicycles, 50 back scratchers, 50 rotating crunches, 25 V-ups - Tabata (8x 20s work 10s rest, do 8 rounds of each individual exercise): push-ups, sit-ups, squats', type: 'TYPE', time: 'TIME'},
      ]);
    });
};
