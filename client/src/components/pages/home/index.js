import { typicodeResource } from "../../../api-calls/repsGithub.js";
import { showcase } from "../../layout/showcase.js";
import { aboutMe } from "../../layout/about-me.js";
import { skills } from "../../layout/skills.js";
import { contactMe } from "../../layout/contact-me.js";
import { renderProject } from "../../../async/renderProject.js";

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

  (async () => {
    const dataFromApi = await typicodeResource("users", "rago89", "repos");
    renderProject(dataFromApi);
    bodySection.appendChild(contactMe());
  })();

  return bodySection;
};
