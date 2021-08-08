export const schema = {
  title: "portfolio",
  description: "data required to render my portfolio",
  type: "object",
  required: ["navInfo", "socialContact"],
  properties: {
    navInfo: {
      type: "array",
      description: "the array of objects with tile and link for navbar",
      items: {
        type: "object ",
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
        type: "object ",
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
  },
};
