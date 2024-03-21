import { PortableTextBlock } from "next-sanity";
import AuthorObject from "./AuthorData";
import ImageData from "./ImageData";
import RunnerData from "./RunnerData";

type PostData = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  author: AuthorObject;
  image: ImageData;
  publishedAt: Date;
  location: string;
  runners: RunnerData[];
  body: PortableTextBlock[];
  preview: string;
};

export default PostData;
