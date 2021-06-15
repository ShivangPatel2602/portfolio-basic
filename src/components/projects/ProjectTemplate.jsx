import React from "react";

function ProjectTemplate(props) {
    return (
        <div className="project-justify">
            <h2>{props.projectHeading}</h2>
            <p>{props.projectText}</p>
        </div>
    )
}

export default ProjectTemplate;