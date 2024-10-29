import clientConfig from "@/sanity/config/client-config";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "next-sanity";

const builder = imageUrlBuilder(clientConfig);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function portableTextToString(blocks: PortableTextBlock[]): string {
  if (!blocks || !blocks.length) return "";
  return blocks
    .map((block) => block.children.map((child) => child.text).join(""))
    .join("");
}

export function portableTextPreview(
  blocks: PortableTextBlock[],
  length?: number,
): string {
  if (!blocks || !blocks.length) return "";
  return (
    portableTextToString(blocks)
      .split(" ")
      .slice(0, length || 20)
      .join(" ") + " ..."
  );
}
