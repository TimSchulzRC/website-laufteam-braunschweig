import { PortableTextBlock } from "next-sanity";
import ImageData from "./ImageData";

type RunnerData = {
  _id: string;
  name: string;
  slug: string;
  image: ImageData;
  bio: PortableTextBlock[];
  birthDate: string;
};

export default RunnerData;
