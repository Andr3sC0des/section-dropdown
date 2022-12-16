import React from "react"
import { features, company } from "./itemsdropdown";
import { useEffect, useState } from "react"


const Dropdown = (props) => {
    const [dropdown, setDropdown] = useState([]);

    useEffect(() => {

        if (props.title == "features") {
            setDropdown(
                features.map((item) => {
                    return (
                        <li key={item.id} className="dropdown__item">
                            <img src={item.image} alt="" />
                            <a href="" className="dropdown__anchor">{item.title}</a>
                        </li>
                    );
                })
            )
        }
        if (props.title == "company") {
            setDropdown(
                company.map((item) => {
                    return (
                        <li key={item.id} className="dropdown__item">
                            <img src={item.image} alt="" />
                            <a href="" className="dropdown__anchor">{item.title}</a>
                        </li>
                    );
                })
            )
        }
    }, [])

    return (
        <>
            {dropdown}
        </>
    );
}

export default Dropdown

