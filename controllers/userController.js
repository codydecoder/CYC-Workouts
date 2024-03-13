const { User, Exercise, WorkoutPlan } = require('../models')


const getAllUsers = async (req,res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getUserByUsername = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const user = await User.findOne({ username: id })

             .populate('savedWorkoutPlans')
             .populate('savedExercises')

        if (user) {
            return res.json(user);
        }
        return res.status(404).send('User not found!')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getExercisesByUserId = async (req, res) => {
    try {
        const { id } = req.params
        const exercises = await Exercise.find({ user: id })
        res.json(exercises)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getWorkoutPlansByUserId = async (req, res) => {
    try {
        const { id } = req.params
        const workoutPlans = await WorkoutPlan.find({ user: id })
        res.json(workoutPlans)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body // Changed here to get the username from the request body
        const user = new User({ username, password }) // Create a new user with the username
        await user.save();
        return res.status(201).json({ user })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateUser = async (req, res) => {
    try {
        let { id } = req.params
        let users = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (users) {
            return res.status(200).json(users)
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("User deleted")
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllUsers,
    getUserByUsername,
    createUser,
    updateUser,
    deleteUser,

    getExercisesByUserId,
    getWorkoutPlansByUserId
}