import LinkCard from "@/app/components/LinkCard";
import {
  getNewsPage,
  getPosts,
  portableTextPreview,
} from "@/sanity/sanity-utils";
import SubPageTopSections from "../SubPageTopSections";

export default async function News() {
  const pageData = await getNewsPage();
  const posts = await getPosts();

  return (
    <div>
      <SubPageTopSections pageData={pageData} />
      <section className="container grid lg:grid-cols-2 gap-10">
        {posts.map((post) => (
          <LinkCard
            disableMaxWidth
            className="col-2"
            key={post._id}
            title={post.title}
            imageURL={post.image.url}
            imageAlt={post.image.alt}
            href={`/news/${post.slug}`}
          >
            {portableTextPreview(post.body, 50)}
          </LinkCard>
        ))}
      </section>
    </div>
  );
}
