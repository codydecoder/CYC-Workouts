const db = require('../db')
const { User, WorkoutPlan, Exercise } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  //const livingRoom = await FurnSpace.find({spaceName: 'Living Room'})
  
  const exercises = [
    {

    },  
  ]
 

  await Exercise.insertMany(exercises)

  console.log('Created exercises!')
}

const run = async () => {
  await main()
  db.close()
}

run()