import LinkCard from "@/app/components/LinkCard";
import { NEWS_PAGE_QUERYResult, POSTS_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { NEWS_PAGE_QUERY, POSTS_QUERY } from "@/sanity/queries";
import { portableTextPreview } from "@/sanity/sanity-utils";
import SubPageData from "@/types/SubPageData";
import { PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";
import SubPageTopSections from "../SubPageTopSections";

export const revalidate = 60;

export async function generateMetadata() {
  const pageData = await sanityFetch<NEWS_PAGE_QUERYResult>({
    query: NEWS_PAGE_QUERY,
  });
  if (!pageData) return;
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
    b: POSTS_QUERYResult[0]
  ): number =>
    new Date(b.publishedAt!).getTime() - new Date(a.publishedAt!).getTime();
  if (!pageData) return notFound();
  return (
    <>
      <SubPageTopSections pageData={pageData as SubPageData} />
      <section className="container grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {posts.sort(sortByPublishedAt).map((post) => {
          const date = new Date(post.publishedAt!);
          return (
            <LinkCard
              disableMaxWidth
              className="col-2"
              key={post._id}
              title={post.title || ""}
              subtitle={
                post.publishedAt ??
                `${post.location ? post.location : ""} ${
                  post.location && post.publishedAt ? ", " : ""
                } ${post.publishedAt && date.toLocaleDateString("de-DE")}`
              }
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
