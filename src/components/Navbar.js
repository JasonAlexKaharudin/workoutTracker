import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="border-r-4 border-black">
            <div className="flex flex-col items-center content-center justify-center">                
                <Link to="/" className="hover:text-slate-300">Dashboard</Link>
                <Link to="/workouts" className="hover:text-slate-300">Workouts</Link>
                <Link to="/history" className="hover:text-slate-300">History</Link>                
            </div>
        </nav>
    )
}

export default Navbar;