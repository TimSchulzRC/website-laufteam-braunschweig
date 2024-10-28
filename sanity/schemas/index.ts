import author from "./schema-author";
import linkCard from "./schema-linkCard";
import post from "./schema-post";
import runner from "./schema-runner";
import section from "./schema-section";
import aboutUsPage from "./singletons/schema-aboutUs-page";
import datenschutz from "./singletons/schema-datenschutz";
import homepage from "./singletons/schema-homepage";
import newsPage from "./singletons/schema-news-page";
import teamPage from "./singletons/schema-team-page";

export const schemaTypes = [
  post,
  author,
  runner,
  homepage,
  linkCard,
  teamPage,
  newsPage,
  aboutUsPage,
  datenschutz,
  section,
];
