import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { post: string };
};

export default async function NewsPost({ params }: Props) {
  const post = await getPost(params.post);
  console.log(params);
  const date = new Date(post.publishedAt);
  return (
    <>
      <section className="container max-w-[800px] relative mb-20">
        <Image
          className="col aspect-auto max-h-[500px] object-cover"
          src={post.image.url}
          alt={post.image.alt}
          width={post.image.width}
          height={post.image.height}
        />

        <div className="absolute container bottom-0 left-1/2 -translate-x-1/2">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 1500 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="crispEdges"
          >
            <path d="M0 100L1500 0V100H0Z" fill="#30313E" />
          </svg>
        </div>
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
      </section>
      <section className="container md:max-w-[800px] text-offWhite">
        <div className="col flex flex-col justify-center">
          <h1 className="text-4xl uppercase text-red">{post.title}</h1>
          <hr className="my-5 border-offWhite" />
        </div>
        <PortableText value={post.body} />
      </section>
      ;
    </>
  );
}
