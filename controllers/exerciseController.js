const { Exercise } = require('../models');

const getAllExercises = async (req,res) => {
    try {
        const exercises = await Exercise.find()
        res.json(exercises)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getExerciseById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const exercises = await Exercise.findById(id);
        if (exercises) {
            return res.json(exercises);
        }
        return res.status(404).send('Exercise not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createExercise = async (req, res) => {
    try {
        const exercises = await new Exercise(req.body);
        await exercises.save();
        return res.status(201).json({exercises,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateExercise = async (req, res) => {
    try {
        let { id } = req.params;
        let exercises = await Exercise.findByIdAndUpdate(id, req.body, { new: true })
        if (exercises) {
            return res.status(200).json(exercises)
        }
        throw new Error("Exercise not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteExercise = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Exercise.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Exercise deleted");
        }
        throw new Error("Exercise not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllExercises,
    getExerciseById,
    createExercise,
    updateExercise,
    deleteExercise
}