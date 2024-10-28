import { POST_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { POST_QUERY } from "@/sanity/queries";
import { portableTextPreview } from "@/sanity/sanity-utils";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { notFound } from "next/navigation";
import ContentPageContentSection from "../../ContentPageContentSection";
import ContentPageTopSection from "../../ContentPageTopSection";

type Props = {
  params: { post: string };
};

export async function generateMetadata({ params }: Props) {
  const post = await sanityFetch<POST_QUERYResult>({
    query: POST_QUERY,
    params: { slug: params.post },
  });
  if (!post) return {};
  return {
    title: post.title,
    description: post.body
      ? portableTextPreview(post.body as PortableTextBlock[], 50)
      : post.title,
  };
}

export default async function NewsPost({ params }: Props) {
  const post = await sanityFetch<POST_QUERYResult>({
    query: POST_QUERY,
    params: { slug: params.post },
  });
  if (!post) return notFound();
  const date = new Date(post.publishedAt!);
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
        {post.body && <PortableText value={post.body} />}
      </ContentPageContentSection>
    </>
  );
}
