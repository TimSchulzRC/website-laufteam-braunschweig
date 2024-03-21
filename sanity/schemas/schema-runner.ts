import { defineType } from "sanity";

export default defineType({
  name: "runner",
  title: "Läufer",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "URL-Segment",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Bild",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
    },
  ],
});
