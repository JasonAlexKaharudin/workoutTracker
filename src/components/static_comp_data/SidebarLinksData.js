import React from "react";
import { FcCommandLine, FcHome, FcCalendar } from "react-icons/fc"

export const SidebarLinksData = [
    {
        title: "Dashboard",
        icon: <FcHome size={25}/>,
        link: '/'
    },
    {
        title: "Workouts",
        icon: <FcCommandLine size={25}/>,
        link: '/workouts'
    },
    {
        title: "History",
        icon: <FcCalendar size={25}/>,
        link: '/history'
    }
]