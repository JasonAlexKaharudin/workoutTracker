import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

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
        <Link to={nav.link} className="pr-3">
            <div className="flex text-md md:my-3 mx-9 hover:font-medium">
                {nav.icon}
                <span className='md:pl-3'>
                    {dimensions.width > 768 && nav.title}
                </span>
            </div>
        </Link>
    )
}

export default SidebarLink