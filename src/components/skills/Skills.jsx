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
import mongoSkill from "./mongoSkill.png";

function Skills() {
    return (
        <div>
            <h1 className="skills-heading">Skills</h1>
            <Carousel className="carousel-area">
                <Carousel.Item>
                    <table>
                        <tr>
                            <td>
                                <img src={cSkill} className="skills-img" alt="C Language" width="170" height="170" />
                            </td>
                            <td>
                                <img src={cppSkill} className="skills-img" alt="C++ Language" width="170" height="170" />
                            </td>
                            <td>
                                <img src={pythonSkill} className="skills-img" alt="Python Language" width="170" height="170" />
                            </td>
                        </tr>
                        <tr>
                            <td>C Language</td>
                            <td>C++ Language</td>
                            <td>Python</td>
                        </tr>
                    </table>
                </Carousel.Item>

                <Carousel.Item>
                    <table>
                        <tr>
                            <td>
                                <img src={htmlSkill} className="skills-img" alt="HTML Language" width="170" height="170" />
                            </td>
                            <td>
                                <img src={cssSkill} className="skills-img" alt="CSS Language" width="170" height="170" />
                            </td>
                            <td>
                                <img src={jsSkill} className="skills-img" alt="JavaScript Language" width="170" height="170" />
                            </td>
                        </tr>
                        <tr>
                            <td>HTML5</td>
                            <td>CSS</td>
                            <td>JavaScript</td>
                        </tr>
                    </table>
                </Carousel.Item>

                <Carousel.Item>
                    <table>
                        <tr>
                            <td>
                                <img src={nodeSkill} className="skills-img" alt="NodeJS Language" width="170" height="170" />
                            </td>
                            <td>
                                <img src={mongoSkill} className="skills-img" alt="MongoDB" width="170" height="170" />
                            </td>
                            <td>
                                <img src={reactSkill} className="skills-img" alt="React Language" width="170" height="170" />
                            </td>
                        </tr>
                        <tr>
                            <td>NodeJS</td>
                            <td>MongoDB</td>
                            <td>ReactJS</td>
                        </tr>
                    </table>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Skills;