import React, { useReducer } from 'react'
import WorkoutContext from '../context/WorkoutsContext';
import WorkoutsReducer from '../reducer/WorkoutsReducer';

const initState = [];

const WorkoutsStore = ({ children }) => {
    const [workouts, dispatch] = useReducer(WorkoutsReducer, initState);

    return (
        <WorkoutContext.Provider value={{ workouts, dispatch }}>
            { children }
        </WorkoutContext.Provider>
    )
}

export default WorkoutsStore;