import { socialContact } from "../shared/socialContact.js";
import { state } from "../../init/state.js";

export const showcase = () => {
  const showcase = document.createElement("section");
  showcase.id = "showcase";
  const showcaseContent = document.createElement("div");
  showcaseContent.className = "showcase-content";

  const h2Title = document.createElement("h2");
  h2Title.innerHTML = "Hi I’m Rafael";
  showcaseContent.appendChild(h2Title);

  const pEl = document.createElement("p");
  pEl.innerHTML = " A Web Developer Student";
  showcaseContent.appendChild(pEl);

  const socialDiv = document.createElement("div");
  socialDiv.className = "social";

  const h3Title = document.createElement("h3");
  h3Title.innerHTML = "Follow me";
  socialDiv.appendChild(h3Title);

  const breakLine = document.createElement("br");
  socialDiv.appendChild(breakLine);

  state.socialContact.forEach((obj) => {
    socialDiv.appendChild(socialContact(obj));
  });

  showcaseContent.appendChild(socialDiv);

  const showcaseImg = document.createElement("img");
  showcaseImg.className = "showcase-img";
  showcaseImg.src = "./client/public/images/technology-png-transparent.png";
  showcaseImg.alt = "Technology image with tablets, notebooks and mobiles";

  showcase.appendChild(showcaseContent);
  showcase.appendChild(showcaseImg);

  return showcase;
};
