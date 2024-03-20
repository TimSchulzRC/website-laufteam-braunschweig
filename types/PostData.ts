import { PortableTextBlock } from "sanity";
import AuthorObject from "./AuthorData";
import RunnerData from "./RunnerData";

type PostData = {
  _id: string;
  title: string;
  slug: string;
  author: AuthorObject;
  imageURL: string;
  publishedAt: Date;
  runners: RunnerData[];
  body: PortableTextBlock[];
  preview: string;
};

export default PostData;
