import React from 'react'
import WorkoutCard from './WorkoutCard'
import { WorkoutsData } from '../WorkoutsData'

const WorkoutCards = () => {
    return (
        <section className='flex flex-wrap justify-between md:mt-24'>    
        {
            WorkoutsData.map((workout) => {                
                return(                    
                    <WorkoutCard key={workout.title} workout={workout}/>  
                )
            })
        }                          
        </section>
    )
}

export default WorkoutCards