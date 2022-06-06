import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const WorkoutCardHeader = ({ heading }) => {
    return (
        <div className='flex justify-between pb-3'>
            <h1 className='text-2xl underline md:text-3xl'>{heading}</h1>
            <div className='flex pt-2'>
                <BsThreeDots size={25} />
            </div>
        </div>
    )
}

export default WorkoutCardHeader