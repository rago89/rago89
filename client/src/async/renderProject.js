import { state } from "../init/state.js";
import { updateProject } from "../logic/processData.js";
import { projects } from "../components/layout/projects.js";
import { myStudyJourney } from "../handlers/myStudyJourney.js";
import { projectsRepo } from "../handlers/projectsHdl.js";

export const renderProject = (response) => {
  updateProject(response);
  const bodySection = document.querySelector(".body-section");
  bodySection.appendChild(projects(state.projects.studyProjects));
  // bodySection.appendChild(contactMe);
  // query project buttons
  const projectsBtn = document.getElementById("projectsBtn");
  const studyJourneyBtn = document.getElementById("StudyJourneyBtn");
  // update study journey button
  if (projectsBtn.className === "button-projects") {
    studyJourneyBtn.classList.remove("study-trip");
    studyJourneyBtn.classList.add("study-trip-toggle");
  }
  // add event listener to buttons
  studyJourneyBtn.addEventListener("click", myStudyJourney);
  projectsBtn.addEventListener("click", projectsRepo);

  return bodySection;
};
