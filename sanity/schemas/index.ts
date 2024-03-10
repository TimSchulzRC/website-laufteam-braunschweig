import author from "./schema-author";
import blockContent from "./schema-blockContent";
import category from "./schema-category";
import linkCard from "./schema-linkCard";
import post from "./schema-post";
import runner from "./schema-runner";
import homepage from "./singletons/schema-homepage";
import teamPage from "./singletons/schema-team-page";

export const schemaTypes = [
  post,
  author,
  category,
  blockContent,
  runner,
  homepage,
  linkCard,
  teamPage,
];
