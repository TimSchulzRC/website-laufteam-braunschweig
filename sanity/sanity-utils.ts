import { Runner } from "@/types/Runner";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getPosts(): Promise<any> {
  const client = createClient(clientConfig);

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

export async function getRunners(): Promise<Runner[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "runner" ]{
        _id,
        name,
        "slug": slug.current,
        "imageURL": image.asset->url,
        "bio": bio
    }`
  );
}
