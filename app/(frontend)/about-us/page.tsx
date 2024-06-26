import { getAboutUsPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";
import SubPageTopSections from "../SubPageTopSections";

export default async function AboutUs() {
  const pageData = await getAboutUsPage();

  return (
    <>
      <SubPageTopSections pageData={pageData} />
      <section className="container text-offWhite">
        <PortableText value={pageData.content} />
      </section>
    </>
  );
}
