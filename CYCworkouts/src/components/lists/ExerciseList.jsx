import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../../global'


export default function SearchExercises(){

    const [exercises, setExercises] = useState([])


    useEffect(() => {
        const getExercises = async () => {
            const response = await axios.get(`${BASE_URL}/exercises`)
            console.log(response)
            setRecipes(response.data)
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
                    <li className="exercise-card" key={exercise._id}>
                        <h3 className="exercise-name">Name: <span className='exercise-name-details'>{exercise.exerciseName}</span></h3>
                    </li>
                ))
            }
        
        </div>
    )}

}

