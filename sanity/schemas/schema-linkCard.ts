import { defineType } from "sanity";

export default defineType({
  name: "linkCard",
  title: "Link Card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
