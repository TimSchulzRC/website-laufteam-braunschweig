import { LinkIcon } from "@sanity/icons";
import { defineType } from "sanity";

export default defineType({
  name: "linkCard",
  title: "Link Card",
  type: "object",
  icon: LinkIcon,
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "description",
      title: "Beschreibung",
      type: "text",
    },
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
      name: "link",
      title: "Link",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
