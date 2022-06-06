import React from 'react'
import { BsFillSunFill } from "react-icons/bs"

const WeatherCard = () => {
  return (
    <section className="flex px-5 mt-10 rounded-md py-7 bg-weatherCard">
        <span>
          <BsFillSunFill size={40} color={'FFDE67'}/>        
        </span>
        <div className="pl-5 md:pt-3 md:pl-8">
        <h1 > <span className='font-medium'>26 ℃</span> It's a <span className="font-bold">Sunny Day!</span> | Insert a David Goggin's Quote</h1>          
        </div>        
    </section>
  )
}

export default WeatherCard