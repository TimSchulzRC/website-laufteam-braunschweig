import LinkCard from "@/components/LinkCard";
import SubPageTopSections from "@/components/page-components/SubPageTopSections";
import { NEWS_PAGE_QUERYResult, POSTS_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { NEWS_PAGE_QUERY, POSTS_QUERY } from "@/sanity/queries";
import { portableTextPreview } from "@/sanity/sanity-utils";
import SubPageData from "@/types/SubPageData";
import { PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateMetadata() {
  const pageData = await sanityFetch<NEWS_PAGE_QUERYResult>({
    query: NEWS_PAGE_QUERY,
  });
  if (!pageData) return {};
  return {
    title: pageData.title,
    description: pageData.infotext,
  };
}

export default async function News() {
  const pageData = await sanityFetch<NEWS_PAGE_QUERYResult>({
    query: NEWS_PAGE_QUERY,
  });
  const posts = await sanityFetch<POSTS_QUERYResult>({
    query: POSTS_QUERY,
  });

  const sortByPublishedAt = (
    a: POSTS_QUERYResult[0],
    b: POSTS_QUERYResult[0],
  ): number =>
    new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime();
  if (!pageData) return notFound();
  return (
    <>
      <SubPageTopSections pageData={pageData as SubPageData} />
      <section className="container grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {posts.sort(sortByPublishedAt).map((post) => {
          const date = new Date(post.publishedAt!).toLocaleDateString("de-DE");
          const location = post.location || "";
          const divider = date && location ? " | " : "";
          return (
            <LinkCard
              disableMaxWidth
              className="col-2"
              key={post._id}
              title={post.title || ""}
              subtitle={`${date}${divider}${location}`}
              imageURL={post.image.url || ""}
              imageAlt={post.image.alt || ""}
              href={`/news/${post.slug}`}
            >
              {portableTextPreview(post.body as PortableTextBlock[], 50)}
            </LinkCard>
          );
        })}
      </section>
    </>
  );
}
