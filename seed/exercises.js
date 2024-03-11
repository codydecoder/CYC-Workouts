const db = require('../db')
const { User, WorkoutPlan, Exercise } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  const exercises = [
    {
      exerciseName: 'Bicep Curl',
      musclesTargeted: [
        'Biceps'
      ],
      reps: 12,
      sets: 4,
      weight: 20,
      instructions: 'Start with dumbell in hand and arm straight, lift dumbell towards shoulder by bending at elbow. Pause at top, then slowly lower dumbell back down until arm is straight.',
      videoLink: `fake.com`
    },
    {
      exerciseName: 'Tricep Extension',
      musclesTargeted: [
        'Triceps'
      ],
      reps: 12,
      sets: 4,
      weight: 20,
      instructions: 'Start by leaning against something so your body tilts forward, bend at the elbow and lift it straight back until it is parallel with the ground. Extend your arm and lift the weight in your hand until your arm is straight, pause for a moment, then lower weight back to start.',
      videoLink: `fake.com`
    },
    {
      exerciseName: 'Squat',
      musclesTargeted: [
        'Glutes',
        'Quadriceps',
        'Hamstrings',
        'Gastrocnemus'
      ],
      reps: 10,
      sets: 4,
      weight: 40,
      instructions: 'Start with legs shoulder-width apart, slowly bend at the knees and hips to lower your hips/center of gravity until your knees reach around 90 degrees of bend, pause for a moment, then straighten legs and stand back up.',
      videoLink: `fake.com`
    },
    {
      exerciseName: 'Calf Raise',
      musclesTargeted: [
        'Gastrocnemus',
        'Soleus'
      ],
      reps: 15,
      sets: 4,
      weight: 40,
      instructions: 'Hold weight in hands and raise your body onto your toes, pause at the top while remaining in control of your balance, the slowly lower back to starting position.',
      videoLink: `fake.com`
    },
    {
      exerciseName: 'Hip Abductor',
      musclesTargeted: [
        'Glute minimus',
        'Glute medius',
        'Tensor fasciae latae'
      ],
      reps: 15,
      sets: 3,
      weight: 5,
      instructions: 'Lie down on side with hips straight and top leg in-line with body. Attach weight to ankle, with leg straight lift ankle laterally to about 45 degrees, pause at top, then lower to neutral without touching floor or your body.',
      videoLink: `fake.com`
    },
    {
      exerciseName: 'Guided Quad Extension',
      musclesTargeted: [
        'Quadriceps',
        'Vastus Medialis(VMO)'
      ],
      reps: 10,
      sets: 4,
      weight: 5,
      instructions: `Sit with legs dangling over an edge, attach weight to ankle. With strong leg, place ankle below weak leg's ankle and assist leg in lifting weight to full leg extension, remove strong leg from below weak leg and pause at top for 10 seconds, then slowly lower weak leg back to neutral position.`,
      videoLink: `fake.com`
    }
  ]
 

  await Exercise.insertMany(exercises)

  console.log('Created exercises!')
}

const run = async () => {
  await main()
  db.close()
}

run()