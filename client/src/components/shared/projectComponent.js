export const projectComponent = (project) => {
  const projectContainer = document.createElement("div");
  projectContainer.className = "project";
  const projectTitle = document.createElement("h3");
  projectTitle.innerHTML = project.name;
  projectContainer.appendChild(projectTitle);

  const projectDescription = document.createElement("p");
  projectDescription.innerHTML = project.description;
  projectContainer.appendChild(projectDescription);

  // set github image link
  const gitHubAnchor = document.createElement("a");
  gitHubAnchor.href = project.html_url;
  const gitHubImg = document.createElement("img");
  gitHubImg.className = "mini-img-project";
  gitHubImg.src = "client/public/images/octocat.png";
  gitHubImg.alt = "Github Logo";
  gitHubAnchor.appendChild(gitHubImg);
  projectContainer.appendChild(gitHubAnchor);

  // set github image link
  if (project.homepage) {
    const openProjectAnchor = document.createElement("a");
    openProjectAnchor.href = project.homepage;
    const openProjectImg = document.createElement("img");
    openProjectImg.className = "mini-img-project";
    openProjectImg.src =
      "client/public/images/1024px-External_link_font_awesome.svg.png";
    openProjectImg.alt = "Open Link Logo";
    openProjectAnchor.appendChild(openProjectImg);
    projectContainer.appendChild(openProjectAnchor);
  }

  return projectContainer;
};
