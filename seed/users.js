const db = require('../db')
const { User, WorkoutPlan, Exercise } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  //workout plans
  const kneePt = await WorkoutPlan.find({workoutPlanName: 'Knee PT'})
  const armDay = await WorkoutPlan.find({workoutPlanName: 'Arm Day'})
  const legs = await WorkoutPlan.find({workoutPlanName: 'Legs'})
  //exercises
  const squat = await Exercise.find({exerciseName: 'Squat'})
  const triceps = await Exercise.find({exerciseName: 'Tricep Extension'})
  const hips = await Exercise.find({exerciseName: 'Hip Abductor'})

  const users = [
    {
      username: `coderdecoder`,
      password: 'getBig1000',
      savedWorkoutPlans: [
        kneePt[0]._id
      ],
      savedExercises: [
        triceps[0]._id
      ]
    },
    {
      username: `whoever11`,
      password: 'password11',
      savedWorkoutPlans: [
        armDay[0]._id
      ],
      savedExercises: [
        squat[0]._id
      ]
    },
    {
      username: `yanitdm18`,
      password: 'password18',
      savedWorkoutPlans: [
        legs[0]._id
      ],
      savedExercises: [
        hips[0]._id
      ]
    }
  ]
 

  await User.insertMany(users)

  console.log('Created users!')
}

const run = async () => {
  await main()
  db.close()
}

run()