import React, { useState, useEffect } from 'react';
import ExerciseInput from './ExerciseInput';
import FormButton from './FormButton';

const WorkoutForm = () => {
    const [showCreateBtn, setCreateBtn] = useState(false);
    const [workoutName, setWorkoutName] = useState('');
    const [exerciseFields, setExerciseFields] = useState([]);

    useEffect(() => {
        if (exerciseFields.length > 0) {
            setCreateBtn(true);
        } else {
            setCreateBtn(false);
        }
    }, [exerciseFields])

    const onAddExercise = (e) => {
        e.preventDefault();

        let new_exercise = {
            exerciseName: '',
            type: 'Weighted'
        };

        setExerciseFields([...exerciseFields, new_exercise]);
    }

    const deleteExerciseField = (idx) => {
        let data = [...exerciseFields];
        data.splice(idx, 1);
        setExerciseFields(data);
    }

    const handleExercisesChange = (idx, e) => {
        let data = [...exerciseFields];
        data[idx][e.target.name] = e.target.value;

        setExerciseFields(data);
    }

    const onCreate = (e) => {
        e.preventDefault();
        console.log("create button pressed");
        console.log(exerciseFields);
    }

    return (
        <section className='pb-28'>
            <form className="my-5 md:mr-44">
                <div className="flex flex-col pb-7">
                    <label className="mt-8 mb-2">Workout Name:</label>
                    <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 rounded appearance-none drop-shadow-md focus:outline-none focus:shadow-outline"
                        placeholder='Chest'
                        value={workoutName}
                        type="text"
                        onChange={e => setWorkoutName(e.target.value)}
                    />
                </div>

                <div className='flex flex-col'>
                    {
                        exerciseFields.map((exercise, idx) => {
                            return (
                                <ExerciseInput
                                    exercise={exercise}
                                    idx={idx}
                                    handleExercisesChange={handleExercisesChange}
                                    deleteExerciseField={deleteExerciseField}
                                    key={idx}
                                />
                            )
                        })
                    }
                </div>

                <div className='flex justify-between flex-reverse'>
                    <FormButton
                        id={'addExerciseBtn'}
                        title={'Add Exercise'}
                        handleClick={onAddExercise}
                    />
                    
                    {showCreateBtn &&
                        <FormButton
                            id={'CreateBtn'}
                            title={'Create'}
                            handleClick={onCreate}
                            createBtn={true}
                        />
                    }
                </div>
            </form>
        </section>
    )
}

export default WorkoutForm;