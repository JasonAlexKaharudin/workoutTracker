import React, { useState } from 'react';
import { IoRemoveCircleOutline } from 'react-icons/io5';

const Set = () => {
    const handleRemove = (e) => {
        e.preventDefault();
        console.log("remove me");
    }

    return (
        <div className='grid grid-cols-6 gap-3'>
            <div className="flex flex-col justify-end col-span-2 pb-10">
                <label className="mt-2 mb-2">lbs</label>
                <input
                    className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder='40'
                    type="number"
                />
            </div>
            <div className="flex flex-col justify-end col-span-2 pb-10">
                <label className="mt-2 mb-2">Reps</label>
                <input
                    className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder='12'
                    type="number"
                />
            </div>
            <button className='' onClick={handleRemove}>
                <span>
                    <IoRemoveCircleOutline color='red' size={35} />
                </span>
            </button>
        </div>
    )
}

const Input = () => {
    const [numSets, setNumSets] = useState([]);
    
    const onAddSet = (e) => {
        e.preventDefault();
        setNumSets(numSets.concat(<Set key={numSets.length} />))
    }

    return (
        <div className='flex flex-col'>
            <div className="flex flex-col col-span-3 pb-4">
                <label className="mt-2 mb-2">Exercise</label>
                <input
                    className="px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    placeholder='Bench Press'
                    type="text"
                />
            </div>

            {numSets}

            <div className='pb-5'>
                <button
                    id='addSetBtn'
                    className="px-4 py-2 font-bold rounded bg-sky-400 focus:outline-none focus:shadow-outline"
                    onClick={onAddSet}
                >
                    +Set
                </button>
            </div>            
        </div>
    )
}

const WorkoutForm = () => {
    const [workoutName, setWorkoutName] = useState('');
    const [exerciseList, setExerciseList] = useState([]);

    const onAddExercise = (e) => {
        e.preventDefault();
        setExerciseList(exerciseList.concat(<Input key={exerciseList.length} />))
    }

    return (
        <div>
            <form className="my-5 md:mr-44">
                <div className="flex flex-col pb-10">
                    <label className="mt-8 mb-2">Workout Name:</label>
                    <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        placeholder='Chest'
                        type="text"
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}
                    />
                </div>
                
                {exerciseList}

                <button
                    id='addExerciseBtn'
                    className="px-4 py-2 font-bold rounded bg-sky-400 focus:outline-none focus:shadow-outline"
                    onClick={onAddExercise}
                >
                    Add Exercise
                </button>
            </form>
        </div>
    )
}

export default WorkoutForm