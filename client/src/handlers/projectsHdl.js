import { state } from "../init/state.js";
import { projectComponent } from "../components/shared/projectComponent.js";

export const projectsRepo = () => {
  const projectsBtn = document.getElementById("projectsBtn");
  const studyJourneyBtn = document.getElementById("StudyJourneyBtn");
  if (projectsBtn.className === "button-projects-toggle") {
    // update projects btn
    projectsBtn.classList.remove("button-projects-toggle");
    projectsBtn.classList.add("button-projects");
    // update study journey button
    studyJourneyBtn.classList.remove("study-trip");
    studyJourneyBtn.classList.add("study-trip-toggle");

    const projectsEl = document.getElementById("projects");
    [...projectsEl.children].forEach((child) => {
      if (child.className === "project") {
        child.remove();
      }
    });
    state.projects.studyProjects.forEach((project) => {
      projectsEl.appendChild(projectComponent(project));
    });
  }
};
