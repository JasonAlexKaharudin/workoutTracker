import React from "react";
import Sidebar from "../components/Sidebar";
import DimensionsStore from "../components/store/DimensionsStore";
import WorkoutsStore from "../components/store/WorkoutsStore";

export const Layout = ({ children }) => {
    return (
        <div className="md:h-[1000px] flex flex-col-reverse font-poppins md:flex-row md:justify-start">
            <DimensionsStore>
                <Sidebar />
                <main className="w-full px-10 pt-16 md:px-12 md:pt-20">
                    <WorkoutsStore>
                        {children}
                    </WorkoutsStore>
                </main>
            </DimensionsStore>
        </div>
    )
}