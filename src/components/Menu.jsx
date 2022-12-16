import React from "react"
import Dropdown from "./Dropdown";

const Menu = () => {

    const dropdownHandler = (e) => {
        const features = document.querySelectorAll("#featureDropdown")
        const company = document.querySelectorAll("#companyDropdown")

        const heightAnimation = (i) => {
            if (i.style.height == "") {
                i.style.height = `${i.scrollHeight}px`
            } else {
                i.style.height = ""
            }
        }


        if (e.target.textContent == "Features") {
            features.forEach((i) => {
                i.classList.toggle("dropdown--active")
                i.parentNode.firstChild.lastChild.classList.toggle("menu__arrow--active")
                heightAnimation(i)
            })
        }
        if (e.target.textContent == "Company") {
            company.forEach((i) => {
                i.classList.toggle("dropdown--active")
                i.parentNode.firstChild.lastChild.classList.toggle("menu__arrow--active")
                heightAnimation(i)
            })
        }


    }

    return (
        <>
            <li onClick={dropdownHandler} className="menu__list">
                <a className="menu__anchor">
                    <span>Features</span>
                    <i className="menu__arrow fa-solid fa-chevron-down"></i>
                </a>
                <ul id="featureDropdown" className="dropdown">
                    <Dropdown title="features" />
                </ul>
            </li>

            <li onClick={dropdownHandler} className="menu__list">
                <a className="menu__anchor">
                    <span>Company</span>
                    <i className="menu__arrow fa-solid fa-chevron-down"></i>
                </a>
                <ul id="companyDropdown" className="dropdown">
                    <Dropdown title="company" />
                </ul>
            </li>

            <li className="menu__list"><a className="menu__anchor">Careers</a></li>
            <li className="menu__list"><a className="menu__anchor">About</a></li>
        </>
    );
}

export default Menu