import { PortableTextBlock } from "next-sanity";

type RunnerData = {
  _id: string;
  name: string;
  slug: string;
  imageURL: string;
  bio: PortableTextBlock[];
  infotext: string;
  birthDate: string;
};

export default RunnerData;
