const mongoose = require('mongoose')
const UserSchema = require('./user')
const WorkoutPlanSchema = require('./workoutplan')
const ExerciseSchema = require('./exercise')

const User = mongoose.model('User', UserSchema)
const WorkoutPlan = mongoose.model('WorkoutPlan', WorkoutPlanSchema)
const Exercise = mongoose.model('Exercise', ExerciseSchema)

module.exports = {
    User,
    WorkoutPlan,
    Exercise
}