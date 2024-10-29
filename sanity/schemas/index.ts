import author from "@/sanity/schemas/schema-author";
import linkCard from "@/sanity/schemas/schema-linkCard";
import post from "@/sanity/schemas/schema-post";
import runner from "@/sanity/schemas/schema-runner";
import section from "@/sanity/schemas/schema-section";
import aboutUsPage from "@/sanity/schemas/singletons/schema-aboutUs-page";
import contact from "@/sanity/schemas/singletons/schema-contact-page";
import datenschutz from "@/sanity/schemas/singletons/schema-datenschutz";
import homepage from "@/sanity/schemas/singletons/schema-homepage";
import impressum from "@/sanity/schemas/singletons/schema-impressum";
import newsPage from "@/sanity/schemas/singletons/schema-news-page";
import teamPage from "@/sanity/schemas/singletons/schema-team-page";

export const schemaTypes = [
  post,
  author,
  runner,
  homepage,
  linkCard,
  teamPage,
  newsPage,
  aboutUsPage,
  section,
  contact,
  datenschutz,
  impressum,
];
