import { defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Startseite",
  type: "document",
  options: {
    singleton: true,
  },
  fields: [
    // {
    //   name: "ctaTitle",
    //   title: "CTA Title",
    //   type: "string",
    // },
    // {
    //   name: "ctaDescription",
    //   title: "CTA Description",
    //   type: "text",
    // },
    // {
    //   name: "ctaLink",
    //   title: "CTA Link",
    //   type: "string",
    // },
    // {
    //   name: "ctaLinkText",
    //   title: "CTA Link Text",
    //   type: "string",
    // },
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
