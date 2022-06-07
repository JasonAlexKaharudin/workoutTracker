import React from 'react'
import WorkoutCard from './WorkoutCard'
import { WorkoutsData } from '../static_comp_data/WorkoutsData'

const WorkoutCards = () => {
    return (
        <section className='flex flex-wrap justify-between mt-10 mb-32 md:mt-16'>    
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