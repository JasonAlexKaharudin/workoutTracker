import React from "react";
import Header from "../components/Header";
import WorkoutCards from "../components/cards/WorkoutCards";

const WorkoutsPage = () => {
    return(
        <>
            <Header title={'My Workouts'}/>
            <WorkoutCards/>
        </>
    )
}

export default WorkoutsPage;