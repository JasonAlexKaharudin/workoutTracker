import React, { useState, useEffect } from 'react';
import ExerciseInput from './ExerciseInput';
import WorkoutNameInput from './WorkoutNameInput';
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
                <WorkoutNameInput workoutName={workoutName} setWorkoutName={setWorkoutName} />

                {
                    exerciseFields.map((exercise, idx) => {
                        return (
                            <div className='flex flex-col' key={idx}>
                                <ExerciseInput
                                    exercise={exercise}
                                    idx={idx}
                                    handleExercisesChange={handleExercisesChange}
                                    deleteExerciseField={deleteExerciseField}                                    
                                />
                            </div>
                        )
                    })
                }


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