const db = require('../db')
const { User, WorkoutPlan, Exercise } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  //const cannedTuna = await Food.find({foodName: 'Canned Tuna'})
  //console.log(cannedTuna)

  const workoutPlans = [
    {

    },
    /*{
      recipeName: 'Canned Tuna Fish Salad',
      foodList: [
        cannedTuna[0]._id,
        celery[0]._id,
        onion[0]._id,
        mayo[0]._id,
        yogurt[0]._id,
      ],
    }*/
  ]
 

  await WorkoutPlan.insertMany(workoutPlans)

  console.log('Created workout plans!')
}

const run = async () => {
  await main()
  db.close()
}

run()