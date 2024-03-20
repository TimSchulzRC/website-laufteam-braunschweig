import Homepage from "@/types/Homepage";
import PostData from "@/types/PostData";
import RunnerData from "@/types/RunnerData";
import TeamPageData from "@/types/TeamPageData";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getPosts(): Promise<PostData[]> {
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
        body
    }`
  );
}

export async function getRunners(): Promise<RunnerData[]> {
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

export async function getTeamPage(): Promise<TeamPageData> {
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

export function blocksToText(blocks) {
  return blocks.map((block) =>
    block.children.map((child) => child.text).join("")
  );
}
