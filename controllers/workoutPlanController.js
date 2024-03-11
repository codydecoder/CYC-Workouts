const { WorkoutPlan } = require('../models');

const getAllWorkoutPlans = async (req,res) => {
    try {
        const workoutPlans = await WorkoutPlan.find()
        res.json(workoutPlans)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getWorkoutPlanById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const workoutPlans = await WorkoutPlan.findById(id);
        if (workoutPlans) {
            return res.json(workoutPlans);
        }
        return res.status(404).send('Workout Plan not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createWorkoutPlan = async (req, res) => {
    try {
        const workoutPlans = await new WorkoutPlan(req.body);
        await workoutPlans.save();
        return res.status(201).json({workoutPlans,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateWorkoutPlan = async (req, res) => {
    try {
        let { id } = req.params;
        let workoutPlans = await WorkoutPlan.findByIdAndUpdate(id, req.body, { new: true })
        if (workoutPlans) {
            return res.status(200).json(workoutPlans)
        }
        throw new Error("Workout Plan not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteWorkoutPlan = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await WorkoutPlan.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Workout Plan deleted");
        }
        throw new Error("Workout Plan not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllWorkoutPlans,
    getWorkoutPlanById,
    createWorkoutPlan,
    updateWorkoutPlan,
    deleteWorkoutPlan
}
