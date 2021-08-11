import { state } from "../init/state.js";
import { projectComponent } from "../components/shared/projectComponent.js";

export const myStudyJourney = () => {
  const studyJourneyBtn = document.querySelector(".study-trip-toggle");
  studyJourneyBtn.classList.remove("study-trip-toggle");
  studyJourneyBtn.classList.add("study-trip");

  const projectsBtn = document.getElementById("projectsBtn");
  projectsBtn.classList.remove("button-projects");
  projectsBtn.classList.add("button-projects-toggle");

  const projectsEl = document.getElementById("projects");
  [...projectsEl.children].forEach((child) => {
    if (child.className === "project") {
      child.remove();
    }
  });
  state.projects.studyRepo.forEach((project) => {
    projectsEl.appendChild(projectComponent(project));
  });
};
