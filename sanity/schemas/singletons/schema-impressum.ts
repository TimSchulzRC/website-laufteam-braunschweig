import { defineType } from "sanity";

export default defineType({
  name: "impressum-page",
  title: "Impressum",
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
