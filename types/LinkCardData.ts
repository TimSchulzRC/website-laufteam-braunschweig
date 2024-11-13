import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type LinkCardData = {
  title: string;
  description: string;
  image: ({ alt: string } & SanityImageSource) | null;
  link: string;
};

export default LinkCardData;
