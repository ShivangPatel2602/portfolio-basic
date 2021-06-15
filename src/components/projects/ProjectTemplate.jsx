import React from "react";

function ProjectTemplate(props) {
    return (
        <div>
            <h2>{props.projectHeading}</h2>
            <p>{props.projectText}</p>
        </div>
    )
}

export default ProjectTemplate;