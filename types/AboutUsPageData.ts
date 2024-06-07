import { PortableTextBlock } from "next-sanity";
import SubPageData from "./SubPageData";

interface AboutUsPageData extends SubPageData {
  content: PortableTextBlock[];
}

export default AboutUsPageData;
