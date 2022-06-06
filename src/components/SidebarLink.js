import React, { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";

const getWindowDimension = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const SidebarLink = ({ nav }) => {
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
        <NavLink to={nav.link} className="mr-3">            
            <div className="flex text-md md:text-lg md:my-3 mx-9 text-[#838383] hover:">
                {nav.icon}
                <span className='text-blue-500 md:pl-3'>                    
                    {dimensions.width > 768 && nav.title}                    
                </span>
            </div>
        </NavLink>
    )
}

export default SidebarLink