import ContentSection from "@/components/ContentSection";
import { ABOUT_US_PAGE_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/client";
import { ABOUT_US_PAGE_QUERY } from "@/sanity/queries";
import ContentSectionData from "@/types/ContentSectionData";
import { notFound } from "next/navigation";
import SubPageTopSections from "../../../components/page-components/SubPageTopSections";

export async function generateMetadata() {
  const pageData = await sanityFetch<ABOUT_US_PAGE_QUERYResult>({
    query: ABOUT_US_PAGE_QUERY,
  });
  if (!pageData) return {};
  return {
    title: pageData.title,
    description: pageData.infotext,
  };
}

export default async function AboutUs() {
  const pageData = await sanityFetch<ABOUT_US_PAGE_QUERYResult>({
    query: ABOUT_US_PAGE_QUERY,
  });
  if (!pageData) return notFound();
  return (
    <>
      <SubPageTopSections
        image={pageData.image}
        imageAlt={pageData.image?.alt}
        title={pageData.title}
        subtitle={pageData.subtitle}
      />
      {pageData.sections && (
        <div className="bg-red py-24">
          {pageData.sections.map((s) => (
            <ContentSection
              className="mb-12"
              key={s._key}
              data={s as ContentSectionData}
            />
          ))}
        </div>
      )}
    </>
  );
}
