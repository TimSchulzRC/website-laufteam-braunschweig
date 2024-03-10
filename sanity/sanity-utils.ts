import Homepage from "@/types/Homepage";
import Runner from "@/types/Runner";
import TeamPage from "@/types/TeamPage";
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

export async function getHomepage(): Promise<Homepage> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "homepage"][0]{
      linkCards[]{
        title,
        description,
        "imageURL": image.asset->url,
        link
      }
    }`
  );
}

export async function getTeamPage(): Promise<TeamPage> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "team-page"][0]{
      title,
      subtitle,
      infotext,
      "image": {
        "url": image.asset->url,
        "width": image.asset->metadata.dimensions.width,
        "height": image.asset->metadata.dimensions.height,
        "alt": imageAlt
      }
    }`
  );
}
