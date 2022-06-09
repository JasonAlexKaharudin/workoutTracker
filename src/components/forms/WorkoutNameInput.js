import React from 'react';

const WorkoutNameInput = ({ workoutName, setWorkoutName }) => {
    return (
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
    )
}

export default WorkoutNameInput