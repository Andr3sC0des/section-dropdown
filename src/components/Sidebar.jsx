import React from "react"
import Menu from "./Menu";
import Menuform from "./Menuform";

const Sidebar = () => {
    return (
        <>
            <nav className="sidebar">
                <section className="sidebar__menu">
                    <Menu />
                    <article className="sidebar__menuform">
                    <Menuform />
                    </article>
                </section>
               </nav>
            <div className="sidebar__background"></div>
            
        </>
    );
}

export default Sidebar