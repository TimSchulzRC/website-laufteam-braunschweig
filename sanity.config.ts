import LionIcon from "@/components/LionIcon";
import { schemaTypes } from "@/sanity/schemas";
import { DocumentTextIcon, HomeIcon, UsersIcon } from "@sanity/icons";
import { deDELocale } from "@sanity/locale-de-de";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { simplerColorInput } from "sanity-plugin-simpler-color-input";
import {
  filteredDocumentListItems,
  singletonDocumentListItem,
  singletonTools,
} from "sanity-plugin-singleton-tools";
import { structureTool } from "sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "laufteam-braunschweig",
  title: "Laufteam Braunschweig",
  icon: LionIcon,

  projectId,
  dataset,

  basePath: "/admin",

  plugins: [
    deDELocale(),
    structureTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            singletonDocumentListItem({
              S,
              context,
              type: "homepage",
              id: "homepage",
              icon: HomeIcon,
            }),
            singletonDocumentListItem({
              S,
              context,
              type: "team-page",
              id: "team-page",
              icon: UsersIcon,
            }),
            singletonDocumentListItem({
              S,
              context,
              type: "news-page",
              id: "news-page",
              icon: DocumentTextIcon,
            }),
            singletonDocumentListItem({
              S,
              context,
              type: "aboutUs-page",
              id: "aboutUs-page",
              icon: DocumentTextIcon,
            }),
            singletonDocumentListItem({
              S,
              context,
              type: "contact-page",
              id: "contact-page",
              icon: DocumentTextIcon,
            }),
            singletonDocumentListItem({
              S,
              context,
              type: "datenschutz-page",
              id: "datenschutz-page",
              icon: DocumentTextIcon,
            }),
            singletonDocumentListItem({
              S,
              context,
              type: "impressum-page",
              id: "impressum-page",
              icon: DocumentTextIcon,
            }),

            S.divider(),
            ...filteredDocumentListItems({ S, context }),
          ]),
    }),
    singletonTools(),
    visionTool(),
    simplerColorInput({
      defaultColorFormat: "hsl",
      defaultColorList: [
        { label: "Rot", value: "#BF2C38" },
        { label: "Orange", value: "#C9824A" },
        { label: "Dunkelblau", value: "#30313E" },
        { label: "Grau", value: "#86848A" },
        { label: "OffWhite", value: "#E7E5E2" },
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
