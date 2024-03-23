import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import ContentPageContentSection from "../../ContentPageContentSection";
import ContentPageTopSection from "../../ContentPageTopSection";

type Props = {
  params: { post: string };
};

export default async function NewsPost({ params }: Props) {
  const post = await getPost(params.post);
  console.log(params);
  const date = new Date(post.publishedAt);
  return (
    <>
      <ContentPageTopSection image={post.image}>
        <div className="absolute container bottom-0 right-0 text-offWhite flex justify-end">
          {post.location && post.location}
          {post.location && post.publishedAt && ", "}
          {post.publishedAt &&
            date.toLocaleDateString("de-DE", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
        </div>
      </ContentPageTopSection>
      <ContentPageContentSection title={post.title}>
        <PortableText value={post.body} />
      </ContentPageContentSection>
    </>
  );
}
