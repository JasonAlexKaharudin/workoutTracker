import React from 'react';
import Exercise from './Exercise';

const ExercisesList = ({ exercises }) => {    
    return (
        <>                        
            {
                exercises.map((exercise) => {
                    return(
                        <Exercise key={exercise.name} exercise={exercise}/>
                    )
                })
            }
        </>
    )
}

export default ExercisesList