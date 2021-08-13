/**
 * The questions page.
 *
 * @returns {HTMLDivElement} A rendered thanks page.
 */

export const thanks = () => {
  const container = document.createElement("div");
  container.className = "thanks";
  const h2El = document.createElement("h2");
  h2El.innerHTML = "Thanks!";
  const pEl = document.createElement("p");
  pEl.innerHTML = "The form was submitted successfully. Return to main page:";
  const anchor = document.createElement("a");
  anchor.href = "https://rago89.github.io/rago89/";
  anchor.innerHTML = "https://rago89.github.io/rago89/";

  container.appendChild(h2El);
  container.appendChild(pEl);
  container.appendChild(anchor);

  return container;
};
