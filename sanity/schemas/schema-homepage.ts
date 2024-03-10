import { defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Startseite",
  type: "document",
  options: {
    singleton: true,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "linkCards",
      title: "Link Cards",
      type: "array",
      of: [{ type: "linkCard" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
