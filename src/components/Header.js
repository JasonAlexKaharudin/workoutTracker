import React, { useEffect, useState } from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const getWindowDimension = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const Header = ({ title, userName }) => {
    const [dimensions, setDimensions] = useState(getWindowDimension());

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getWindowDimension());
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);    

    return (
        <header className="flex justify-between ">
            <h1 className="text-3xl md:mt-3 md:text-4xl text-mainText">
                {title}                   
                {
                    userName && <span className="font-bold"> {userName}</span>
                }            
            </h1>
            <button className="md:pt-0">
                <Link to="/create">
                    <span>
                        {dimensions.width > 768? <AiFillPlusCircle size={60} onMouseOver={({target})=>target.style.color="grey"} onMouseOut={({target})=>target.style.color="black"}/> : <AiFillPlusCircle size={43} />}                    
                    </span>                
                </Link>
            </button>           
        </header>
  )
}

export default Header