import React, { useContext, useEffect } from 'react';
import DimensionContext from './context/DimensionsContext';
import { NavLink } from "react-router-dom";

const SidebarLink = ({ nav }) => {
    const { dimensions, handleResize } = useContext(DimensionContext);

    useEffect(() => {
        handleResize();
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