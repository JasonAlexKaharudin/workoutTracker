import React, {useState} from "react";
import DimensionContext from "../context/DimensionsContext";

const getWindowDimension = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const DimensionsStore = ({ children }) => {
    const [dimensions, setDimensions] = useState(getWindowDimension());

    const handleResize = () => {
        const onHandleResize = () => {
            setDimensions(getWindowDimension());
        }
    
        window.addEventListener('resize', onHandleResize);
        return () => {
            window.addEventListener('resize', onHandleResize);
        }
    }

    return (
        <DimensionContext.Provider value={{ dimensions, handleResize }}>
            { children }
        </DimensionContext.Provider>
    )
}

export default DimensionsStore;