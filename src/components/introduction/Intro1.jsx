import React from "react";
import me1 from "./me1.jpg";

function Intro1() {
    const heading = "< Hello People />";

    return (
        <div className="intro-start">
            <h1 className="intro-heading">{heading}</h1>
            <h1 className="intro-name">I am Shivang Patel </h1>
            <img className="my-img" src={me1} alt="Shivang" width="200" height="250" />
        </div>
    )
}

export default Intro1;