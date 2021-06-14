import React from "react";

function EducationProp(props) {
    return (
        <div className="education-schools">
            <img src={props.image} alt={props.altText} className="education-img" width="250" height="250" />
            <p>{props.schoolName}</p>
            <p>{props.year}</p>
            <p>{props.grades}</p>
        </div>
    )
}

export default EducationProp;