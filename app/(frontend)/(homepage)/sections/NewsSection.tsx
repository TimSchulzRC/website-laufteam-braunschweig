import NewsListItem from "@/components/NewsListItem";
import Section from "@/components/Section";
import { MOST_RECENT_POSTS_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { MOST_RECENT_POSTS_QUERY } from "@/sanity/queries";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import Link from "next/link";

export default async function NewsSection() {
  const recentPosts = await sanityFetch<MOST_RECENT_POSTS_QUERYResult>({
    query: MOST_RECENT_POSTS_QUERY,
  });

  return (
    <Section className="bg-darkBlue py-24">
      <div className="container text-white">
        <div className="flex items-baseline justify-between">
          <h2 className="font-bold">News</h2>
          <Link href="/news" className="link flex items-center gap-2">
            Alle News
            <DoubleArrowSharpIcon fontSize="small" />
          </Link>
        </div>
        <hr className="my-4" />
        <ul className="list-none">
          {recentPosts.map((post) => (
            <NewsListItem post={post} key={post._id} />
          ))}
        </ul>
      </div>
    </Section>
  );
}
