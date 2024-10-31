import { POST_QUERYResult } from "@/sanity.types";
import { getSubtitleFromPost } from "@/util/news";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: POST_QUERYResult;
};

export default function NewsListItem({ post }: Props) {
  if (!post) return null;

  return (
    <li
      key={post._id}
      className="mb-8 grid grid-cols-8 items-center gap-8 text-offWhite"
    >
      <Link
        href={`/news/${post.slug}`}
        className="col-span-7 flex flex-col md:col-span-6"
      >
        <span className="text-sm opacity-70">{getSubtitleFromPost(post)}</span>
        <span className="text-2xl">{post.title}</span>
      </Link>
      {post.image.url && (
        <Image
          className="h-16 w-16 object-cover md:col-start-8"
          src={post.image.url}
          alt={post.image.alt || ""}
          width={post.image.width || 100}
          height={post.image.height || 100}
        />
      )}
    </li>
  );
}
