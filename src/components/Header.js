import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";

const Header = ({ title, userName }) => {
    return (
        <header className="flex justify-between ">
            <h1 className="text-3xl md:mt-3 md:text-4xl text-mainText">
                {title}                   
                {
                    userName && <span className="font-bold"> {userName}</span>
                }            
            </h1>
            <button>
                <span className="">
                <AiFillPlusCircle size={60}/>
                </span>
            </button>           
        </header>
  )
}

export default Header