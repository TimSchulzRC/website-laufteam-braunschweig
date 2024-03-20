import { DocumentTextIcon, HomeIcon, UsersIcon } from "@sanity/icons";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import {
  filteredDocumentListItems,
  singletonDocumentListItem,
  singletonTools,
} from "sanity-plugin-singleton-tools";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  name: "default",
  title: "laufteam-braunschweig",

  projectId,
  dataset,

  basePath: "/admin",

  plugins: [
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
            S.divider(),
            ...filteredDocumentListItems({ S, context }),
          ]),
    }),
    singletonTools(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
