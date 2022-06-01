import React from "react";
import Sidebar from "../components/Sidebar";

export const Layout = ({ children }) => {    
    return(
        <div className="h-[100vh] w-[100vw] m-0 font-poppins flex flex-col-reverse md:flex-row justify-between md:justify-start">
            <Sidebar/>    
            <main className="w-full px-10 pt-16 md:px-12 md:pt-20">
                { children }
            </main>
        </div>
    )
}