import React from "react"

import { default as databiz } from "../images/client-databiz.svg"
import { default as audiophile } from "../images/client-audiophile.svg"
import { default as meet } from "../images/client-meet.svg"
import { default as maker } from "../images/client-maker.svg"


const Remotework = () => {
    return (
        <>
            <section className="remote">
                <h1 className="remote__title">
                    Make
                    <span>Remote work</span>
                </h1>

                <p className="remote__paragraph">
                    Get your team in sync, no matter your location. Streamline processes,
                    create team rituals, and watch productivity soar.
                </p>

                <button className="remote__button">Learn more</button>

                <article className="remote__marks">
                    <img src={databiz} alt="" />
                    <img src={audiophile} alt="" />
                    <img src={meet} alt="" />
                    <img src={maker} alt="" />
                </article>
            </section>
        </>
    );
}

export default Remotework