import React from 'react'

const Exercise = ({ exercise }) => {
    return (
        <div className='flex justify-between pb-2 mt-2 border-b-2 border-b-cardDivider'>
            <div>
                <div className='flex'>
                    <h1 className='text-lg'>{exercise.name}</h1>
                    <span className='pt-[1px] pl-1'>
                        {exercise.icon}
                    </span>
                </div>
                <p className='text-sm text-PRcolor'>PR: {exercise.personal_record} lbs</p>

            </div>
            <p className='pt-1 text-xs md:text-sm'>
                {exercise.sets}S/{exercise.reps}R @ {exercise.weight_PP} lbs
            </p>
        </div>
    )
}

export default Exercise