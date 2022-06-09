import React from 'react';
import WorkoutForm from '../components/forms/WorkoutForm';
import Header from '../components/Header';


const CreateWorkoutPage = () => {
  return (
    <>
      <Header title={'Create Workout'} createHeader={true} />
      <WorkoutForm />
    </>
  )
}

export default CreateWorkoutPage