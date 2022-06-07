import React from "react";
import { IoMdTrendingDown, IoMdTrendingUp } from 'react-icons/io';

export const WorkoutsData = [
    {
        title: 'Chest',
        date_performed: '2nd May 2022',
        exercises: [
            {
                name: 'Bench Press',
                type: 'Weights',
                data: [
                    {
                        sets: 3,
                        reps: 5,
                        weight_PP: 65,
                    },
                    {
                        sets: 3,
                        reps: 5,
                        weight_PP: 67.5,
                    },
                ],
                personal_record: 65,
                last_recorded_weight: 67.5,
                icon: <IoMdTrendingDown size={23} color={"FF5B5A"} />
            },
            {
                name: 'Flat Dumbbell',
                data: [
                    {
                        sets: 3,
                        reps: 12,
                        weight_PP: 40,
                    },
                    {
                        sets: 3,
                        reps: 12,
                        weight_PP: 45,
                    },
                ],
                personal_record: 40,
                last_recorded_weight: 45,
                icon: <IoMdTrendingUp size={23} color={"00A28A"} />
            },
            {
                name: 'Incline Dumbbell',
                data: [
                    {
                        sets: 3,
                        reps: 8,
                        weight_PP: 45,
                    },
                    {
                        sets: 3,
                        reps: 8,
                        weight_PP: 43,
                    }
                ],
                personal_record: 45,
                last_recorded_weight: 43,
                icon: <IoMdTrendingUp size={23} color={"00A28A"} />
            },
            {
                name: 'Cable Fly',
                data: [
                    {
                        sets: 3,
                        reps: 12,
                        weight_PP: 15,
                    },
                    {
                        sets: 3,
                        reps: 12,
                        weight_PP: 15,
                    }
                ],
                personal_record: 15,
                last_recorded_weight: 15,
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
