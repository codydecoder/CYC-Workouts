const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const WorkoutPlan = new Schema(
    {
        //userId: {type: Schema.Types.ObjectId, ref: 'user_id'},
        workoutPlanName: {type: String, required: true},
        exerciseList: [{type: Schema.Types.ObjectId, ref: 'exercise_id'}],
        description: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = WorkoutPlan
