import { state } from "../../../init/state.js";
import { typicodeResource } from "../../../api-calls/repsGithub.js";
import { updateProject } from "../../../logic/processData.js";
import { showcase } from "../../layout/showcase.js";
import { aboutMe } from "../../layout/about-me.js";
import { skills } from "../../layout/skills.js";
import { projects } from "../../layout/projects.js";
import { myStudyJourney } from "../../../handlers/myStudyJourney.js";
import { projectsRepo } from "../../../handlers/projectsHdl.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */

export const home = () => {
  const bodySection = document.createElement("div");
  bodySection.className = "body-section";
  bodySection.appendChild(showcase());
  bodySection.appendChild(aboutMe());
  bodySection.appendChild(skills());

  const dataFromApi = typicodeResource("users", "rago89", "repos");
  dataFromApi.then((response) => {
    updateProject(response);
    bodySection.appendChild(projects(state.projects.studyProjects));
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
  });

  return bodySection;
};
