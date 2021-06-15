import React from "react";

function GoalTemplate(props) {
    return (
        <div className="goal-justify">
            <h2>{props.goalHeading}</h2>
            <p>{props.goal}</p>
        </div>
    )
} 

export default GoalTemplate;