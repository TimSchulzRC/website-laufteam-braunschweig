import Homepage from "@/types/Homepage";
import PostData from "@/types/PostData";
import RunnerData from "@/types/RunnerData";
import SubPageData from "@/types/SubPageData";
import TeamPageData from "@/types/TeamPageData";
import { createClient, groq, PortableTextBlock } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getPosts(): Promise<PostData[]> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "post" ]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": {
            "url": image.asset->url,
            "width": image.asset->metadata.dimensions.width,
            "height": image.asset->metadata.dimensions.height,
            "alt": imageAlt
        },
        publishedAt,
        location,
        runners[]->{
            name
        },
        body
    }`
  );
}

export async function getPost(slug: string): Promise<PostData> {
  const client = createClient(clientConfig);

  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        "image": {
            "url": image.asset->url,
            "width": image.asset->metadata.dimensions.width,
            "height": image.asset->metadata.dimensions.height,
            "alt": imageAlt
        },
        publishedAt,
        location,
        runners[]->{
            name
        },
        body
    }`,
    { slug }
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
        bio,
        infotext,
        birthDate
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

export async function getNewsPage(): Promise<SubPageData> {
  const client = createClient(clientConfig);
  return client.fetch(
    groq`*[_type == "news-page"][0]{
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

export function portableTextToString(blocks: PortableTextBlock[]): string {
  return blocks
    .map((block) => block.children.map((child) => child.text).join(""))
    .join("");
}

export function portableTextPreview(
  blocks: PortableTextBlock[],
  length?: number
): string {
  return (
    portableTextToString(blocks)
      .split(" ")
      .slice(0, length || 20)
      .join(" ") + " ..."
  );
}
