import { defineType } from "sanity";

export default defineType({
  name: "team-page",
  title: "Teamseite",
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
    },
    {
      name: "imageAlt",
      title: "Bild-Alt",
      type: "string",
      validation: (Rule) => Rule.required(),
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
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
