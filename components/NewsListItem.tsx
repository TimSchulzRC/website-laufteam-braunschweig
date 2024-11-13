"use client";

import { MOST_RECENT_POSTS_QUERYResult } from "@/sanity.types";
import clientConfig from "@/sanity/config/client-config";
import { getSubtitleFromPost } from "@/util/news";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: MOST_RECENT_POSTS_QUERYResult[0];
};

export default function NewsListItem({ post }: Props) {
  const imageProps = useNextSanityImage(clientConfig, post.image);

  if (!post) return null;

  return (
    <li
      key={post._id}
      className="mb-8 grid grid-cols-8 items-center gap-8 text-offWhite transition-all ease-in-out hover:text-orange [&_img]:hover:scale-105"
    >
      <Link href={`/news/${post.slug}`} className="col-span-6 flex flex-col">
        <span className="text-sm text-offWhite opacity-70">
          {getSubtitleFromPost(post)}
        </span>
        <span className="text-2xl">{post.title}</span>
      </Link>
      {post.image && imageProps && (
        <Image
          {...imageProps}
          alt={post.image.alt || ""}
          className="col-span-2 col-start-7 h-16 w-16 object-cover transition-all ease-in-out md:col-span-1 md:col-start-8"
        />
      )}
    </li>
  );
}
