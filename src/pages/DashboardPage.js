import React from "react"
import WeatherCard from "../components/WeatherCard";
import ActivityCards from "../components/ActivityCards";
import Header from "../components/Header";

const Dashboard = () => {
  return (
    <>
      <Header title={'Welcome back'} userName={'Wacko!'}/>
      <WeatherCard/>      
      <ActivityCards/>
    </>    
  )
}

export default Dashboard;