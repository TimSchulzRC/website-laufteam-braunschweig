import { defineType } from "sanity";

export default defineType({
  name: "contact-page",
  title: "Kontaktseite",
  type: "document",
  options: {
    singleton: true,
  },
  fields: [
    {
      name: "contactInformation",
      title: "Kontaktinformationen",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
});
