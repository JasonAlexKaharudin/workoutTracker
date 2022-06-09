import React, { useContext } from 'react';
import DimensionContext from '../context/DimensionsContext';
import TimedSet from './TimedSet';
import WeightedSet from './WeightedSet';


const SetInput = ({ setData, idx, handleExerciseDataChange, exerciseType }) => {
    const { dimensions } = useContext(DimensionContext);
    
    return (
        <>
            {
                exerciseType === 'Weighted' ?
                    <WeightedSet setData={setData} idx={idx} dimensions={dimensions} handleExerciseDataChange={handleExerciseDataChange}/> 
                : 
                    <TimedSet dimensions={dimensions}/>
            }
        </>
    )
}

export default SetInput;