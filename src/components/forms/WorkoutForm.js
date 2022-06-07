import React, { useState } from 'react';
import ExerciseInput from './ExerciseInput';

const WorkoutForm = () => {
    const [workoutName, setWorkoutName] = useState('');
    const [exerciseName, setExerciseName] = useState('');    
    const [showCreateBtn, setCreateBtn] = useState(false);
    const [exerciseList, setExerciseList] = useState([]);

    const onAddExercise = (e) => {
        e.preventDefault();

        if (showCreateBtn === false) {
            setCreateBtn(true); // must check if array of exerclist is empty then set it to false, else true
        }

        setExerciseList(exerciseList.concat(<ExerciseInput key={exerciseList.length} exerciseName={exerciseName} setExerciseName={setExerciseName} />))
    }

    const onCreate = (e) => {
        e.preventDefault();
        console.log("create button pressed");
        console.log(`${exerciseName}`);
    }

    return (
        <section className='pb-28'>
            <form className="my-5 md:mr-44">
                <div className="flex flex-col pb-7">
                    <label className="mt-8 mb-2">Workout Name:</label>
                    <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 rounded appearance-none drop-shadow-md focus:outline-none focus:shadow-outline"
                        placeholder='Chest'
                        type="text"
                        value={workoutName}
                        onChange={(e) => setWorkoutName(e.target.value)}
                    />
                </div>

                {exerciseList}

                <div className='flex justify-between flex-reverse'>
                    <button
                        id='addExerciseBtn'
                        className="px-4 py-2 rounded bg-sky-400 focus:outline-none focus:shadow-outline"
                        onClick={onAddExercise}
                    >
                        Add Exercise
                    </button>
                    {showCreateBtn &&
                        <button
                            id='CreateBtn'
                            className="px-4 py-2 bg-green-400 rounded focus:outline-none focus:shadow-outline"
                            onClick={onCreate}
                        >
                            Create
                        </button>
                    }
                </div>
            </form>
        </section>
    )
}

export default WorkoutForm;