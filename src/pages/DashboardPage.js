import React from "react"
import WeatherCard from "../components/cards/WeatherCard";
import ActivityCards from "../components/cards/ActivityCards";
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