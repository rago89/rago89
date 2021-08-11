import { data } from "../../data/data.js";

/**
 * Reverses a string.
 *
 * @param {obj} [obj={}] - A the api object.
 */

export const updateProject = (response) => {
  response.forEach((obj) => {
    const newObj = {};
    newObj.name = obj.name;
    newObj.description = obj.description;
    newObj.html_url = obj.html_url;
    newObj.homepage = obj.homepage;
    newObj.has_pages = obj.has_pages;

    if (obj.has_pages) {
      data.projects.studyProjects.push(newObj);
    } else {
      data.projects.studyRepo.push(newObj);
    }
  });
};
