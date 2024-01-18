import React, { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectsSideBar from "./components/ProjectsSidebar";

function App() {
  const [projects, setProjects] = useState([
    { title: 'Do all exercises!', description: 'p1', dueDate:'2023-01-01', id:'1' },
    { title: 'Second project!', description: 'p2', dueDate:'2024-01-07', id:'2' },
  ]);

  const addProjectHandler = userInput => {
    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects];
      var newProjectID = 'p1';
      if(prevProjects.length > 0)
        newProjectID = setProjectID(prevProjects[prevProjects.length-1]);
      updatedProjects.push({ title: userInput.title, description: userInput.description, dueDate:userInput.dueDate, id: newProjectID });
      return updatedProjects;
    });
  };

  const setProjectID = (lastProject) => {
    const lastProjectID = Number(lastProject.id);
    const newProjectID = (lastProjectID+1).toString();
    return newProjectID;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar projectList={projects}/>
      <NewProject onAddProject={addProjectHandler}/>
    </main>
  );
}

export default App;
