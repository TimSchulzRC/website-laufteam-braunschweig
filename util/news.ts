import { POST_QUERYResult } from "@/sanity.types";

export function getSubtitleFromPost(post: POST_QUERYResult): string {
  if (!post) return "";
  const date = new Date(post.publishedAt!).toLocaleDateString("de-DE");
  const location = post.location || "";
  const divider = date && location ? " | " : "";
  return `${date}${divider}${location}`;
}
