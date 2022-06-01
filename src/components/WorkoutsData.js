import React from "react";
import { IoMdTrendingDown, IoMdTrendingUp } from 'react-icons/io';

export const WorkoutsData = [
    {
        title: 'Chest',
        exercises: [
            {
                name: 'Bench Press',
                sets: 3,
                reps: 5,
                weight_PP: 65,
                personal_record: 65,
                icon: <IoMdTrendingDown size={23} color={"FF5B5A"} />
            },
            {
                name: 'Flat Dumbbell',
                sets: 3,
                reps: 12,
                weight_PP: 40,
                personal_record: 40,
                icon: <IoMdTrendingUp size={23} color={"00A28A"} />
            },
            {
                name: 'Incline Dumbbell',
                sets: 3,
                reps: 8,
                weight_PP: 45,
                personal_record: 45,
                icon: <IoMdTrendingUp size={23} color={"00A28A"} />
            },
            {
                name: 'Cable Fly',
                sets: 3,
                reps: 12,
                weight_PP: 15,
                personal_record: 15,
                icon: <IoMdTrendingDown size={23} color={"FF5B5A"} />
            }
        ]
    },
    {
        title: 'Back',
        exercises: [
            {
                name: 'Pull ups',
                sets: 3,
                reps: 7,
                weight_PP: 160,
                personal_record: 160,
                icon: <IoMdTrendingUp size={23} color={"00A28A"} />
            },
            {
                name: 'Lat Pulldown',
                sets: 3,
                reps: 10,
                weight_PP: 90,
                personal_record: 90,
                icon: <IoMdTrendingUp size={23} color={"00A28A"} />
            },
            {
                name: 'Cable Lat Pull',
                sets: 3,
                reps: 15,
                weight_PP: 18,
                personal_record: 18,
                icon: <IoMdTrendingUp size={23} color={"00A28A"} />
            },
            {
                name: 'Machine Pull',
                sets: 3,
                reps: 12,
                weight_PP: 85,
                personal_record: 85,
                icon: <IoMdTrendingUp size={23} color={"00A28A"} />
            }
        ]
    },
]
