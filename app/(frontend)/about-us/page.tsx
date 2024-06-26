import ContentSection from "@/app/components/ContentSection";
import { getAboutUsPage } from "@/sanity/sanity-utils";
import SubPageTopSections from "../SubPageTopSections";

export default async function AboutUs() {
  const pageData = await getAboutUsPage();

  return (
    <>
      <SubPageTopSections pageData={pageData} />
      {pageData.sections.map((s) => (
        <ContentSection key={s._key} data={s} />
      ))}
    </>
  );
}
