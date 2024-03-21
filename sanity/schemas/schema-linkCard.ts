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
