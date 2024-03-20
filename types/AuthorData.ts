import { PortableTextBlock } from "next-sanity";

type AuthorData = {
  name: string;
  slug: string;
  imageURL: string;
  bio: PortableTextBlock[];
};

export default AuthorData;
