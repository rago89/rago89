import { projectComponent } from "../shared/projectComponent.js";

export const projects = (projectsApi) => {
  const projectSection = document.createElement("section");
  projectSection.id = "projects";

  const projectsTitle = document.createElement("h2");
  projectsTitle.innerHTML = "Projects and Study Journey";
  projectSection.appendChild(projectsTitle);

  const btnsContainer = document.createElement("div");
  btnsContainer.id = "btns-container";
  const buttonProjects = document.createElement("button");
  buttonProjects.innerHTML = "Projects";
  buttonProjects.id = "projectsBtn";
  buttonProjects.className = "button-projects";
  btnsContainer.appendChild(buttonProjects);

  const studyTrip = document.createElement("button");
  studyTrip.innerHTML = "My study journey";
  studyTrip.id = "StudyJourneyBtn";
  studyTrip.className = "study-trip";
  btnsContainer.appendChild(studyTrip);

  projectSection.appendChild(btnsContainer);
  // add projects
  projectsApi.forEach((project) => {
    projectSection.appendChild(projectComponent(project));
  });

  return projectSection;
};
