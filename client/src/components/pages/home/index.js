import { showcase } from "../../layout/showcase.js";
import { aboutMe } from "../../layout/about-me.js";

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

  return bodySection;
};
