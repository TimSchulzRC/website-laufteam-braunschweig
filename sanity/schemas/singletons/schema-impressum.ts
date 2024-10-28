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
      name: "impressum",
      title: "Impressum",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
