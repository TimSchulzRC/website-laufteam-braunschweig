import { defineType } from "sanity";

export default defineType({
  name: "aboutUs-page",
  title: "Über-uns-Seite",
  type: "document",
  options: {
    singleton: true,
  },
  fields: [
    {
      name: "image",
      title: "Bild",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt-Text",
          type: "string",
          options: {
            isHighlighted: true,
          },
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Untertitel",
      type: "string",
    },
    {
      name: "infotext",
      title: "Infotext",
      type: "text",
    },
    {
      name: "sections",
      title: "Inhalt-Abschnitte",
      type: "array",
      of: [{ type: "section" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
