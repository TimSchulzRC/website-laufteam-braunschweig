import author from "./schema-author";
import blockContent from "./schema-blockContent";
import linkCard from "./schema-linkCard";
import post from "./schema-post";
import runner from "./schema-runner";
import homepage from "./singletons/schema-homepage";
import newsPage from "./singletons/schema-news-page";
import teamPage from "./singletons/schema-team-page";

export const schemaTypes = [
  post,
  author,
  blockContent,
  runner,
  homepage,
  linkCard,
  teamPage,
  newsPage,
];
