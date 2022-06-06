import React from "react";
import { SidebarLinks } from "./SidebarLinks";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
    return (
        <nav className="flex md:flex-col py-8 justify-center z-10 bottom-0 left-0 md:bottom-auto md:left-auto fixed w-full md:w-auto md:static md:justify-start md:pt-32 text-xl border-[#EFECEC] border-t-2 md:border-r-2 font-light">
            {SidebarLinks.map((nav) => {
                return (
                    <SidebarLink key={nav.title} nav={nav} />
                )
            })}
        </nav>
    )
}

export default Sidebar;