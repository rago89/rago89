/**
 * The shared footer.
 *
 * @returns {HTMLDivElement} A rendered footer element.
 */
export const footer = () => {
  const footerEl = document.createElement("footer");
  footerEl.id = "main-footer";
  const paragraph = document.createElement("p");
  paragraph.innerHTML = "Copyright &copy; 2020 | Rafael Garcia";
  footerEl.appendChild(paragraph);

  return footerEl;
};
