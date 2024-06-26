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
    { name: "disableTitle", title: "Titel ausblenden", type: "boolean" },
    {
      name: "content",
      title: "Inhalt",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "backgroundColor",
      title: "Hintergrundfarbe",
      type: "simplerColor",
    },
    {
      name: "textColor",
      title: "Textfarbe",
      type: "simplerColor",
    },
  ],
  initialValue: {
    disableTitle: false,
    backgroundColor: {
      label: "Dunkelblau",
      value: "#30313E",
    },
    textColor: {
      label: "OffWhite",
      value: "#E7E5E2",
    },
  },
  preview: {
    select: {
      title: "title",
    },
  },
});
