import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../../global'

export default function SearchExercises(){

    const [exercises, setExercises] = useState([])


    useEffect(() => {
        const getExercises = async () => {
            const response = await axios.get(`${BASE_URL}/exercises`)
            console.log(response.data)
            setExercises(response.data)
        }
        getExercises()
    }, [])

    let navigate = useNavigate()

    const showExercise = (key) => {
        navigate(`${key}`)
    }

    if(!exercises) {
        return <h1>LOADING...</h1>

    } else {
        return (
        <div className="exercise-list">
        
            {
                exercises.map((exercise, key) => (
                    <div className="exercise-card" key={exercise._id}>
                        <h3 className="exercise-name">Name: <span className='exercise-name-details'>{exercise.exerciseName}</span></h3>
                        <h4 className="exercise-reps">Reps: <span className='exercise-reps-details'>{exercise.reps}</span></h4>
                        <h4 className="exercise-sets">Sets: <span className='exercise-sets-details'>{exercise.sets}</span></h4>
                        <h4 className="exercise-weight">Reps: <span className='exercise-weight-details'>{exercise.weight}</span></h4>
                        <h4 className="exercise-video" >Video Link: <span className="exercise-videoLink-details">{exercise.videoLink}</span></h4>
                    </div>
                ))
            }
            <button onClick={() => navigate('../create-exercise')}>Create Exercise</button>
        </div>
    )}

}

