const express = require('express') //express
const logger = require('morgan') //morgan
const bodyParser = require('body-parser')
const db = require('./db') //db
const cors = require('cors') //cors

const exerciseController = require('./controllers/exerciseController')
const workoutPlanController = require('./controllers/workoutPlanController')
const userController = require('./controllers/userController')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(express.json())

app.use(logger('dev'))
app.use(bodyParser.json())


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))



app.get('/', (req, res) => res.send('This is our landing page!'))
//exercise controllers
app.get('/exercises', exerciseController.getAllExercises)
app.get('/exercises/:id', exerciseController.getExerciseById)
app.post('/exercises', exerciseController.createExercise)
app.put('/exercises/:id', exerciseController.updateExercise)
app.delete('/exercises/:id', exerciseController.deleteExercise)
//workoutPlan controllers
app.get('/workoutPlans', workoutPlanController.getAllWorkoutPlans)
app.get('/workoutPlans/:id', workoutPlanController.getWorkoutPlanById)
app.post('/workoutPlans', workoutPlanController.createWorkoutPlan)
app.put('/workoutPlans/:id', workoutPlanController.updateWorkoutPlan)
app.delete('/workoutPlans/:id', workoutPlanController.deleteWorkoutPlan)
//user controllers
app.get('/users', userController.getAllUsers)
app.get('/users/:id', userController.getUserByUsername)
app.get('/users/:id/exercises', userController.getExercisesByUserId)//get user exercises
app.get('/users/:id/workoutPlans', userController.getWorkoutPlansByUserId)//get user workoutPlans
app.post('/users', userController.createUser)
app.put('/users/:id', userController.updateUser)
app.delete('/users/:id', userController.deleteUser)

