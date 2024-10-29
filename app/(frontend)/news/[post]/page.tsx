import ContentPageContentSection from "@/components/page-components/ContentPageContentSection";
import ContentPageTopSection from "@/components/page-components/ContentPageTopSection";
import { POST_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { POST_QUERY } from "@/sanity/queries";
import { portableTextPreview } from "@/sanity/sanity-utils";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { notFound } from "next/navigation";

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
  const date = new Date(post.publishedAt!).toLocaleDateString("de-DE");
  const location = post.location || "";
  const divider = date && location ? " | " : "";
  const subtitle = `${date}${divider}${location}`;
  return (
    <>
      <ContentPageTopSection image={post.image} />
      <ContentPageContentSection title={post.title} subtitle={subtitle}>
        {post.body && <PortableText value={post.body} />}
      </ContentPageContentSection>
    </>
  );
}
