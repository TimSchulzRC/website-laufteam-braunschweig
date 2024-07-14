import { getPost, portableTextPreview } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import ContentPageContentSection from "../../ContentPageContentSection";
import ContentPageTopSection from "../../ContentPageTopSection";

type Props = {
  params: { post: string };
};

export async function generateMetadata({ params }: Props) {
  const post = await getPost(params.post);
  return {
    title: post.title,
    description: portableTextPreview(post.body, 50),
  };
}

export default async function NewsPost({ params }: Props) {
  const post = await getPost(params.post);
  if (!post) return notFound();
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
