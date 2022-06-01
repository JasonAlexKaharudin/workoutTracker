import React from "react";
import { AiOutlineAppstore, AiOutlineHistory, AiFillCodeSandboxCircle } from "react-icons/ai";

export const SidebarLinks = [
    {
        title: "Dashboard",
        icon: <AiOutlineAppstore size={25}/>,
        link: '/'
    },
    {
        title: "Workouts",
        icon: <AiFillCodeSandboxCircle size={25}/>,
        link: '/workouts'
    },
    {
        title: "History",
        icon: <AiOutlineHistory size={25}/>,
        link: '/history'
    }
]