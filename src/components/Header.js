import React, { useEffect, useContext } from 'react'
import DimensionContext from './context/DimensionsContext';
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GrPrevious } from 'react-icons/gr';

const Header = ({ title, userName, createHeader }) => {
    const { dimensions, handleResize } = useContext(DimensionContext);
    const navigate = useNavigate();

    useEffect(() => {
        handleResize();

    });

    const handleBackBtn = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <>
            {
                createHeader === true ?
                    <header>
                        <div className='flex'>
                            <button onClick={handleBackBtn} className="pr-3 md:pt-3">
                                {dimensions.width > 768 ? <span> <GrPrevious size={17} /> </span> : <span> <GrPrevious size={15} /> </span>}
                            </button>
                            <h1 className="text-3xl md:mt-3 md:text-4xl text-mainText">
                                Create Workout
                            </h1>
                        </div>
                    </header>
                    :
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
                                    {dimensions.width > 768 ? <AiFillPlusCircle size={60} onMouseOver={({ target }) => target.style.color = "grey"} onMouseOut={({ target }) => target.style.color = "black"} /> : <AiFillPlusCircle size={43} />}
                                </span>
                            </Link>
                        </button>
                    </header>
            }
        </>
    )
}

export default Header;