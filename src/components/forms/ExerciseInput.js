import React, { useState } from 'react';
import { IoRemoveCircleOutline } from 'react-icons/io5';
import SetInput from './SetInput';

const ExerciseInput = ({ setExerciseName }) => {
    const [exerciseType, setExerciseType] = useState('Weighted');
    const [numSets, setNumSets] = useState([]);

    const onAddSet = (e) => {
        e.preventDefault();
        setNumSets(numSets.concat(<SetInput key={numSets.length} exerciseType={exerciseType} numSets={numSets}/>))
    }

    const handleRemove = (e) => {
        e.preventDefault();
        console.log("remove me");
    }

    return (
        <div className='flex flex-col'>
            <div className="flex flex-col pb-6">
                <label className="mt-2 mb-2">Exercise</label>

                <div className='flex flex-wrap'>
                    <input
                        className="w-5/12 px-3 py-2 leading-tight text-gray-700 rounded appearance-none md:w-auto drop-shadow-md focus:outline-none focus:shadow-outline"
                        placeholder='Bench Press'
                        type="text"
                        onChange={(e) => (setExerciseName(e.target.value))}
                    />
                    <div className='flex pl-4 justify-evenly'>
                        <div className='pt-2 text-sm md:pt-0'>
                            <select className='px-3 py-2 font-light rounded drop-shadow-md focus:outline-none' onChange={(e) => (setExerciseType(e.target.value))}>
                                <option value={'Weighted'}>Weighted</option>
                                <option value={'Time'}>Time</option>
                            </select>
                        </div>
                        <div className='pt-2 pl-3'>
                            <button onClick={handleRemove}>
                                <span>
                                    <IoRemoveCircleOutline color='red' size={23} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {numSets}

            <div className='pb-5'>
                <button
                    id='addSetBtn'
                    className="px-4 py-2 rounded bg-sky-400 focus:outline-none focus:shadow-outline"
                    onClick={onAddSet}
                >
                    +Set
                </button>
            </div>
        </div>
    )
}
export default ExerciseInput;