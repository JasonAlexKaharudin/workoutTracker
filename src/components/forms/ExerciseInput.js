import React, { useState } from 'react';
import SetInput from './SetInput';
import { IoRemoveCircleOutline } from 'react-icons/io5';

const ExerciseInput = ({ idx, exercise, handleExercisesChange, deleteExerciseField }) => {
    const [exerciseType, setExerciseType] = useState('Weighted');
    const [exericeData, setExerciseData] = useState([]);

    const handleExerciseType = (idx, e) => {
        handleExercisesChange(idx, e);
        setExerciseType(e.target.value);
    }

    const handleExerciseDataChange = (idx, e) => {
        let data = [...exericeData];
        data[idx][e.target.name] = e.target.value;

        setExerciseData(data);
    }

    const onAddSet = (e) => {
        e.preventDefault();
        let new_exerciseData;

        if (exerciseType === 'Weighted') {
            new_exerciseData = {
                setNumber: 0,
                reps: 0,
                weight_PP: 0,
            };
        } else {
            new_exerciseData = {
                setNumber: 0,
                minutes: 0,
            };
        }

        setExerciseData([...exericeData, new_exerciseData]);
    }

    return (
        <>
            <div className="flex flex-col pb-6">
                <label className="mt-2 mb-2">Exercise</label>

                <div className='flex flex-wrap'>
                    <input
                        name='exerciseName'
                        className="w-5/12 px-3 py-2 leading-tight text-gray-700 rounded appearance-none md:w-auto drop-shadow-md focus:outline-none focus:shadow-outline"
                        placeholder='Bench Press'
                        value={exercise.exerciseName}
                        type="text"
                        onChange={e => handleExercisesChange(idx, e)}
                    />
                    <div className='flex pl-4 justify-evenly'>
                        <div className='pt-2 text-sm md:pt-0'>
                            <select className='px-3 py-2 font-light rounded drop-shadow-md focus:outline-none' name='type' onChange={e => handleExerciseType(idx, e)}>
                                <option value={'Weighted'}>Weighted</option>
                                <option value={'Time'}>Time</option>
                            </select>
                        </div>
                        <div className='pt-2 pl-3'>
                            <button onClick={deleteExerciseField}>
                                <span>
                                    <IoRemoveCircleOutline color='red' size={23} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {
                exericeData.map((setData, idx) => {
                    return (
                        <SetInput
                            key={idx}
                            idx={idx}
                            setData={setData}
                            handleExerciseDataChange={handleExerciseDataChange}
                            exerciseType={exerciseType}
                        />
                    )
                })
            }
            <div className='pb-5'>
                <button
                    id='addSetBtn'
                    className="px-4 py-2 rounded bg-sky-400 focus:outline-none focus:shadow-outline"
                    onClick={onAddSet}
                >
                    +Set
                </button>
            </div>
        </>
    )
}

export default ExerciseInput;