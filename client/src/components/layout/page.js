import { header } from "./header.js";
import { footer } from "./footer.js";
import { data } from "../../../data/data.js";

/**
 * The page layout component.
 *
 * @param {Function | HTMLElement} bodyComponent - The body for the newly rendered page.
 * @param {object} routes - The application's routes, for the navbar.
 * @returns {HTMLDivElement} A rendered page element.
 * @throws {TypeError} When the bodyComponent is not a function or DOM element.
 */

export const page = (bodyComponent) => {
  const container = document.querySelector("#myScript");

  container.before(header(data.navInfo));
  if (typeof bodyComponent === "function") {
    container.before(bodyComponent);
  } else if (bodyComponent instanceof Element) {
    container.before(bodyComponent);
  } else {
    throw new TypeError("body is not a function or a DOM element");
  }
  container.before(footer());
};
