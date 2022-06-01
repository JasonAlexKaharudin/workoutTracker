import React from "react"
import { AiFillPlusCircle } from "react-icons/ai";
import WeatherCard from "../components/WeatherCard";
import ActivityCards from "../components/ActivityCards";

const Dashboard = () => {
  return (
    <>
      <header className="flex justify-between">    
        <h1 className="items-center justify-center text-3xl md:mt-3 md:text-4xl text-mainText">
          Welcome back <span className="font-bold">Wacko!</span>        
        </h1>
        <span className="">
          <AiFillPlusCircle size={60}/>
        </span>        
      </header>

      <WeatherCard/>
      
      <ActivityCards/>
    </>    
  )
}

export default Dashboard;