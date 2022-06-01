import React from 'react'

const ActivityCard = ({ activity }) => {
  return (
    <article className={`flex flex-col md:flex-row items-center md:px-6 py-3 rounded-md ${activity.bgColor} w-[145px] h-[115px] md:w-[230px] md:h-[75px] mb-5`}>                
        <span className='md:pr-4'>                    
            {activity.icon}
        </span>
        <div className={`flex flex-col pt-2 text-center md:pt-0 md:text-left ${activity.textColor}`}>
            <h1 className='text-lg font-medium'>{activity.header}</h1>
            <h2 className='text-md'>{activity.subHeader}</h2>
        </div>
    </article>
  )
}

export default ActivityCard