import { defineType } from "sanity";

export default defineType({
  name: "news-page",
  title: "News Page",
  type: "document",
  options: {
    singleton: true,
  },
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageAlt",
      title: "Image Alt",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "infotext",
      title: "Infotext",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
