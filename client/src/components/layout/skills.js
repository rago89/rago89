import { state } from "../../init/state.js";

export const skills = () => {
  const skillsSection = document.createElement("section");
  skillsSection.id = "skills";

  const h2El = document.createElement("h2");
  h2El.innerHTML = "Skills";
  skillsSection.appendChild(h2El);

  state.skills.forEach((skill) => {
    const logoContainer = document.createElement("div");
    logoContainer.className = skill.class;

    const imgEl = document.createElement("img");
    imgEl.src = skill.path;
    imgEl.alt = skill.alt;
    logoContainer.appendChild(imgEl);

    const h4El = document.createElement("h4");
    h4El.innerHTML = skill.type.toUpperCase();
    logoContainer.appendChild(h4El);

    skillsSection.appendChild(logoContainer);
  });

  return skillsSection;
};
