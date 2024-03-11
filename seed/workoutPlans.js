const db = require('../db')
const { User, WorkoutPlan, Exercise } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  //const cannedTuna = await Food.find({foodName: 'Canned Tuna'})
  //console.log(cannedTuna)

  //users
  const cody = await User.find({username:'coderdecoder'})
  const cj = await User.find({username: 'whoever11'})
  const yanit = await User.find({username: 'yanitdm18'})

  //exercises
  const bicepCurl = await Exercise.find({exerciseName: 'Bicep Curl'})
  const tricepExtension = await Exercise.find({exerciseName: 'Tricep Extension'})
  const squat = await Exercise.find({exerciseName: 'Squat'})
  const calfRaise = await Exercise.find({exerciseName: 'Calf Raise'})
  const hipAbductor = await Exercise.find({exerciseName: 'Hip Adbuctor'})
  const guidedQuadExtension = await Exercise.find({exerciseName: 'Guided Quad Extension'})

  

  const workoutPlans = [
    {
      //userId: cody._id,
      workoutPlanName: 'Knee PT',
      exerciseList: [
        hipAbductor._id,
        guidedQuadExtension.exercise_id,
      ],
      description: `Physical therapy for ACL recovery`
    },
    {
      //userId: cj._id,
      workoutPlanName: 'Arm Day',
      exerciseList: [
        bicepCurl[0]._id,
        tricepExtension[0]._id,
      ],
      description: `Arm workout`
    },
    {
      //userId: yanit._id,
      workoutPlanName: 'Legs',
      exerciseList: [
        squat[0]._id,
        calfRaise[0]._id,
      ],
      description: `Leg exercises for leg day`
    }
  ]
 

  await WorkoutPlan.insertMany(workoutPlans)

  console.log('Created workout plans!')
}

const run = async () => {
  await main()
  db.close()
}

run()