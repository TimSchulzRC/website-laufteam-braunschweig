import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/Image";

type Props = {
  params: { post: string };
};

export default async function NewsPost({ params }: Props) {
  const post = await getPost(params.post);
  console.log(params);
  const date = new Date(post.publishedAt);
  return (
    <>
      <section className="container grid md:grid-cols-2 gap-10">
        <Image
          className="col aspect-square object-cover"
          src={post.image.url}
          alt={post.image.alt}
          width={post.image.width}
          height={post.image.height}
        />
        <div className="col flex flex-col justify-center">
          <h1 className="text-5xl uppercase text-red">{post.title}</h1>
          <hr className="my-5 border-offWhite" />
        </div>
      </section>
      <section className="container text-offWhite">
        <PortableText value={post.body} />
      </section>
      ;
    </>
  );
}
