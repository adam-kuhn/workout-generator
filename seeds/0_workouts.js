exports.seed = function (knex, Promise) {
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
        {id: 6, workout: 'Hill Assualt 1.0', description: "AMRAP: 1 hill climb (60-90s), 10 push-ups at the top, 10 pull-ups at the base'", type: 'OCR', time: '20-40 min'},
        {id: 7, workout: 'Modified Murph', description: 'For Time: 1 mile run - 10x 10 pull-ups, 20 pushups, 30 squats - 1 mile run', type: 'OCR', time: '40-60 min'},
        {id: 8, workout: 'Hill Repeats 1.0', description: '10 min wamrup - 10x 1 min Hill Climb, 1 min rest - 5 min cooldown', type: 'Running', time: '20-40 min'},
        {id: 9, workout: 'Chop-it-Up 2.0', description: '10 min warmup - 10 min tempo, 3 min rest - 2x 5 min tempo, 2 min rest - 5x 1 min sprint, 1 min rest - 10 min cooldown', type: 'Running', time: '40-60 min'},
        {id: 10, workout: 'Hold On', description: '10 min warmup - 3x 10 min hard, 90s rest - 10 min cooldown', type: 'Running', time: '40-60 min'},
        {id: 11, workout: 'Progression', description: '20 min easy, 20 min mod, 20 min hard', type: 'Running', time: '40-60 min'},
        {id: 12, workout: '5x 1000', description: '5 min warmup - 5x 1000m, rest 2-2.5 min, 5 min cooldown', type: 'Running', time: '20-40 min'},
        {id: 13, workout: 'Fartleking', description: '10 min warmup - 5x 1 min hard, 5 min mod', type: 'Running', time: '20-40 min'},
        {id: 14, workout: 'Build-Up', description: '15 min warmup - 1-2-3-4-5-4-3-2-1 min hard, with equal easy interval (1 min hard, 1 min easy, 2 min hard, 2 min easy...)', type: 'Running', time: '>60 min'},
        {id: 15, workout: 'Chrissy', description: 'For Time: Alternate between Burpee Tuck Jumps (30-25-20-15-10-5) and KB swings (20-25-30-35-40-45)', type: 'Strength', time: '0-20 min'},
        {id: 16, workout: "8's", description: '8x 8 deadlifts (mod-heavy), 8 burpees, 8 shoulder press(mod-heavy)', type: 'Strength', time: '20-40 min'},
        {id: 17, workout: 'Chelsea', description: "30 min EMOM: 5 pull-ups, 10 push-ups, 15 squats. Workout ends when you can't complete the work in 1 min", type: 'Strength', time: '20-40 min'},
        {id: 18, workout: 'Chipper', description: 'For Time: 50 KB swings, 40 KB goblet lunges, 30 box jumps, 20 pull-ups, 10 burpee box jump overs', type: 'Strength', time: '0-20 min'},
        {id: 19, workout: 'Lunges FTW', description: '3x 20 reverse lunge (weighted), 15 toes 2 air - E2M0M for 10 min: 1 min wall sit, 1 min plank - 4x 10 walking lunges (weighted), 10 burpees', type: 'Strength', time: '40-60 min'},
        {id: 20, workout: 'Uh-Oh', description: 'For Time: 20x 5 squats, 5 push-ups, 5 sit-ups - For Time: 20! Burpees with 20 m walk between rounds (20 burpees, 19, 18,...1', type: 'Strength', time: '20-40 min'},
        {id: 21, workout: 'Have Fun', description: 'For Time: 10x 10 lunges, 10 push-ups - 2x 25 crunches, 50 bicycles, 50 back scratchers, 50 rotating crunches, 25 V-ups - Tabata (8x 20s work 10s rest, do 8 rounds of each individual exercise): push-ups, sit-ups, squats', type: 'Strength', time: '20-40 min'},
        {id: 22, workout: 'Boxless', description: 'For Time: 50kb swing, 40 kb goblet lunges, 30 squat jumps, 20 pull ups, 10 burpees', type: 'Strength', time: '0-20 min'},
        {id: 23, workout: 'Leg Day', description: '3x 20 Reverse Lunge (barbell), 15 toes 2 air - E2MOM for 10 min: 1 min wall sit, 1 min plank - 4x 10 step ups (KB), 10 burpee box jump overs', type: 'Strength', time: '40-60 min'},
        {id: 24, workout: 'Strong Legs', description: '3x 20 Reverse Lunge (KB), 15 toes 2 air - E2MOM for 10 min: 1 min wall sit, 1 min plank - 4x 10 step ups (KB), 10 burpee box jump overs', type: 'Strength', time: '40-60 min'},
        {id: 25, workout: 'HuMan Up', description: 'For Time: 21-15-9 manmakers, pull-ups, burpees', type: 'Strength', time: '0-20 min'},
        {id: 26, workout: 'Hit the deck-3.0', description: 'Repeat for time: 1 mile run, 20 push-ups, 20 crunches, 20 squats', type: 'OCR', time: '40-60 min'},
        {id: 27, workout: 'Pushamid-3.0', description: 'Run for desired duration. E5MOM do 5 push-ups. Add 5 push-ups each time. Once unable to do the push-ups unbroken, run 10 min, then E5M0M back down to 0', type: 'OCR', time: '40-60 min'},
        {id: 28, workout: 'Hawaiian-3.0', description: 'Run for desired duration. Every km, 10 push-ups, 10 burpees, 5 pull-ups, 10 squats', type: 'OCR', time: '40-60 min'},
        {id: 29, workout: 'Hill Assualt-2.0', description: 'AMRAP: 1 hill climb (60-90s), 10 push-ups at the top, 10 pull ups at the bottom', type: 'OCR', time: '40-60 min'},
        {id: 30, workout: 'Run & Burpee', description: '10x - run 1 km, 30 burpees', type: 'OCR', time: '>60 min'},
        {id: 31, workout: 'Murph', description: 'For Time: 1 mile run, 100 pull ups, 200 push-ups, 300 squats, 1 mile run', type: 'OCR', time: '40-60 min'},
        {id: 32, workout: 'Hill Repeats-2.0', description: '15 min warm up, 10x 1 min Hill Climb - 1 min rest, 10 min cool down', type: 'Running', time: '40-60 min'},
        {id: 33, workout: 'Hill Sprints-2.0', description: '15 min warm up, 7x 85s hill sprint - 2 min rest, 10 min cool down', type: 'Running', time: '40-60 min'},
        {id: 34, workout: 'Hill Breakdown-2.0', description: '10 min warm up, 3x 3 min hill, 3x 2 min hill, 3x 1 min hill, 10 min cool down', type: 'Running', time: '40-60 min'},
        {id: 35, workout: 'Quick Tempo-3.0', description: '15 min warm up, 25 min tempo pace, 10 min cool down', type: 'Running', time: '40-60 min'},
        {id: 36, workout: 'Long Hill', description: '10 min warm up, 3x 2 km hill - 2 min rest, 5 min cool down', type: 'Running', time: '40-60 min'},
        {id: 37, workout: 'Tempo-Hill 2', description: '15 min warm up, 3 km tempo, 5x 1 min hill repeats, 10 min cool down', type: 'Running', time: '40-60 min'},
        {id: 38, workout: 'Short Progression-2.0', description: '10 min warm up, 10 min easy, 10 min mod, 10 min hard, 10 min cool down', type: 'Running', time: '40-60 min'},
        {id: 39, workout: "1000's", description: '10 min warm up, 5x 1000 m repeats - rest 2:00-2:30, 10 min cool down', type: 'Running', time: '40-60 min'},
        {id: 40, workout: 'Fartlek', description: '10 min warm up, 7x 1 min hard - 6 min mod', type: 'Running', time: '40-60 min'},
        {id: 41, workout: 'Speed Play', description: '15 min warm up, 5x 1 min hard - 1 min easy, 5 min easy, 5x 1 min hard - 1 min easy, 10 min cool down', type: 'Running', time: '40-60 min'},
        {id: 42, workout: 'Fast 3', description: '15 min warm up, 1x 1000 m hard - 2 min rest, 2x 500 m hard - 90s rest, 5x 200 m hard - 60s rest, 10 min cool down', type: 'Running', time: '40-60 min'},
        {id: 43, workout: "Faye's Hills", description: '10 min warm up, 6x 1-2 min hill followed by 600-800 m hard flat running at the top, 10 min cool down ', type: 'Running', time: '40-60 min'},
        {id: 44, workout: 'Finishing Kick', description: '15 min warm up, 4x 1000 m hard - 30s rest - 200 m hard - rest 2:30, 10 min cool down ', type: 'Running', time: '40-60 min'},
        {id: 45, workout: 'Fartlek-amid', description: '10 min warm up, 1-2-3-4-5-4-3-2-1 min hard with equal rest (1 min hard, 1 min easy, 2 min hard, 2 min easy..etc.,)', type: 'Running', time: '40-60 min'},
        {id: 46, workout: 'Fast like Faye', description: '10 min warm up, 1-2-3-4-5-4-3-2-1 min hard with half the rest (1 min hard, 30s easy, 2 min hard, 1 min easy..etc.,),5 min cool down', type: 'Running', time: '40-60 min'},
        {id: 47, workout: 'Bucket Ready', description: '4x 20 Front Rack Lunges(105 lbs), 3x 20 back extensions - 60s plank, 2x 20 KB step ups - 20 KB clean pull', type: 'Strength', time: '40-60 min'},
        {id: 48, workout: 'Leg Day - Boxless', description: '3x 20 Reverse Lunge (95 lbs) - 15 toes 2 air, E2MOM for 10 min: 1 mil wall sit - 1 mil plank, 4x 10 walking lunges (25 lb) - 10 burpees', type: 'Strength', time: '40-60 min'},
        {id: 49, workout: 'BW Legs', description: '3x 20 Reverse Lunge - 15 toes 2 air, E2MOM for 10 min: 1 min wall sit - 1 min plank, 4x 10 step ups - 10 burpees', type: 'Strength', time: '40-60 min'},
        {id: 50, workout: 'Hit the Deck-1.0', description: 'Repeat for time: 1 mile run, 20 push-ups, 20 crunches, 20 squats', type: 'OCR', time: '0-20 min'},
        {id: 51, workout: 'Hawaiian-1.0', description: 'Run for desired duration. Every km, 10 push ups, 10 burpees, 5 pull-ups, 10 squats', type: 'OCR', time: '0-20 min'},
        {id: 52, workout: '400 Lunge & Squat', description: '25 min AMRAP: 400 m run, 12 Overhead weighted lunges, 12 KB swings', type: 'OCR', time: '20-40 min'},
        {id: 53, workout: '15x15 A', description: 'Repeat for desired duration: 15 min run, 15 burpees', type: 'OCR', time: '20-40 min'},
        {id: 54, workout: 'Hit the deck-2.0', description: 'Repeat for desired duration: run 1 mile, 20 push ups, 20 crunches, 20 squats', type: 'OCR', time: '20-40 min'},
        {id: 55, workout: 'JayMan', description: '5x run 1 km, 30 burpees', type: 'OCR', time: '20-40 min'},
        {id: 56, workout: 'Singled Out', description: '10 min warm up, 10x 1 min hill climb hard - 10 burpees - jog down/rest, 5 min cool down', type: 'OCR', time: '20-40 min'},
        {id: 57, workout: 'Hill Sprints-1.0', description: '10 min warm up, 7x 85s hill sprint, 2 min rest, 5 min cool down', type: 'Running', time: '20-40 min'},
        {id: 58, workout: 'Hill Breakdown-1.0', description: '10 min warm up, 3x 3 min hill, 3x 2 min hill, 3x 1 min hill', type: 'Running', time: '20-40 min'},
        {id: 59, workout: 'Quick Tempo', description: '10 min warm up, 20 min tempo pace, 5 min cool down', type: 'Running', time: '20-40 min'},
        {id: 60, workout: '5K Tempo', description: '10 min warm up, run 5 km at tempo pace, 5-10 min cool down', type: 'Running', time: '20-40 min'},
        {id: 61, workout: 'Quick Tempo-2.0', description: '10 min warm up, 25 min tempo pace, 5 min cool down', type: 'Running', time: '20-40 min'},
        {id: 62, workout: 'Temp-Hill 1', description: '10 min warm up, 3 km tempo pace, 5x 1 min hill repeats, 5 min cool down', type: 'Running', time: '20-40 min'},
        {id: 63, workout: 'Short Progression', description: '5 min warm up, 10 min easy, 10 min mod, 10 min hard, 5 min cool down', type: 'Running', time: '20-40 min'},
        {id: 64, workout: '3KM Breakdown', description: '10 min warm up, 1x 1000 m hard - 2 min rest, 2x 500 m hard - 90s rest, 5x 200 m hard - 60s rest, 5 min cool down', type: 'Running', time: '20-40 min'},
        {id: 65, workout: "Child's Play", description: '10 min warm up, 4x 1-2 min hill followed by 600-800 m of flat running at the top, 5 min cool down', type: 'Running', time: '20-40 min'},
        {id: 66, workout: 'Kick it Up', description: '10 min warm up, 3x 1000 m hard - 30s rest - 200 m hard - 2:30 rest, cool down 5 min', type: 'Running', time: '20-40 min'},
        {id: 67, workout: '15x15 C', description: 'Repeat for desired duration: 15 min run, 15 burpees', type: 'OCR', time: '>60 min'},
        {id: 68, workout: 'Pushamid-4.0', description: 'Run for desired duration. E5MOM do 5 push-ups. Add 5 push-ups each time. Once unable to do the push-ups unbroken, run 10 min, then E5M0M back down to 0', type: 'OCR', time: '>60 min'},
        {id: 69, workout: 'Hawaiian-4.0', description: 'Run for desired duration. Every km, 10 push ups, 10 burpees, 5 pull ups, 10 squats. Add 5 push-ups each time.', type: 'OCR', time: '>60 min'},
        {id: 70, workout: 'Hill Assault-3.0', description: 'AMRAP: 1 min hill climb (60-90s), 10 push ups at the top, 10 pull ups at the base', type: 'OCR', time: '>60 min'},
        {id: 71, workout: "Cwy's Special - Bonus", description: '10 min warm up, 50 min AMRAP: 100 m hill sprint - sandbag/bucket carry up the hill - 10 pull ups - 10 push ups - 100 m hill sprint - 10 sandbag squats - 250 m run - 10 squat jumps - 15 burpees. Then: 3x 10 toes2bar - deadhang to failure - 2 min plank', type: 'OCR', time: '>60 min'},
        {id: 72, workout: "Cwy's Special - Bonus(box)", description: '10 min warm up, 50 min AMRAP: 100 m hill sprint - sandbag/bucket carry up the hill - 10 pull ups - 10 push ups - 100 m hill sprint - 10 sandbag squats - 250 m run - 10 box jumps - 15 burpees. Then: 3x 10 toes2bar - deadhang to failure - 2 min plank', type: 'OCR', time: '>60 min'},
        {id: 73, workout: 'JayMan XL', description: '15x run 1 km, 30 burpees', type: 'OCR', time: '>60 min'},
        {id: 74, workout: 'Hold On-XL', description: '25 min warm up, 3x 10 min hard, 90s rest, 25 min cool down', type: 'Running', time: '>60 min'},
        {id: 75, workout: 'Long Hill', description: '15 min warm up, 3x 2 km hill - 2 min rest, 10 min cool down', type: 'Running', time: '>60 min'},
        {id: 76, workout: 'Progression 2.0', description: '15 min warm up, 20 min easy, 20 min mod, 20 min hard, 10 min cool down', type: 'Running', time: '>60 min'},
        {id: 77, workout: 'Long Progression', description: '30 min easy, 30 min mod, 30 min hard, 10 min cool down', type: 'Running', time: '>60 min'},
        {id: 78, workout: 'Long Fartlek', description: '15 min warm up, 10x 1 min hard, 6 min mod', type: 'Running', time: '>60 min'},
        {id: 79, workout: 'Spartan KB', description: '5 Rounds: 200 m run - 2x KB clean and press (each side) - 5x Goblet Squat - 20 KB swings - rest 2 min', type: 'OCR', time: '0-20 min'},
        {id: 80, workout: 'Farmer Squat', description: '5 Rounds: suit case carry 20 m (left hand) - 1 x front squat - 20 m carry (left hand) - 2x front squat - 20 m carry - 3x front squat, repeat with right arm. 1 round = left and right arm', type: 'OCR', time: '0-20 min'},
        {id: 81, workout: 'One Arm Swing', description: '10 Rounds: 30s one armed KB swing (left) - 30s rest - 30s one armed KB swing (right) - 30s rest', type: 'OCR', time: '0-20 min'}
      ])
    })
}
