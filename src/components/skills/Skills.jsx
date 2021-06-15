import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cSkill from "./cSkill.png";
import cppSkill from "./cppSkill.png";
import cssSkill from "./cssSkill.png";
import htmlSkill from "./htmlSkill.png";
import jsSkill from "./jsSkill.png";
import nodeSkill from "./nodeSkill.png";
import pythonSkill from "./pythonSkill.png";
import reactSkill from "./reactSkill.png";

function Skills() {
    return (
        <div>
            <h1 className="skills-heading">Skills</h1>
            <Carousel className="carousel-area">
                <Carousel.Item>
                    <img src={cSkill} className="skills-img" alt="C Language" width="250" height="250" />
                    <img src={cppSkill} className="skills-img" alt="C++ Language" width="250" height="250" />
                    <img src={pythonSkill} className="skills-img" alt="Python Language" width="250" height="250" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={htmlSkill} className="skills-img" alt="HTML Language" width="250" height="250" />
                    <img src={cssSkill} className="skills-img" alt="CSS Language" width="250" height="250" />
                    <img src={jsSkill} className="skills-img" alt="JavaScript Language" width="250" height="250" />
                </Carousel.Item>

                <Carousel.Item>
                    <img src={nodeSkill} className="skills-img" alt="NodeJS Language" width="250" height="250" />
                    <img src={reactSkill} className="skills-img" alt="React Language" width="250" height="250" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Skills;