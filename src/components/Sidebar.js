import React from "react";
import { SidebarLinksData } from "./static_comp_data/SidebarLinksData";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
    return (
        <nav className="bg-white flex md:flex-col py-8 fixed justify-center bottom-0 w-full md:w-auto md:static md:justify-start md:pt-32 border-[#EFECEC] md:border-r-2 font-light">
            {SidebarLinksData.map((nav) => {
                return (
                    <SidebarLink key={nav.title} nav={nav} />
                )
            })}
        </nav>
    )
}

export default Sidebar;