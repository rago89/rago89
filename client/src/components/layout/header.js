/**
 * The shared navbar.
 *
 * @param {array} navLinks  - An array of  objects, each object contains title and link for the anchor see /src/routes.js.
 * @returns {HTMLDivElement} A rendered nav bar element.
 */

export const header = (obj) => {
  const headerEl = document.createElement("header");
  headerEl.id = "main-header";
  headerEl.classList.add(
    "row",
    "center-xs",
    "start-sm",
    "start-md",
    "start-lg",
    "middle-xs",
    "middle-sm",
    "middle-md",
    "middle-lg",
    "top-xs",
    "top-md",
    "top-sm",
    "top-lg"
  );
  const img = document.createElement("img");
  img.src = "../../../public/images/photo-profil-def.png";
  img.alt = "Rafael profile photo";
  img.className = "rafael-profile";
  headerEl.appendChild(img);
  const navbar = document.createElement("nav");
  navbar.id = "navbar";
  navbar.classList.add(
    "col-xs-12",
    "col-sm-12",
    "col-md-8",
    "col-lg-8",
    "end-lg",
    "end-md"
  );
  for (const argument of obj) {
    const anchor = document.createElement("a");
    anchor.innerHTML = argument.title;
    anchor.href = argument.link;
    navbar.appendChild(anchor);
  }

  headerEl.appendChild(navbar);
  return headerEl;
};
