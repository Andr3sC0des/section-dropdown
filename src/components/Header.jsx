import React from "react"
import { default as logo } from "../images/logo.svg"
import Menu from "./Menu";
import Menuform from "./Menuform";

const Header = () => {

    const buttonHandler = () => {
        const menuIcon = document.querySelector(".menuIcon")
        const sidebar = document.querySelector(".sidebar")
        const sidebarOverlay = document.querySelector(".sidebar__background")

        menuIcon.firstElementChild.classList.toggle("menuIcon__top--active")
        menuIcon.childNodes[1].classList.toggle("menuIcon__med--active")
        menuIcon.lastElementChild.classList.toggle("menuIcon__bottom--active")
        menuIcon.classList.toggle("menuIcon--fixed")

        sidebar.classList.toggle("sidebar--active")
        sidebarOverlay.classList.toggle("sidebar__overlay")
    }

    return (
        <>
            <header className="header">

                <section className="header__left">
                    <img className="header__logo" src={logo} alt="" />
                    <article className="header__menu">
                        <Menu />
                    </article>
                </section>

                <section className="header__right">
                    <Menuform />
                </section>

                <button onClick={buttonHandler} className="menuIcon">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

            </header>
        </>
    );
}

export default Header