import React from 'react';
import { IoRemoveCircleOutline } from 'react-icons/io5';

const TimedSet = ({ dimensions }) => {
    
    return (
        <div className='flex flex-col justify-end'>
            <label className="pb-1 mt-2">Minutes</label>
            <div className='flex mb-5'>
                <input
                    className="w-3/12 px-3 py-2 leading-tight text-gray-700 rounded appearance-none md:w-2/12 drop-shadow-md focus:outline-none focus:shadow-outline"
                    placeholder='2'
                    type="number"
                />
                <button className='pl-3'>
                    <span>
                        {
                            dimensions.width > 768 ? <IoRemoveCircleOutline color='red' size={23} /> : <IoRemoveCircleOutline color='red' size={15} />
                        }
                    </span>
                </button>
            </div>
        </div>
    )
}

export default TimedSet;