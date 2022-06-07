import React, { useContext, useEffect } from 'react';
import DimensionContext from '../components/context/DimensionsContext';
import WorkoutForm from '../components/WorkoutForm';
import { useNavigate } from 'react-router-dom';
import { GrPrevious } from 'react-icons/gr';

const CreateWorkoutPage = () => {
  const { dimensions, handleResize } = useContext(DimensionContext);
  const navigate = useNavigate();

  useEffect(() => {
    handleResize();
  });

  const handleBackBtn = (e) => {
    e.preventDefault();
    navigate(-1);
  }

  return (
    <header>
      <div className='flex'>
        <button onClick={handleBackBtn} className="pr-3 md:pt-3">
          {dimensions.width > 768 ? <span> <GrPrevious size={17} /> </span> : <span> <GrPrevious size={15} /> </span>}
        </button>
        <h1 className="text-3xl md:mt-3 md:text-4xl text-mainText">
          Create Workout
        </h1>
      </div>

      <WorkoutForm />
    </header>
  )
}

export default CreateWorkoutPage