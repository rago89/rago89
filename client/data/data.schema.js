export const schema = {
  title: "portfolio",
  description: "data required to render my portfolio",
  type: "object",
  required: ["navInfo", "socialContact", "skills", "projects"],
  properties: {
    navInfo: {
      type: "array",
      description: "the array of objects with tile and link for navbar",
      items: {
        type: "object",
        description: "with tile and link for navbar",
        required: ["title", "link"],
        properties: {
          title: {
            type: "string",
            description: "the title for the navigation bar",
          },
          link: {
            type: "string",
            description: "the path or link to redirect",
          },
        },
      },
    },
    socialContact: {
      type: "array",
      items: {
        type: "object",
        description: "with tile and link for navbar",
        required: ["class", "href", "src", "alt"],
        properties: {
          class: {
            type: "string",
            description: "the class for styling",
          },
          href: {
            type: "string",
            description: "link of the web",
          },
          src: {
            type: "string",
            description: "path of the img",
          },
          alt: {
            type: "string",
            description: "description of the img",
          },
        },
      },
    },
    skills: {
      type: "array",
      items: {
        type: "object",
        description: "array of objects to load the skill",
        required: ["class", "type", "path", "alt"],
        properties: {
          class: {
            type: "string",
            description: "the class for styling",
          },
          type: {
            type: "string",
            description: "link of the web",
          },
          path: {
            type: "string",
            description: "path of the img",
          },
          alt: {
            type: "string",
            description: "description of the img",
          },
        },
      },
    },
    projects: {
      type: "object",
      required: ["studyProjects", "studyRepo"],
      properties: {
        studyProjects: {
          type: "array",
          items: {
            type: "object",
            description: "array of project objects",
            required: [
              "name",
              "description",
              "html_url",
              "homepage",
              "has_pages",
            ],
            properties: {
              name: {
                type: "string",
                description: "Tile of the project",
              },
              description: {
                type: "string",
                description: "project's description",
              },
              html_url: {
                type: "string",
                description: "link from github",
              },
              homepage: {
                type: "string",
                description: "link to deploy page",
              },
              has_pages: {
                type: "string",
                description: "link to deploy page",
              },
            },
          },
        },
        studyRepo: {
          type: "array",
          items: {
            type: "object",
            description: "array of project objects",
            required: [
              "name",
              "description",
              "html_url",
              "homepage",
              "has_pages",
            ],
            properties: {
              name: {
                type: "string",
                description: "Tile of the project",
              },
              description: {
                type: "string",
                description: "project's description",
              },
              html_url: {
                type: "string",
                description: "link from github",
              },
              homepage: {
                type: "string",
                description: "link to deploy page",
              },
              has_pages: {
                type: "string",
                description: "link to deploy page",
              },
            },
          },
        },
      },
    },
  },
};
