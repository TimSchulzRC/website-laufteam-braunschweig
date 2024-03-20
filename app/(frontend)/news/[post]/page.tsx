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
      <section className="container relative mb-20">
        <Image
          className="col aspect-square object-cover"
          src={post.image.url}
          alt={post.image.alt}
          width={post.image.width}
          height={post.image.height}
        />
        <div className="absolute bottom-0 z-10 w-full">
          <svg
            width="1500"
            height="100"
            viewBox="0 0 1500 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 100L1500 0V100H0Z" fill="#30313E" />
          </svg>
        </div>
      </section>
      <section className="container text-offWhite">
        <div className="col flex flex-col justify-center">
          <h1 className="text-5xl uppercase text-red">{post.title}</h1>
          <hr className="my-5 border-offWhite" />
        </div>
        <PortableText value={post.body} />
      </section>
      ;
    </>
  );
}
