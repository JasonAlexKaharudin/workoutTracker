import React, { useState, useEffect } from 'react';
import { GrPrevious } from 'react-icons/gr';
import WorkoutForm from '../components/WorkoutForm';

const getWindowDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const CreateWorkoutPage = () => {
  const [dimensions, setDimensions] = useState(getWindowDimension());

  useEffect(() => {
    const handleResize = () => {
      setDimensions(getWindowDimension());
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <header>
      <div className='flex'>
        {dimensions.width > 768? <span className='pt-6 pr-5'> <GrPrevious size={17}/> </span> : <span className='pt-3 pr-4'> <GrPrevious size={15}/> </span>}                            
        <h1 className="text-3xl md:mt-3 md:text-4xl text-mainText">
          Create Workout
        </h1>
      </div>

      <WorkoutForm/>
    </header>
  )
}

export default CreateWorkoutPage