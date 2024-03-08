const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const User = new Schema(
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
        savedWorkoutPlans: [{type: Schema.Types.ObjectId, ref: 'workoutPlan_id'}],
        savedExercises: [{type: Schema.Types.ObjectId, ref: 'exercise_id'}]
    },
    {timestamps: true}
)

module.exports = User
