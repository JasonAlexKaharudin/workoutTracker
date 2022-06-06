import React from "react";
import Sidebar from "../components/Sidebar";

export const Layout = ({ children }) => {    
    return(
        <div className="flex flex-col-reverse justify-between m-0 font-poppins md:flex-row md:justify-start">
            <Sidebar/>    
            <main className="w-full px-10 pt-16 md:px-12 md:pt-20">
                { children }
            </main>
        </div>
    )
}