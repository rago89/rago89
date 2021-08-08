import { showcase } from "../../layout/showcase.js";

/**
 * The home page.
 *
 * @returns {HTMLDivElement} A rendered home page.
 */

export const home = () => {
  const body = document.createElement("body");
  body.appendChild(showcase());

  return body;
};
