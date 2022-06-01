import React from 'react';
import { GiElectric } from 'react-icons/gi' 
import { FcClock, FcNightLandscape } from 'react-icons/fc'

export const ActivityCardData = [
    {
        header: "Last Workout",
        subHeader: "Chest",
        icon: <FcClock size={30} color={'D2416E'}/>, 
        textColor: 'text-activityCardRedText',
        bgColor: 'bg-activityCardRed'       
    },
    {
        header: "Start Workout",
        subHeader: "Back",
        icon: <GiElectric size={30} color={'197BD2'}/>, 
        textColor: 'text-activityCardBlueText',
        bgColor: 'bg-activityCardBlue' 
    },
    {
        header: "Sleep",
        subHeader: "8 Hours",
        icon: <FcNightLandscape size={30}/>, 
        textColor: 'text-activityCardGreenText',
        bgColor: 'bg-activityCardGreen' 
    }
]