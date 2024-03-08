const db = require('../db')
const { User, WorkoutPlan, Exercise } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  //const cannedTunaFishSalad = await Recipe.find({recipeName: 'Canned Tuna Fish Salad'})
  //const coffee = await Food.find({foodName: 'Coffee'})

  const users = [
    {
      username: `coderdecoder`,
      password: 'getBig1000',
      savedWorkoutPlans: [

      ],
      savedExercises: [

      ]
    },
    {
      username: `whoever11`,
      password: 'password11',
      savedWorkoutPlans: [

      ],
      savedExercises: [

      ]
    },
    {
      username: `yanitdm18`,
      password: 'password18',
      savedWorkoutPlans: [

      ],
      savedExercises: [

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