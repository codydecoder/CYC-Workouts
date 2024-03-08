const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Exercise = new Schema(
    {
        exerciseName: {type: String, required: true},
        musclesTargeted: [{type: String, required: true}],
        reps: {type: Number, required: true},
        sets: {type: Number, required: true},
        weight: {type: Number, required: true},
        //time: {type: Number, required: true}, //stretch goal
        instructions: {type: string, required: true},
        videoLink: {type: string, required: true}
    },
    {timestamps: true}
)

module.exports = Exercise
