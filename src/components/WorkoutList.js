import React from 'react'
import WorkoutCard from './cards/WorkoutCard'
import { WorkoutsData } from './static_comp_data/WorkoutsData'

const WorkoutList = () => {
    return (
        <section className='pt-14'>
            <div className='flex flex-wrap justify-between'>
                {
                    WorkoutsData.map((workout) => {
                        return (
                            <WorkoutCard key={workout.title} workout={workout} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default WorkoutList