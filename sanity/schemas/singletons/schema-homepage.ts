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
      name: "headerImage",
      title: "Header Bild",
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
      name: "linkCards",
      title: "Link Karten",
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
