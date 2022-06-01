import React from 'react'
import ExercisesList from './ExercisesList'
import WorkoutCardHeader from './WorkoutCardHeader'

const WorkoutCard = ({ workout }) => {        
    return (
        <>
            <div className='w-[400px] bg-WorkoutCardBG rounded-md py-3 px-4 mb-6'>
                <WorkoutCardHeader heading={workout.title}/>
                <ExercisesList exercises={workout.exercises}/>
            </div>
        </>
    )
}

export default WorkoutCard