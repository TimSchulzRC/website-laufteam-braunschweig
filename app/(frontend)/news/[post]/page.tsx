import ContentPageContentSection from "@/components/page-components/ContentPageContentSection";
import ContentPageTopSection from "@/components/page-components/ContentPageTopSection";
import { POST_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { POST_QUERY } from "@/sanity/queries";
import { portableTextPreview } from "@/sanity/sanity-utils";
import { getSubtitleFromPost } from "@/util/news";
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
  return (
    <>
      <ContentPageTopSection image={post.image} imageAlt={post.image?.alt} />
      <ContentPageContentSection
        title={post.title}
        subtitle={getSubtitleFromPost(post)}
      >
        {post.body && <PortableText value={post.body} />}
      </ContentPageContentSection>
    </>
  );
}
