import { defineType } from "sanity";

export default defineType({
  name: "datenschutz-page",
  title: "Datenschutzerklärung",
  type: "document",
  options: {
    singleton: true,
  },
  fields: [
    {
      name: "datenschutzerklaerung",
      title: "Datenschutzerklärung",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
