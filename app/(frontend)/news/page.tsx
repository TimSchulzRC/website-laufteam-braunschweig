import LinkCard from "@/app/components/LinkCard";
import { blocksToText, getPosts } from "@/sanity/sanity-utils";

export default async function News() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <LinkCard
          key={post._id}
          title={""}
          imageURL={""}
          imageAlt={""}
          href={""}
        >
          {blocksToText(post.body)}
        </LinkCard>
      ))}
    </div>
  );
}
