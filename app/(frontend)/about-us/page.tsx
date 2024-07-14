import ContentSection from "@/app/components/ContentSection";
import { getAboutUsPage } from "@/sanity/sanity-utils";
import SubPageTopSections from "../SubPageTopSections";

export async function generateMetadata() {
  const pageData = await getAboutUsPage();
  return {
    title: pageData.title,
    description: pageData.infotext,
  };
}

export default async function AboutUs() {
  const pageData = await getAboutUsPage();

  return (
    <>
      <SubPageTopSections pageData={pageData} />
      <section className="bg-red py-24">
        {pageData.sections.map((s) => (
          <ContentSection className="mb-12" key={s._key} data={s} />
        ))}
      </section>
    </>
  );
}
