import { defineType } from "sanity";

export default defineType({
  name: "section",
  title: "Abschnitt",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "content",
      title: "Inhalt",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
