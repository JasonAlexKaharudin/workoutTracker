import React from 'react'
import { ActivityCardData } from '../ActivityCardData'
import ActivityCard from './ActivityCard'

const ActivityCards = () => {
  return (
    <section className='mt-10 mb-32'>
      <h1 className='text-xl md:text-2xl text-mainText'>Your Activity</h1>
      <div className='flex flex-wrap items-start justify-between mt-6'>
        {
          ActivityCardData.map((activity) => {
            return (
              <ActivityCard key={activity.header} activity={activity} />
            )
          })
        }
      </div>
    </section>
  )
}

export default ActivityCards