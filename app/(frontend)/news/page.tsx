import LinkCard from "@/app/components/LinkCard";
import {
  getNewsPage,
  getPosts,
  portableTextPreview,
} from "@/sanity/sanity-utils";
import PostData from "@/types/PostData";
import SubPageTopSections from "../SubPageTopSections";

export const revalidate = 60;

export async function generateMetadata() {
  const pageData = await getNewsPage();
  return {
    title: pageData.title,
    description: pageData.infotext,
  };
}

export default async function News() {
  const pageData = await getNewsPage();
  const posts = await getPosts();

  const sortByPublishedAt = (a: PostData, b: PostData): number =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

  return (
    <>
      <SubPageTopSections pageData={pageData} />
      <section className="container grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {posts.sort(sortByPublishedAt).map((post) => {
          const date = new Date(post.publishedAt);
          return (
            <LinkCard
              disableMaxWidth
              className="col-2"
              key={post._id}
              title={post.title}
              subtitle={
                post.publishedAt &&
                `${post.location ? post.location : ""} ${
                  post.location && post.publishedAt ? ", " : ""
                } ${post.publishedAt && date.toLocaleDateString("de-DE")}`
              }
              imageURL={post.image.url}
              imageAlt={post.image.alt}
              href={`/news/${post.slug}`}
            >
              {portableTextPreview(post.body, 50)}
            </LinkCard>
          );
        })}
      </section>
    </>
  );
}
