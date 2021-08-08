import { showcase } from "../../layout/showcase.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */

export const home = () => {
  const bodySection = document.createElement("div");
  bodySection.className = "body-section";
  bodySection.appendChild(showcase());

  return bodySection;
};
