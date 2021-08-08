/**
 * The shared navbar.
 *
 * @param {array} navLinks  - An array of  objects, each object contains title and link for the anchor see /src/routes.js.
 * @returns {HTMLDivElement} A rendered nav bar element.
 */

export const header = (obj) => {
  const headerEl = document.createElement("header");
  headerEl.id = "main-header";
  headerEl.className = "headerClass";
  const imageHeaderContainer = document.createElement("div");
  imageHeaderContainer.className = "imageHeaderContainer";

  const img = document.createElement("img");
  img.src = "./client/public/images/photo-profil-def.png";
  img.alt = "Rafael profile photo";
  img.className = "rafael-profile";
  imageHeaderContainer.appendChild(img);

  const titleH1 = document.createElement("h1");
  titleH1.innerHTML = "Rafael Garcia";
  imageHeaderContainer.appendChild(titleH1);

  const navbar = document.createElement("nav");
  navbar.id = "navbar";

  const ulEl = document.createElement("ul");

  for (const argument of obj) {
    const liEl = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.innerHTML = argument.title;
    anchor.href = argument.link;
    liEl.appendChild(anchor);
    ulEl.appendChild(liEl);
  }

  navbar.appendChild(ulEl);
  headerEl.appendChild(imageHeaderContainer);
  headerEl.appendChild(navbar);

  return headerEl;
};
