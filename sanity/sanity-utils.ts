import { createClient, groq } from "next-sanity";

export async function getPosts(): Promise<any> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

  const client = createClient({
    projectId,
    dataset,
  });

  return client.fetch(
    groq`*[_type == "post" ]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        runners[]->{
            name
        },
        "body": body
    }`
  );
}
