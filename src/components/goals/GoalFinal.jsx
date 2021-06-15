import React from "react";
import GoalTemplate from "./GoalTemplate";

function GoalFinal() {
    return (
        <div className="goal-content">
            <h1 className="goals-heading">Goals & Ambitions</h1>
            <GoalTemplate
                goalHeading="Goal 1"
                goal="I want to pursue Masters in Computer Science either from Stanford University or Carnegie Mellon University."
            />
            <GoalTemplate
                goalHeading="Goal 2"
                goal="I want to participate in the CalTech SURF program once in my undergraduate studies."
            />
            <GoalTemplate
                goalHeading="Goal 3"
                goal="I want to work on a project which can have potential to achieve global recognition."
            />
            <GoalTemplate
                goalHeading="Goal 4"
                goal="I want to score 9+ CGPA in my remaining years at Nirma University (couldn't do it in my first year though 😥)."
            />
        </div>
    )
}

export default GoalFinal;