import { getPosts } from "@/sanity/sanity-utils";

export default async function News() {
  const posts = await getPosts();
  console.log(posts);
  return <div>{posts.map((post: any) => post.title)}</div>;
}
