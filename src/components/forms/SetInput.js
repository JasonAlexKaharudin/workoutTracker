import React, { useEffect, useContext } from 'react'
import DimensionContext from '../context/DimensionsContext';
import { IoRemoveCircleOutline } from 'react-icons/io5';

const SetInput = ({ numSets, exerciseType }) => {
    const { dimensions } = useContext(DimensionContext);

    const handleRemove = (e) => {
        e.preventDefault();
        console.log("remove me");
    }

    useEffect(() => {
        console.log(numSets.length);
    }, [numSets])

    return (
        <>
            {exerciseType === 'Weighted' ?
                <div className='grid grid-cols-7 gap-3'>
                    <div className="flex flex-col justify-end col-span-2 pb-4 md:col-span-1">
                        <label className="mt-2 mb-2">lbs <span className='font-light text-[10px]'>pp</span> </label>
                        <input
                            className="px-3 py-2 leading-tight text-gray-700 rounded appearance-none drop-shadow-md focus:outline-none focus:shadow-outline"
                            placeholder='40'
                            type="number"
                        />
                    </div>
                    <div className="flex flex-col justify-end col-span-2 pb-4 md:col-span-1">
                        <label className="mt-2 mb-2">Reps</label>
                        <input
                            className="px-3 py-2 leading-tight text-gray-700 rounded appearance-none drop-shadow-md focus:outline-none focus:shadow-outline"
                            placeholder='12'
                            type="number"
                        />
                    </div>
                    <button className='pt-5' onClick={handleRemove}>
                        <span>
                            {
                                dimensions.width > 768 ? <IoRemoveCircleOutline color='red' size={23} /> : <IoRemoveCircleOutline color='red' size={15} />
                            }
                        </span>
                    </button>
                </div>
                :
                <div className='flex flex-col justify-end'>
                    <label className="pb-1 mt-2">Minutes</label>
                    <div className='flex mb-5'>
                        <input
                            className="w-3/12 px-3 py-2 leading-tight text-gray-700 rounded appearance-none md:w-2/12 drop-shadow-md focus:outline-none focus:shadow-outline"
                            placeholder='2'
                            type="number"
                        />
                        <button className='pl-3' onClick={handleRemove}>
                            <span>
                                {
                                    dimensions.width > 768 ? <IoRemoveCircleOutline color='red' size={23} /> : <IoRemoveCircleOutline color='red' size={15} />
                                }
                            </span>
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default SetInput;