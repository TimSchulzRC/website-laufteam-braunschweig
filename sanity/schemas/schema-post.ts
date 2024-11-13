import { defineType } from "sanity";

export default defineType({
  name: "post",
  title: "News",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
    },
    {
      name: "slug",
      title: "URL-Segment",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
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
      name: "publishedAt",
      title: "Veröffentlicht am",
      type: "date",
      options: {
        dateFormat: "DD.MM.YYYY",
        calendarTodayLabel: "Heute",
      },
    },
    { name: "location", title: "Ort", type: "string" },
    {
      name: "runners",
      title: "Läufer",
      type: "array",
      of: [{ type: "reference", to: { type: "runner" } }],
    },
    {
      name: "body",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
