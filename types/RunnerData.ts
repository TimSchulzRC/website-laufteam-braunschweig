import { PortableTextBlock } from "next-sanity";
import ImageData from "./ImageData";

type RunnerData = {
  _id: string;
  name: string;
  slug: string;
  hallOfFame: boolean;
  image: ImageData;
  bio: PortableTextBlock[];
};

export default RunnerData;
