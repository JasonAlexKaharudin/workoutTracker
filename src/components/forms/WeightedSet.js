import React from 'react';
import { IoRemoveCircleOutline } from 'react-icons/io5';

const WeightedSet = ({ idx, setData ,handleExerciseDataChange, dimensions }) => {
    return (
        <div className='grid grid-cols-7 gap-3'>

            <div className="flex flex-col justify-end col-span-2 pb-4 md:col-span-1">
                <label className="mt-2 mb-2">lbs <span className='font-light text-[10px]'>pp</span> </label>
                <input
                    name='weight_PP'
                    className="px-3 py-2 leading-tight text-gray-700 rounded appearance-none drop-shadow-md focus:outline-none focus:shadow-outline"
                    placeholder='40'
                    type="number"
                    value={setData.weight_PP}
                    onChange={e => handleExerciseDataChange(idx, e)}
                />
            </div>

            <div className="flex flex-col justify-end col-span-2 pb-4 md:col-span-1">
                <label className="mt-2 mb-2">Reps</label>
                <input
                    name='reps'
                    className="px-3 py-2 leading-tight text-gray-700 rounded appearance-none drop-shadow-md focus:outline-none focus:shadow-outline"
                    placeholder='12'
                    type="number"
                    value={setData.reps}
                    onChange={e => handleExerciseDataChange(idx, e)}
                />
            </div>

            <button className='pt-5'>
                <span>
                    {
                        dimensions.width > 768 ? <IoRemoveCircleOutline color='red' size={23} /> : <IoRemoveCircleOutline color='red' size={15} />
                    }
                </span>
            </button>
        </div>
    )
}

export default WeightedSet