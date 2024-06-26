import Color from "@/types/Color";
import { PortableTextBlock } from "next-sanity";

type ContentSectionData = {
  _key: string;
  title: string;
  disableTitle: boolean;
  content: PortableTextBlock[];
  backgroundColor: Color;
  textColor: Color;
};

export default ContentSectionData;
