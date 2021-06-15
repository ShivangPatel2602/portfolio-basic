import React from "react";
import IntroFinal from "./components/introduction/IntroFinal";
import EducationFinal from "./components/education/EducationFinal";
import Skills from "./components/skills/Skills";
import ProjectFinal from "./components/projects/project1";
import GoalFinal from "./components/goals/GoalFinal";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <IntroFinal />
      <EducationFinal />
      <Skills />
      <ProjectFinal />
      <GoalFinal />
      <Contact />
    </div>
  )
}

export default App;
