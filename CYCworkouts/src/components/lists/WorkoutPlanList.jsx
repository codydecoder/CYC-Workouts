import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from '../../global'

/*export default function SearchWorkoutPlans(){

    const [workoutPlans, setWorkoutPlans] = useState([])


    useEffect(() => {
        const getWorkoutPlans = async () => {
            const response = await axios.get(`${BASE_URL}/workoutPlans`)
            console.log(response.data)
            setWorkoutPlans(response.data)
        }
        getWorkoutPlans()
    }, [])

    let navigate = useNavigate()*/

    export default function WorkoutPlanList() {
        const [workoutPlans, setWorkoutPlans] = useState([]);
        
        useEffect(() => {
          const getWorkoutPlans = async () => {
            try {
              const response = await axios.get(`${BASE_URL}/workoutPlans`);
              setWorkoutPlans(response.data);
            } catch (error) {
              console.error("Failed to fetch workout plans:", error);
            }
          };
          getWorkoutPlans();
        }, []);
        
        let navigate = useNavigate();

    const showWorkoutPlan = (key) => {
        navigate(`${key}`)
    }

    if(!workoutPlans) {
        return <h1>LOADING...</h1>

    } else {
        return (
        <div className="workoutPlan-list">
        
            {
                workoutPlans.map((workoutPlan, key) => (
                    <div className="workoutPlan-card" key={workoutPlan._id}>
                        <h3 className="workoutPlan-name">Name: <span className='workoutPlan-name-details'>{workoutPlan.workoutPlanName}</span></h3>
                        <h4 className="workoutPlan-exerciseList">Exercises: <span className='workoutPlan-exerciseList-details'>{workoutPlan.exerciseList}</span></h4>
                        <h4 className="workoutPlan-description">Description: <span className='workoutPlan-description-details'>{workoutPlan.description}</span></h4>
                       </div>
                ))
            }
            <button onClick={() => navigate('../create-workoutPlan')}>Create Workout Plan</button>
        </div>
    )}

}

